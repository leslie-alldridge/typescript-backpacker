const environment = process.env.NODE_ENV || "development";
const config = require("../../knexfile")[environment];
const knex = require("knex")(config);

function getItems(id, testDb) {
  const connection = testDb || knex;
  return connection("bagitems")
    .select()
    .where({ bagid: id });
}

function archiveBagItem(username, id, item, testDb) {
  const connection = testDb || knex;
  return connection("bagitems")
    .where({ bagid: id, bagitem: item })
    .update({
      archived: false
    })
    .then(data => {
      return connection("bagitems")
        .select()
        .where({ username: username, bagid: id });
    });
}

function addItem(username, id, input, testDb) {
  const connection = testDb || knex;
  return connection("bagitems")
    .insert({
      bagid: id,
      username: username,
      bagitem: input,
      archived: true
    })
    .then(data => {
      return connection("bagitems").where({
        bagid: id
      });
    });
}

function deleteItem(username, bagid, item, testDb) {
  const connection = testDb || knex;
  return connection("bagitems")
    .where("bagitem", item)
    .del()
    .then(data => {
      return connection("bagitems")
        .select()
        .where({ username: username, bagid: bagid });
    });
}

module.exports = {
  getItems,
  archiveBagItem,
  addItem,
  deleteItem
};
