'use strict';

function polyfill() {
    Element.prototype.remove = function() {
        this.parentElement.removeChild(this);
    }

    if (Object.getPrototypeOf(Object.getPrototypeOf(HTMLSelectElement)) === null) {
        HTMLSelectElement.prototype.remove = Element.prototype.remove;
    }
    
    NodeList.prototype.remove = HTMLCollection.prototype.remove = function() {
        for(var i = this.length - 1; i >= 0; i--) {
            if(this[i] && this[i].parentElement) {
                this[i].parentElement.removeChild(this[i]);
            }
        }
    }
}

module.exports = {
    polyfill: polyfill,
}
