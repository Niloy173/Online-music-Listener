/* get the pause and shuffle initializer */

let pause_btn = document.getElementById("pause-btn");
let shuffle_btn = document.getElementById("shuffle-btn");

let catch_song_no = 0;
let song_name = 0;
let count = 0;

/* get the sad songs initializer */
let song1 = document.getElementById("GhawarBarri");
let song2 = document.getElementById("Kobita_Tumi");
let song3 = document.getElementById("Meghdol");
let song4 = document.getElementById("Nesha");

let sad_song_array = [song1,song2,song3,song4];


/* Generate a random function */

function Random(len)
{
    return Math.floor(Math.random()*len)

}







document.getElementById("sad_emoji").addEventListener("click",function(){


    
        

        catch_song_no = Random(sad_song_array.length);
        song_name = sad_song_array[catch_song_no];
   
       song_name.play();

       
       

       
});


pause_btn.addEventListener("click",function(){

    song_name.pause();
})


shuffle_btn.addEventListener("click",function(){

    // this means the last playlist or feature we took for play
    // it will shuffle itself and play a random song


   song_name.play();

})