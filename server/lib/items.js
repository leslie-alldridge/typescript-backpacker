const environment = process.env.NODE_ENV || "development";
const config = require("../../knexfile")[environment];
const knex = require("knex")(config);

function getItems(id, testDb) {
  const connection = testDb || knex;
  return connection("bagitems")
    .select()
    .where({bagid: id });
}

module.exports = {
  getItems
};
