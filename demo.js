var burntToast = new BurntToast();
var button = document.querySelector('#make_toast');
var button2 = document.querySelector('#make_toast_2');

button.addEventListener('click', function() {
<<<<<<< HEAD
    burntToast.makeToast('Hi there', {
=======
    burntToast.makeToast("Toasted!", {
>>>>>>> master
        duration: 2000
    });
});

button2.addEventListener('click', function() {
<<<<<<< HEAD
    burntToast.makeToast('Toasted!', {
=======
    burntToast.makeToast("Don't Burn the Toast!", {
>>>>>>> master
        duration: 2000,
        location: {
            left: true
        }
    });
});