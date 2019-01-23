const PubSub = require('../helpers/pub_sub.js')
const ItemView = require('./item_view.js')


const ListView = function (container) {
  this.container = container;
};

ListView.prototype.bindEvents = function () {
  PubSub.subscribe('BucketListItems: Data-loaded', (event) => {
    this.render(event.detail);
    console.dir(event.detail);
  })
};

ListView.prototype.render = function (items) {
  this.container.innerHTML = ' ';
  const itemView = new ItemView(this.container);
  items.forEach((item) => itemView.render(item));
};

module.exports = ListView;
