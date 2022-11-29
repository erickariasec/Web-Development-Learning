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
        firstName: faker.name.firstName(),
        lastName: faker.name.lastName(),
        birthDate: faker.date.birthdate(),
        placeOfBirth: faker.address.country(),
        placeOfResidence: faker.address.country(),
        rating: Math.floor(Math.random() * 5) + 1,
        organization: faker.company.name(),
        booksPublished: faker.random.numeric(),
        website: faker.internet.domainName(),
      });
    }
  }

  findAllAuthors() {
    return {
      message: "This list contains all the authors",
      data: this.authors,
    };
  }

  findAuthorById(id) {
    return {
      message: "You searched an author by id",
      data: this.authors.find((author) => author.authorId === parseInt(id)),
    };
  }

  findAuthorByLastName(lastName) {
    const authorByLastNameInformation = this.authors.find(
      (author) => author.lastName === lastName
    );
    if (authorByLastNameInformation) {
      return {
        message: "You searched an author by last name",
        data: authorByLastNameInformation,
      };
    } else {
      return {
        message: `The author's last name: '${lastName}' does not exist!`,
      };
    }
  }

  createAuthor(data) {
    this.authors.push(data);
    const authorIndex = this.authors.length - 1;
    return {
      message: "Author Created",
      data: this.authors[authorIndex],
    };
  }

  updateAuthor(id, changes) {
    const index = this.authors.findIndex(
      (author) => author.authorId === parseInt(id)
    );
    this.authors.fill(changes, index, index + 1);
    return {
      message: "Author Updated",
      data: this.authors[index],
    };
  }

  deleteAuthor(id) {
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
