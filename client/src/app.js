const BucketListItems = require('./models/bucket_list_items.js')
const ListView = require('./views/list_view.js');

document.addEventListener('DOMContentLoaded', () => {

  const listContainer = document.querySelector('#bucket-list');
  const listView = new ListView(listContainer);
  listView.bindEvents();

  const url = 'http://localhost:3000/api/items'
  const items = new BucketListItems(url)
  // items.bindEvents();
  items.getData();
})
