    var results;
    var temp= "";
    var details="";

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
        
    //----------------
    function getArtistSongs(){
        var search = document.getElementById('search').value;
    
    getP("https://api.deezer.com/search/track?limit=10&q="+search)
    .then(function(data){
        document.getElementById("covers").style.display = "block";
        document.getElementById("details").style.display = "none";
        
        results=data.data;
        temp = "";
        for(var item in results){

        temp+=` <div class="col s12 m6 l4">
                    <div class="card">
                        <div class="card-image">
                            <img src="${results[item].album.cover_big}">
                        </div>
                        <div class="card-action">
                            <a onclick='getDetails(${item})'>${results[item].title}</a>
                        </div>
                    </div>
                </div>`;
        }
        
        document.getElementById('covers').innerHTML=temp;
        
    })
    .catch(function(error){
        console.log(error);
    });
    }

    function getDetails(item) {
    document.getElementById("covers").style.display = "none";
    document.getElementById("details").style.display = "block";

    let preview = results[item].preview;
    let cover = results[item].album.cover_big;
    let artist = results[item].artist.name;
    let track = results[item].title;
    let album = results[item].album.title;
    let duration = ((results[item].duration)/60).toFixed(2);

    details = ` <div class="col" id="k">
                    <img class="responsive-img" src="${cover}" id="img-detail" width="300px"> 
                </div>

                <div class="col" id="t">
                    <div class="card" id="info">
                        <div class="card-content">
                            <h5 class="indigo-text text-darken-2">${track}</h5>
                            <h6>Artist: ${artist}</h6>
                            <h6>Album: ${album}</h6>
                            <h6>Duration ${duration} minutes</h6> 
                        </div>
                        <div class="card-action">
                            <audio class="responsive-video" controls>
                            <source src="${preview}" type="audio/mpeg">
                            Your browser does not support the audio element.
                            </audio>
                        </div>
                    </div>     
                </div>`;

        document.getElementById('details').innerHTML=details;

    }