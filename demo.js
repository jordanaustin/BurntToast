var burntToast = new BurntToast();
var toastBtn1 = document.querySelector('#make_toast');
var toastBtn2 = document.querySelector('#make_toast_2');
var toastAction = document.querySelector('#make_toast_action');

function doUndo() {
    burntToast.makeToast('Undo action success!');
}

toastBtn1.addEventListener('click', function() {
    burntToast.makeToast('Toasted!', {
        duration: 2000
    });
});

toastBtn2.addEventListener('click', function() {
    burntToast.makeToast('Don\'t Burn the Toast!', {
        duration: 2000,
        location: {
            left: true
        }
    });
});

toastAction.addEventListener('click', function() {
    burntToast.makeToast('Toast with Action!', {
        duration: 4000,
        action: {
            string: 'Undo',
            callback: doUndo
        }
    });
});
