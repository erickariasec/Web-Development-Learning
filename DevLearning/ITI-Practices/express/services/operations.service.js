const { faker } = require("@faker-js/faker");

class OperationsService {
  constructor() {
    this.operations = [];
    this.generate();
  }
  generate() {
    for (let i = 0; i < 10; i++) {
      this.operations.push({
        operationId: i + 1,
        name: faker.name.firstName(),
        lastName: faker.name.lastName(),
      });
    }
  }

  findAll() {
    return this.operations;
  }

  findSingle(id) {
    return this.operations.find(
      (operation) => operation.operationId === parseInt(id)
    );
  }

  create(data) {
    this.operations.push(data);
    const operationIndex = this.operations.length - 1;
    return {
      message: "Operation Created",
      data: this.operations[operationIndex],
    };
  }

  update(id, changes) {
    const index = this.operations.findIndex(
      (operation) => operation.operationId === parseInt(id)
    );
    this.operations.fill(changes, index, index + 1);
    return {
      message: "Operation Updated",
      data: this.operations[index],
    };
  }

  delete(id) {
    const index = this.operations.findIndex(
      (operation) => operation.operationId === parseInt(id)
    );
    return {
      message: "Operation Deleted",
      data: this.operations.splice(index, 1),
    };
  }
}

module.exports = OperationsService;
