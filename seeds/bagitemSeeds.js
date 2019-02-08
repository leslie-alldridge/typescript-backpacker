exports.seed = function(knex, Promise) {
    // Deletes ALL existing entries
    return knex('bagitems')
      .del()
      .then(function() {
        // Inserts seed entries
        return knex('bagitems').insert([
          { id: 1, bagid: 1, username: 'Jake', bagitem: 'Wanganui item', archived: false },
          { id: 2, bagid: 2, username: 'Bruce', bagitem: 'EDA item', archived: true },
          { id: 3, bagid: 3, username: 'Suzuki', bagitem: 'Japan item', archived: false }
        ]);
      });
  };