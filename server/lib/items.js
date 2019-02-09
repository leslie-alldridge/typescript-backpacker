const environment = process.env.NODE_ENV || "development";
const config = require("../../knexfile")[environment];
const knex = require("knex")(config);

function getItems(id, testDb) {
  const connection = testDb || knex;
  return connection("bagitems")
    .select()
    .where({bagid: id });
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
        .where({ bagid: id });
    });
}

module.exports = {
  getItems,
  archiveBagItem
};
