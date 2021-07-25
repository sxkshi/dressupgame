   function play() {
       var audio = new Audio();
       audio.src = "https://www.soundjay.com/free-music/sounds/heart-of-the-sea-01.mp3";
       // "https://www.soundjay.com/free-music/midnight-ride-01a.mp3";
       audio.loop = true;
       audio.play();
   };





   $(document).ready(function() {

       function Imagechange(choices, i) {
           i = 0;

           this.Next = function() {
               hide_current_img();
               show_next_img();
           }

           var hide_current_img = function() {
               if (choices) {
                   choices[i].style.visibility = "hidden";
                   i += 1;
               }
           }
           var show_next_img = function() {
               if (choices) {
                   if (i == (choices.length)) {
                       i = 0;
                   }
                   choices[i].style.visibility = "visible";
               }
           }
       }
       var hair = $(".hair");
       var dress = $(".dress");
       var pants = $(".pant");
       var shirt = $(".shirt");
       var shoe = $(".shoe");
       var backgrounds = $(".bg");

       var hair_choose = new Imagechange(hair);
       document.getElementById("hair_button").onclick = function() { hair_choose.Next(); };

       var dress_choose = new Imagechange(dress);
       document.getElementById("dress_button").onclick = function() { dress_choose.Next(); };

       var shirt_choose = new Imagechange(shirt);
       document.getElementById("shirt_button").onclick = function() { shirt_choose.Next(); };

       var pants_choose = new Imagechange(pants);
       document.getElementById("pant_button").onclick = function() { pants_choose.Next(); };

       var shoe_choose = new Imagechange(shoe);
       document.getElementById("shoe_button").onclick = function() { shoe_choose.Next(); };


       var bg_choose = new Imagechange(backgrounds);
       document.getElementById("bg_button").onclick = function() { bg_choose.Next(); };

   });

   $("#shirt_button").click(function() {
       $("#shirt-menu").css("visibility", "visible");
   });