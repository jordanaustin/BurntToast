'use strict';

function BurntToast(config) { // This is a singleton. Use makeToast to show a toast after you've instantiated BurntToast
    var msg, parent;

    config = config || {}

    this.queue = [];
    this.timer = null;

    if(!this.el)  {
        this.el = document.createElement('div');
        this.el.setAttribute('id', 'burnttoast');
        this.el.classList.add('burnt-toast');
        msg = document.createElement('p');
        msg.setAttribute('id','message');
        this.el.appendChild(msg);

        if(config.wrapper) {
            parent = document.querySelector(config.wrapper);
            parent.appendChild(this.el);
        }
        else {
            document.body.appendChild(this.el);
        }

        this.message = this.el.querySelector('#message');

        this.el.addEventListener('click', function() {
            this.hideToast();
        }.bind(this));
    }

    this._checkQueue = function() {
        this.el.classList.remove('left');
        this.el.classList.remove('top');

        this.el.removeEventListener('transitionend', this._checkQueue);
        if (this.queue.length > 0) {
            this._makeToast(this.queue.shift());
        }
    }.bind(this);

}

BurntToast.prototype._popUpToast = function() {
    this.el.classList.add('show');
};

BurntToast.prototype._makeToast = function(toastObj) {
    this.message.textContent = toastObj.message;

    if(toastObj.options && toastObj.options.location) {
        if(toastObj.options.location.top) {
            this.el.classList.add('top');
        }
        if(toastObj.options.location.left) {
            this.el.classList.add('left');
        }
    }

    this._popUpToast();

    this.timer = setTimeout(function() {
        this.hideToast();
        this.el.addEventListener('transitionend', this._checkQueue);
    }.bind(this), toastObj.options.duration);
};

BurntToast.prototype.hideToast = function() {
    this.el.classList.remove('show');

    clearTimeout(this.timer);
    this.timer = null;
};

BurntToast.prototype.makeToast = function(string, options) {
    options = options || { duration: 1400, location: {bottom: true, middle: true} };

    var toastObj = {
            message: string,
            options: options
    };

    this.queue.push(toastObj);
    if(this.timer === null) {
        this._makeToast(this.queue.shift());
    }
};

if (typeof exports !== 'undefined') {
  if (typeof module !== 'undefined' && module.exports) {
    module.exports = BurntToast;
  }
}