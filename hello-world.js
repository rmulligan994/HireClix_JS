console.log("Script file loaded and executing");

   (function() {
     console.log("IIFE executing");
     
     function addButtonListener() {
       console.log("Searching for button");
       const button = document.querySelector('.jsdeliver-hit.w-button');
       
       if (button) {
         console.log("Button found");
         button.addEventListener('click', function() {
           console.log('Hello from the internet!');
         });
       } else {
         console.error('Button with class "jsdeliver-hit w-button" not found');
       }
     }

     if (document.readyState === 'loading') {
       console.log("DOM not ready, adding event listener");
       document.addEventListener('DOMContentLoaded', addButtonListener);
     } else {
       console.log("DOM ready, calling addButtonListener immediately");
       addButtonListener();
     }
   })();

   console.log("End of script file reached");
