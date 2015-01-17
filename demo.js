var burntToast = new BurntToast();
var button = document.querySelector('#make_toast');

button.addEventListener('click', function() {
    burntToast.makeToast('Hi there', {
        duration: 2000
    });
});