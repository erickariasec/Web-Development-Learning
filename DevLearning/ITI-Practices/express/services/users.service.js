const { faker } = require("@faker-js/faker");

class UsersService {
  constructor() {
    this.users = [];
    this.generate();
  }
  generate() {
    for (let i = 0; i < 10; i++) {
      this.users.push({
        userId: i + 1,
        name: faker.name.firstName(),
        lastName: faker.name.lastName(),
        userName: faker.internet.userName(),
        email: faker.internet.email(),
        password: faker.internet.password(),
        profilePicture: faker.image.avatar(),
        genre: faker.name.sexType(),
        phoneNumber: faker.phone.number(),
        address: {
          country: faker.address.country(),
          state: faker.address.state(),
          city: faker.address.cityName(),
          street: faker.address.streetAddress(),
          zipCode: faker.address.zipCode(),
        },
      });
    }
  }

  findAllUsers() {
    return {
      message: "This list contains all the users",
      data: this.users,
    };
  }

  findUserById(id) {
    return {
      message: "You searched a user by id",
      data: this.users.find((user) => user.userId === parseInt(id)),
    };
  }

  findUsersByGenre(userGenre) {
    const userByGenreInformation = this.users.filter(
      (user) => user.genre === userGenre
    );
    return {
      message: `You searched ${userGenre} users`,
      data: userByGenreInformation,
    };
  }

  createUser(data) {
    this.users.push(data);
    const userIndex = this.users.length - 1;
    return {
      message: "User Created",
      data: this.users[userIndex],
    };
  }

  updateUser(id, changes) {
    const index = this.users.findIndex((user) => user.userId === parseInt(id));
    this.users.fill(changes, index, index + 1);
    return {
      message: "User Updated",
      data: this.users[index],
    };
  }

  deleteUser(id) {
    const index = this.users.findIndex((user) => user.userId === parseInt(id));
    return {
      message: "User Deleted",
      data: this.users.splice(index, 1),
    };
  }
}

module.exports = UsersService;
