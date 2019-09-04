// Select all rows. Resolves with a (possibly empty) array
User.findAll().then(...)
// Select all rows where firstName === 'Dave', but only return the first one.
// Resolves with an object or undefined (if no matching rows exist)
User.findOne({where: {firstName: 'Dave'}}).then(...)
// Select a row by its primary key. Resolves with an object or undefined (if no matching rows exist)
User.findByPk(3).then(...)
// A query using a numeric operator
const Op = Sequelize.Op;
User.findAll({
    // WHERE height >= 175
    where: {
        height: {
            [Op.gte]: 175 // gte stands for 'greater than or equal'
        }
    }
}).then(...)



//Keep track of the number of results, but only show a few AKA pagination

Project
  .findAndCountAll({
     where: {
        title: {
          [Sequelize.Op.like]: 'foo%'
        }
     },
     offset: 10,
     limit: 2
  })
  .then(result => {
    console.log(result.count);
    console.log(result.rows);
  });


  // get clean console.logs

  Person.create({
    name: 'Rambow',
    firstname: 'John'
  }).then(john => {
    console.log(john.get({      // .get ({ plain: true})
      plain: true
    }))
  })