# BurntToast
JavaScript toasts, with zero dependancies. Oh and it's responsive!

BurntToast is styled after the Android Material Design toast/snackbar.

On mobile (small screens) BurntToast goes from a full width bar at the bottom of the screen (sometimes called a snackbar) to an auto-width toast on larger screens.


### Using BurntToast
Clone BurntToast or install from npm using:

    $  npm install burnt-toast

Using require: just require the BurntToast module and call .makeToast() like:

    var burntToast = require('BurntToast');
    burntToast.makeToast('Mmm I like BurntToast');

If using burnt toast without npm or require simply include the BurntToast.js file in your html document:

    <script src="path/to/BurntToast.js"></script>

Then instantiate BurntToast and call .makeToast() like so:

    var burntToast = new BurntToast();
    burntToast.makeToast('My first BurntToast');

#### Options
First and foremost you can optionally pass a duration:

    burntToast.makeToast('Toast with options', {
        duration: 4000
    });

##### Positioning
I'm working on more positions. Here are the currently supported positions that work on larger screens.

    burntToast.makeToast('Set to bottom left', {
        position: 'left'
    });

##### Actions (NEW)
You can add custom actions to the toast messages. Just pass in a string to the text property and a callback function for when the user clicks the action item.

    function myCallbackFunc() {
        alert('User clicked undo!');
    }

    burntToast.makeToast('Yay! Custom actions', {
        action: {
            text: 'Undo',
            callback: myCallbackFunc  
        }
    });

##### Let me know
If you're using BurntToast and feel like letting me know, please do. I'd love to see it in action.


Done. Go burn toast!
