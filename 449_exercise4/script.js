const images = document.querySelectorAll('img');
const a = document.querySelectorAll('a');
const textElements = document.querySelectorAll('p');
 
images.forEach(img => {
    img.addEventListener('mouseover', function() {
      document.body.style.cursor = 'url(../images/bunnyview.png), auto';
    });
    
    img.addEventListener('mouseout', function() {
      document.body.style.cursor = 'url(../images/bunnygray.png), auto';
    });

});    

a.forEach(link => {
    link.addEventListener('mouseover', function() {
      link.style.cursor = 'url(../images/bunnywhite.png), auto';
    });
    
    link.addEventListener('mouseout', function() {
      link.style.cursor = 'url(../images/bunnygray.png), auto';
    });
});


// with help from chatgpt

