const PubSub = require ('../helpers/pub_sub.js')

const ItemView = function (container) {
  this.container = container;
}

ItemView.prototype.render = function (listItem) {
  const form = document.createElement('form');
  form.setAttribute('action', 'post');
  const item = document.createElement('input');
  item.setAttribute('type', 'checkbox');
  item.setAttribute('id', listItem.item);
  const label = document.createElement('label');
  label.setAttribute('for', listItem.item);
  label.textContent = listItem.item;
  const deleteButton = document.createElement('button');
  deleteButton.textContent = 'Delete';
  form.appendChild(item);
  form.appendChild(label);
  form.appendChild(deleteButton);
  this.container.appendChild(form);
};


module.exports = ItemView;
