HTMLCollection.prototype.evt = function (eventName, cb) {
    for (let i = 0; i < this.length; i++) {
        this[i].addEventListener(eventName, cb)
    }
}