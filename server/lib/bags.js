const environment = process.env.NODE_ENV || "development";
const config = require("../../knexfile")[environment];
const knex = require("knex")(config);

function getBags(testDb) {
  console.log("hit");

  const connection = testDb || knex;
  return connection("bags").select();
  // .where("username", username);
}

function addBags(bag, testDb) {
  console.log(bag);

  const connection = testDb || knex;
  return connection("bags").insert({
    bag: "testbag",
    description: bag.description,
    destination: bag.destination,
    username: bag.username
  });
}

function deleteBag(id, testDb) {
  const connection = testDb || knex;
  return connection("bags")
    .where("id", id)
    .del()
    .then(data => {
      return connection("bags").select();
      // .where("username", username);
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
      return connection("bags").select();
      // .where("username", username);
    });
}

module.exports = {
  getBags,
  addBags,
  deleteBag,
  updateBag
};
