exports.seed = function(knex, Promise) {
    // Deletes ALL existing entries
    return knex('bags')
      .del()
      .then(function() {
        // Inserts seed entries
        return knex('bags').insert([
          { id: 1, username: 'Jake', bag: 'Wanganui', destination: 'Wanga', description: 'bag description 1' },
          { id: 2, username: 'Bruce', bag: 'EDA', destination: 'edeea', description: 'bag description 2' },
          { id: 3, username: 'Suzuki', bag: 'Japan', destination: 'JPN', description: 'bag description 3' }
        ]);
      });
  };