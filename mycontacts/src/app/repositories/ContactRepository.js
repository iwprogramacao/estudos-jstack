const { v4 } = require('uuid');

let contacts = [
  {
    id: v4(),
    name: 'Igor Wiepieski',
    email: 'igor@mail.com',
    phone: '45999998888',
    category_id: v4(),
  },
  {
    id: v4(),
    name: 'Jose Armani',
    email: 'jose@mail.com',
    phone: '45933338888',
    category_id: v4(),
  },
];

class ContactRepository {
  findAll() {
    return new Promise((resolve) => {
      resolve(contacts);
    });
  }

  findById(id) {
    return new Promise((resolve) => {
      resolve(contacts.find((contact) => contact.id === id));
    });
  }

  delete(id) {
    return new Promise((resolve) => {
      contacts = contacts.filter((contact) => contact.id !== id);
      resolve();
    });
  }
}

module.exports = new ContactRepository();
