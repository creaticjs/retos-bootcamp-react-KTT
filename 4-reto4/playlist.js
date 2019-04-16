var temp= "";
var play_title = "";
var response;
var temp2 = "";
var temp1 = "";

function getP(url) {
    return new Promise(function(resolve,reject){
        var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function() {
        if (this.readyState == 4) {
            if (this.status == 200) {
            resolve(JSON.parse(this.responseText))     
        }
        else{
            reject(this.status);
        }
        } 
    };    
    xhttp.open("GET",url);
    xhttp.send();
    });
}

    //-------------- 
    var arrUrl = ['https://api.deezer.com/playlist/1490558021/',
                'https://api.deezer.com/playlist/1934257882/',
                'https://api.deezer.com/playlist/1313621735/',
                'https://api.deezer.com/playlist/2021502402/',
                'https://api.deezer.com/playlist/1964085082/',
                'https://api.deezer.com/playlist/2097558104/'];
    
        
    var promises = arrUrl.map(function (url) {
        return getP(url);
    })
    //----------------

function getPlaylists() {

    document.getElementById("covers").style.display = "block";
    document.getElementById("playlist").style.display = "none";

    Promise.all(promises)
    .then(function(results){
        
        temp = "";
        results.forEach(function (res, i) {
 
            temp += ` <div class="col s12 m6 l4">
                    <div class="card">
                        <div class="card-image">
                            <img src="${res.picture_big}">
                        </div>
                        <div class="card-action">
                            <a onclick='getSongs(${i})'>${res.title}</a>
                        </div>
                    </div>
                </div>`;
        });

        play_title = results;
         
        document.getElementById('covers').innerHTML = temp;
    
    })
    .catch (error =>{
        console.log(error);
    }); 
}


function getSongs(item) {
    var i = item;
    document.getElementById("covers").style.display = "none";
    document.getElementById("playlist").style.display = "block";

    var url_end = "tracks&limit=12";

    getP(arrUrl[item] + url_end)
        .then(function (data) {
            console.log(data);
            response = data.data;

            temp1=`<thead>
                        <tr>
                            <th>Song</th>
                            <th>Artist</th>
                            <th>Preview</th>
                        </tr>
                    </thead><tbody>`
            
            for (var item in response) {
            
                temp2 += `<tr>
                        <td>${response[item].title}</td>
                        <td>${response[item].artist.name}</td>
                        <td><audio class="responsive-video" controls>
                            <source src="${response[item].preview}" type="audio/mpeg">
                            Your browser does not support the audio element.
                        </audio>
                        </td>
                        </tr>`;
            }

            document.getElementById('playlist').innerHTML = `<thead>${(play_title[i].title).toUpperCase()}</thead>${temp1}${temp2}</tbody>`;
                 
        })
        .catch(error => {
            console.log(error);
        });
} 

getPlaylists();