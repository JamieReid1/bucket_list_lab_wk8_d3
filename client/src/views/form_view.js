const PubSub = require('../helpers/pub_sub.js');
const RequestHelper = require('../helpers/request_helper.js');


const FormView = function(form) {
  this.form = form;
};


FormView.prototype.bindEvents = function () {
  this.form.addEventListener('submit', (event) => {
    this.handleSubmit(event);
  });
};

FormView.prototype.handleSubmit = function (event) {
  event.preventDefault();
  const newItem = this.createNewItem(event);
  PubSub.publish('FormView:new-item-submitted', newItem);
  event.target.reset();
};

FormView.prototype.createNewItem = function (form) {
  console.dir(form);
  const newItem = {
    item: form.target.newItem.value
  };
  return newItem;
};

module.exports = FormView;
