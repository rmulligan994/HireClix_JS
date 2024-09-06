document.addEventListener('DOMContentLoaded', function() {
    const button = document.querySelector('.jsdeliver-hit');
    
    if (button) {
        button.addEventListener('click', function() {
            console.log('Hello from the internet!');
        });
    } else {
        console.error('Button with class "jsdeliver-hit" not found');
    }
});
