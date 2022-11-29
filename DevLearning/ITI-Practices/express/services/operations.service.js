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
        warehouseManagement: {
          company: faker.company.name(),
          companySuffix: faker.company.companySuffix(),
          companyBuildingNumber: faker.address.buildingNumber(),
          manager: {
            name: faker.name.firstName(),
            lastName: faker.name.lastName(),
            email: faker.internet.email(),
            profilePicture: faker.internet.avatar(),
          },
        },
        shipping: {
          distributor: {
            association: faker.company.name(),
            associationSuffix: faker.company.companySuffix(),
            associationBuildingNumber: faker.address.buildingNumber(),
            attendant: {
              name: faker.name.firstName(),
              lastName: faker.name.lastName(),
              email: faker.internet.email(),
              profilePicture: faker.internet.avatar(),
            },
          },
          sendTo: {
            country: faker.address.country(),
            countryCode: faker.address.countryCode(),
          },
        },
      });
    }
  }

  findAllOperations() {
    return this.operations;
  }

  findOperationById(id) {
    return this.operations.find(
      (operation) => operation.operationId === parseInt(id)
    );
  }

  createOperation(data) {
    this.operations.push(data);
    const operationIndex = this.operations.length - 1;
    return {
      message: "Operation Created",
      data: this.operations[operationIndex],
    };
  }

  updateOperation(id, changes) {
    const index = this.operations.findIndex(
      (operation) => operation.operationId === parseInt(id)
    );
    this.operations.fill(changes, index, index + 1);
    return {
      message: "Operation Updated",
      data: this.operations[index],
    };
  }

  deleteOperation(id) {
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
