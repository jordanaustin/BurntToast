var burntToast = new BurntToast();
var button = document.querySelector('#make_toast');
var button2 = document.querySelector('#make_toast_2');

button.addEventListener('click', function() {
    burntToast.makeToast('Hi there', {
        duration: 2000
    });
});

button2.addEventListener('click', function() {
    burntToast.makeToast('Toasted!', {
        duration: 2000,
        location: {
            left: true
        }
    });
});