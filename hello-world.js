(function() {
    function addButtonListener() {
        const button = document.querySelector('.jsdeliver-hit w-button');
        
        if (button) {
            button.addEventListener('click', function() {
                console.log('Hello from the internet!');
            });
        } else {
            console.error('Button with class "jsdeliver-hit" not found');
        }
    }

    // If the DOM is already loaded, run the function
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', addButtonListener);
    } else {
        addButtonListener();
    }
})();
