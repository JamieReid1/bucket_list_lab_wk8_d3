const PubSub = require('../helpers/pub_sub.js');
const RequestHelper = require('../helpers/request_helper.js');

const BucketListItems = function(url) {
  this.url = url;
  this.request = new RequestHelper(this.url)
};

BucketListItems.prototype.bindEvents = function () {
  PubSub.subscribe('FormView:new-item-submitted', (event) => {
    this.postNewItem(event.detail);
  });
};

BucketListItems.prototype.getData = function () {
  this.request.get()
  .then((items) => {
    PubSub.publish('BucketListItems: Data-loaded', items)
  })
  .catch(console.error)
};

BucketListItems.prototype.postNewItem = function (event) {
  this.request.post(event)
    .then((items) => {
      PubSub.publish('BucketListItems: Data-loaded', items);
    })
    .catch(console.error);
};

module.exports = BucketListItems;
