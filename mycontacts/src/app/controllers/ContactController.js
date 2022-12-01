class ContactController {
  index(request, response) {
    response.send('Send from ContactController');
  }

  show() {

  }

  update() {

  }

  delete() {

  }
}

module.exports = new ContactController();
