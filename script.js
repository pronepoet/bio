
var img = document.getElementById('MyImg');


function Image(){
    var modal = document.getElementById('myModal');
    var modalImg = document.getElementById("img01");
    var captionText = document.getElementById("caption");
    img.onclick = function(){
      modal.style.display = "block";
      modalImg.src = this.src;
      captionText.innerHTML = this.alt;
    }
    
    // Get the <span> element that closes the modal
    var span = document.getElementsByClassName("close")[0];
    
    // When the user clicks on <span> (x), close the modal
    span.onclick = function() { 
      modal.style.display = "none";
    }

}
Image();

var img = document.getElementById('MyImg2');
Image();

var img = document.getElementById('MyImg3');
Image();
var img = document.getElementById('MyImg4');
Image();

var img = document.getElementById('MyImg5');
Image();

var img = document.getElementById('MyImg6');
Image();

var img = document.getElementById('MyImg7');
Image();

var img = document.getElementById('MyImg8');
Image();
var img = document.getElementById('MyImg9');
Image();

