
var results;
var temp= "";
var details="";
document.getElementById("loader").style.display = "block";

function getP(url) {
    return new Promise(function(resolve,reject){
        $.get(url, function (data) {
            setTimeout(function() {
                resolve(data);
              }, 2000);
            
        })
        .fail(()=>reject());
        
    });
}
    
//----------------
async function getRecommendation() {

    var random = Math.floor((Math.random() * 19) + 0)
    
        try {
            var res = await getP("https://api.deezer.com/playlist/1255190313/tracks&limit=20")
            
            document.getElementById("loader").style.display = "none";

        let preview = res.data[random].preview;
        let cover = res.data[random].album.cover_big;
        let artist = res.data[random].artist.name;
        let track = res.data[random].title;
        let album = res.data[random].album.title;
        let duration = ((res.data[random].duration) / 60).toFixed(2);

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

        document.getElementById('details').innerHTML = details;
    }
    catch(error){
        console.log(error);
    };
    
}

getRecommendation();