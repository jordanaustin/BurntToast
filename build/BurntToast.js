'use strict';

function BurntToast(config) { // This is a singleton. Use makeToast to show a toast after you've instantiated BurntToast
    var msg, parent, actionBtn;

    config = config || {}

    this.queue = [];
    this.timer = null;

    if(!this.el)  {
        this.el = document.createElement('div');
        this.el.setAttribute('id', 'burnttoast');
        this.el.classList.add('burnt-toast');
        msg = document.createElement('p');
        msg.setAttribute('class','burnt_message');
        actionBtn = document.createElement('span');
        actionBtn.setAttribute('class', 'burnt_action');
        this.el.appendChild(msg);
        this.el.appendChild(actionBtn);

        if (config.wrapper) {
            parent = document.querySelector(config.wrapper);
            parent.appendChild(this.el);
        }
        else {
            document.body.appendChild(this.el);
        }

        this.actionBtn = actionBtn;
        this.message = msg;

        this.el.addEventListener('click', function() {
            this.hideToast();
        }.bind(this));
    }

    this._checkQueue = function() {
        this.el.classList.remove('top');
        this.el.classList.remove('left');
        this.actionBtn.textContent = '';

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

    if (toastObj.options) {
        if (toastObj.options.hasOwnProperty('location')) {
            if (toastObj.options.location.hasOwnProperty('top') && toastObj.options.location.top) {
                this.el.classList.add('top');
            }
            if (toastObj.options.location.hasOwnProperty('left') && toastObj.options.location.left) {
                this.el.classList.add('left');
            }
        }

        if (toastObj.options.action) {
            this.actionBtn.textContent = toastObj.options.action.string;
            this.actionBtn.addEventListener('click', toastObj.options.action.callback);
        }
    }

    this._popUpToast();

    this.timer = setTimeout(function() {
        this.hideToast();
    }.bind(this), toastObj.options.duration);
};

BurntToast.prototype.hideToast = function() {
    this.el.classList.remove('show');
    this.el.addEventListener('transitionend', this._checkQueue);

    clearTimeout(this.timer);
    this.timer = null;
};

BurntToast.prototype.makeToast = function(string, options) {
    options = options || {
        duration: 1400,
        location: { bottom: true, middle: true },
        action: {} //example usage to pass in: { string: 'Undo', callback }
     };

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
