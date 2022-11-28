const { faker } = require("@faker-js/faker");

class AuthorsService {
  constructor() {
    this.authors = [];
    this.generate();
  }
  generate() {
    for (let i = 0; i < 10; i++) {
      this.authors.push({
        authorId: i + 1,
        name: faker.name.firstName(),
        lastName: faker.name.lastName(),
      });
    }
  }

  findAll() {
    return this.authors;
  }

  findSingle(id) {
    return this.authors.find((author) => author.authorId === parseInt(id));
  }

  create(data) {
    this.authors.push(data);
    const authorIndex = this.authors.length - 1;
    return {
      message: "Author Created",
      data: this.authors[authorIndex],
    };
  }

  update(id, changes) {
    const index = this.authors.findIndex(
      (author) => author.authorId === parseInt(id)
    );
    this.authors.fill(changes, index, index + 1);
    return {
      message: "Author Updated",
      data: this.authors[index],
    };
  }

  delete(id) {
    const index = this.authors.findIndex(
      (author) => author.authorId === parseInt(id)
    );
    return {
      message: "Author Deleted",
      data: this.authors.splice(index, 1),
    };
  }
}

module.exports = AuthorsService;
