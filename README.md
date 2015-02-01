# BurntToast
Android style JavaScript toasts, with zero dependancies. Oh and it's responsive!

On mobile (small screens) BurntToast goes from a full width bar at the bottom of the screen (sometimes called a snackbar) to an auto-width toast on larger screens.


### Using BurntToast
Clone BurntToast or install from npm using:

    $  npm install burnt-toast

Using require, just require the BurntToast module and call .makeToast() like:

    var burntToast = require('BurntToast');
    burntToast.makeToast('Mmm I like BurntToast');

If using burnt toast without npm or require simply include the BurntToast.js file in your html document:

    <script src="path/to/BurntToast.js"></script>

Then instantiate BurntToast once and then call .makeToast() like so:

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


Done. Go burn toast!

