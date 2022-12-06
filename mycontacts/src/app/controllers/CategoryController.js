const CategoryRepository = require('../repositories/CategoryRepository');

class CategoryController {
  async delete(request, response) {
    const { id } = request.params;
    const category = await CategoryRepository.findById(id);
    if (!category) {
      return response.status(404).json({ error: 'User not found' });
    }

    await CategoryRepository.delete(id);

    return response.sendStatus(204);
  }

  async index(request, response) {
    const { orderBy } = request.params;
    const categories = await CategoryRepository.findAll(orderBy);

    return response.json(categories);
  }

  async show(request, response) {
    const { id } = request.params;
    const category = await CategoryRepository.findById(id);

    return response.json(category);
  }

  async store(request, response) {
    const { name } = request.body;
    if (!name) {
      return response.status(400).json({ error: 'Name is required' });
    }

    const categoryExists = await CategoryRepository.findByName(name);
    if (categoryExists) {
      return response.status(400).json({ error: 'Name already exists' });
    }

    const category = await CategoryRepository.create({ name });

    return response.json(category);
  }

  async update(request, response) {
    const { id } = request.params;
    const { name } = request.body;

    if (!name) {
      return response.status(400).json({ error: 'Name is required' });
    }

    const categoryExists = await CategoryRepository.findById(id);
    if (!categoryExists) {
      return response.status(400).json({ error: 'Category not found' });
    }

    const updatedCategory = await CategoryRepository.update(id, { name });

    return response.json(updatedCategory);
  }
}

module.exports = new CategoryController();
