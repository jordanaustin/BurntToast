# BurntToast
Android style toasts

### Using BurntToast
Clone BurntToast or install from npm using:

    $  npm install burnt-toast

If using burnt toast without npm or require simply include the BurntToast.js file in your html document

    <script src="path/to/BurntToast.js"></script>

Then instantiate BurntToast once, then call makeToast.

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

For desktop/responsive sites BurntToast goes from a full width bar at the bottom of the screen (sometimes called a snackbar) to an auto-width toast on larger screens.



Done. Go burn toast!

