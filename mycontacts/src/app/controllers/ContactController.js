const ContactRepository = require('../repositories/ContactRepository');

class ContactController {
  /* Async, pois receberemos os dados de um banco de dados futuramente */
  async index(request, response) {
    const contacts = await ContactRepository.findAll();

    response.json(contacts);
  }

  async show(request, response) {
    const { id } = request.params;
    const contact = await ContactRepository.findById(id);

    if (!contact) {
      return response.status(404).json({ error: 'User not found' });
    }

    return response.json(contact);
  }

  async store(request, response) {
    const { name, email, phone } = request.body;

    if (!name) {
      return response.status(400).json({ error: 'Name is required' });
    }

    const contactExist = await ContactRepository.findByEmail(email);

    if (contactExist) {
      return response.status(400).json({ error: 'This e-mail is already been taken' });
    }

    const contact = await ContactRepository.create({ name, email, phone });

    return response.json(contact);
  }

  update() {

  }

  async delete(request, response) {
    const { id } = request.params;
    const contact = await ContactRepository.findById(id);

    if (!contact) {
      return response.status(404).json({ error: 'User not found' });
    }

    await ContactRepository.delete(id);
    // Status 204 - No Content
    return response.sendStatus(204);
  }
}

module.exports = new ContactController();
