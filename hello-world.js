(function() {
     console.log("Script is running");  // Verification log
     
     function addButtonListener() {
       const button = document.querySelector('.jsdeliver-hit.w-button');
       
       if (button) {
         console.log("Button found");  // Verification log
         button.addEventListener('click', function() {
           console.log('Hello from the internet!');
         });
       } else {
         console.error('Button with class "jsdeliver-hit w-button" not found');
       }
     }

     // If the DOM is already loaded, run the function
     if (document.readyState === 'loading') {
       document.addEventListener('DOMContentLoaded', addButtonListener);
     } else {
       addButtonListener();
     }
   })();
