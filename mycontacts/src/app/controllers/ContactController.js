const ContactRepository = require('../repositories/ContactRepository');

class ContactController {
  /* Async, pois receberemos os dados de um banco de dados futuramente */
  async index(request, response) {
    const contacts = await ContactRepository.findAll();

    response.json(contacts);
  }

  show() {

  }

  update() {

  }

  delete() {

  }
}

module.exports = new ContactController();
