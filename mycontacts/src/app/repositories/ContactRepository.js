const { v4 } = require('uuid');

const db = require('../../database');

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

  findByEmail(email) {
    return new Promise((resolve) => {
      resolve(contacts.find((contact) => contact.email === email));
    });
  }

  delete(id) {
    return new Promise((resolve) => {
      contacts = contacts.filter((contact) => contact.id !== id);
      resolve();
    });
  }

  async create({
    name, email, phone, category_id,
  }) {
    /* [row] pois o retorno do db.query é um array das linhas do banco de dados */
    const [row] = await db.query(`
    INSERT INTO contacts (name, email, phone, category_id)
    VALUES ($1, $2, $3, $4)
    RETURNING *
    `, [name, email, phone, category_id]);

    return row;
  }

  update(id, {
    name, email, phone,
  }) {
    return new Promise((resolve) => {
      const updatedContact = {
        id,
        name,
        email,
        phone,
      };

      contacts = contacts.map((contact) => (contact.id === id ? updatedContact : contact));

      resolve(updatedContact);
    });
  }
}

module.exports = new ContactRepository();
