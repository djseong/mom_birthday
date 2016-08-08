  function switchImages(spinner, callback) {
    var imgs = document.getElementsByTagName("img"); 
    //console.log($('img')[0]);
    console.log("target length " + imgs.length)
    for (var i = 0; i < imgs.length; i++) {
      var loadcounter = 0;
      if (imgs[i].id != "dialogpic") {
        b_imagepath = "/mom_app_pictures/b_image" + Math.floor(Math.random() * 182 + 1) + ".jpg"
        imgs[i].src = chrome.extension.getURL(b_imagepath)
        $(imgs[i]).on('load', function() {
          loadcounter++; 
          console.log(loadcounter)
          callback(null)
          if (loadcounter == imgs.length) {
            console.log("callback")
            callback(null);
          }
        })
        .attr('src', chrome.extension.getURL(b_imagepath));
      }
  }
    console.log("done")
    // window.onload() = function() {
    // callback(null); 
  //}
}

  function displayAlert() {
     document.body.innerHTML += "<div id='dialogoverlay'><div id='dialogbox'><img id='dialogpic' alt='img'><br><p>Happy Birthday Mom!</p><button id='dialogaction'>OK</button></div></div>"
      // document.getElementById('dialogbox').style.left =   (window.innerWidth - 350)/2+"px";
      document.getElementById("dialogpic").src = chrome.extension.getURL("/mom_app_pictures/b_image88.jpg")
       document.getElementById('dialogaction').onclick = function() {
          var box = document.getElementById('dialogbox'); 
          var overlay = document.getElementById('dialogoverlay');  
          var spinner = new Spinner(opts).spin(box);
          switchImages(spinner, function(error){
            if (error) {
              alert(error)
            }
            var box = document.getElementById('dialogbox');
            var overlay = document.getElementById('dialogoverlay'); 
            overlay.parentNode.removeChild(overlay);
            box.parentNode.removeChild(box);
            //document.getElementsByClassName("spinner")[0].stop()
             spinner.stop()
            // overlay.parentNode.removeChild(overlay);
            // box.parentNode.removeChild(box);
          })
          
          //var spinnerbox = document.getElementById('dialogspinner');        
          //spinner.spin(box)
          
          
          // spinner.opts.top = (box.offsetHeight / 2 + 50) + "px";
          // console.log(spinner.opts.top);
          // var overlay = document.getElementById('dialogoverlay'); 
          // overlay.parentNode.removeChild(overlay);
          // box.parentNode.removeChild(box);
  }
}

  displayAlert()
  // counter = 0;
  // switchImages(function(error, counter) {
  //   if (error) {
  //     alert(error)
  //   }
  //   else {
  //      document.body.innerHTML += "<div id='dialogoverlay'><div id='dialogbox'><img id='dialogpic' alt='img'><br><p>Happy Birthday Mom!</p><button id='dialogaction'>OK</button></div></div>"
  //     // document.getElementById('dialogbox').style.left =   (window.innerWidth - 350)/2+"px";
  //     document.getElementById("dialogpic").src = chrome.extension.getURL("/mom_app_pictures/b_image88.jpg")
  //      document.getElementById('dialogaction').onclick = function() {
  //         var overlay = document.getElementById('dialogoverlay'); 
  //         overlay.parentNode.removeChild(overlay);
  //         var box = document.getElementById('dialogbox'); 
  //         box.parentNode.removeChild(box);
  //         //document.getElementById('dialogbox').style.display='none';
  //      }
    

       //<dialog>This is a dialog.<br><button>Close</button></dialog>";
        // var dialog = document.querySelector("dialog")
        // dialog.querySelector("button").addEventListener("click", function() {
        //     dialog.close()
        // })
        // dialog.showModal()
      //"<object type = 'text/html' data= '${alertURL}'></object>"
      // alert("You changed " + counter + " images to pictures of Daniel!")
  //   }
  // })


