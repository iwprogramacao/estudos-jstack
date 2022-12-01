const { uuid } = require('uuidv4');

const contacts = [
  {
    id: uuid(),
    name: 'Igor Wiepieski',
    email: 'igor@mail.com',
    phone: '45999998888',
    category_id: uuid(),
  },
];

class ContactRepository {
  findAll() {
    return new Promise((resolve) => {
      /* Somente o resolve, pois não compete ao
      Repository tratar o erro de acesso à fonte de dados */
      resolve(contacts);
    });
  }
}

module.exports = new ContactRepository();
