const BucketListItems = require('./models/bucket_list_items.js')

document.addEventListener('DOMContentLoaded', () => {
  const url = 'http://localhost:3000/api/items'
  const items = new BucketListItems(url)
  // items.bindEvents();
  items.getData();
})
