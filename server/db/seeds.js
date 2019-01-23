use bucket_list;
db.dropDatabase();

db.bucketListItems.insertMany([
  { item: "Bungee Jump" },
  { item: "Learn Instrument TBD" },
  { item: "Visit Japan" }
]);
