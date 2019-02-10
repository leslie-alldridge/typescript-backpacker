const environment = process.env.NODE_ENV || "development";
const config = require("../../knexfile")[environment];
const knex = require("knex")(config);

function getBags(username, testDb) {
  const connection = testDb || knex;
  return connection("bags")
    .select()
    .where("username", username);
}

function addBags(user, bag, testDb) {
  const connection = testDb || knex;
  return connection("bags").insert({
    description: bag.description,
    destination: bag.destination,
    username: user
  });
}

function deleteBag(id, username, testDb) {
  const connection = testDb || knex;
  return connection("bags")
    .where("id", id)
    .del()
    .then(data => {
      return connection("bags")
        .select()
        .where("username", username);
    });
}

function updateBag(id, destination, description, username, testDb) {
  const connection = testDb || knex;
  return connection("bags")
    .where("id", id)
    .update({
      destination: destination,
      description: description
    })
    .then(data => {
      return connection("bags")
        .select()
        .where("username", username);
    });
}

module.exports = {
  getBags,
  addBags,
  deleteBag,
  updateBag
};
