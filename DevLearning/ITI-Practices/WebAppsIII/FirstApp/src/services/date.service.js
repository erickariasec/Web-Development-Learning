// OOP

// Abstraction
// Inheritance
// Polymorphism

class Date {
  constructor(year, month, day) {
    this._year = this.validateYear(year);
    this._month = this.validateMonth(month);
    this._day = this.validateDay(day);
  }

  // Order
  // 1. Attributes
  // 2. Constructors
  // 3. Propierties
  // 4. Public Methods
  // 5. Private Methods

  toString() {
    return `${this._year}/${this._month}/${this._day}`;
  }

  validateYear(year) {
    if (year < 0) {
      throw new Error("This year is not valid");
      // Never send a console.log()
      // console.log("Año inválido");
    }

    return year;
  }

  validateMonth(month) {
    if (month < 1 || month > 12) {
      throw new Error("This month is not valid");
    }

    return month;
  }

  validateDay(day) {
    // if (day < 1 || day > 31 || day > 30 && this._month == 2 || day > 28 && this._month == 2 && this._year % 4 != 0 || day > 29 && this._month == 2 && this._year % 4 == 0) {
    if (day == 29 && this._month == 2 && this.isLeapYear(this._year)) {
      return day;
    }

    throw new Error("This day is not valid");
  }

  isLeapYear(year) {
    return year % 400 == 0 || (year % 4 == 0 && year % 100 != 0);

    // if (year % 4 == 0)) {
    //   if (year % 4 == 0) {
    //     if (year % 100 == 0) {
    //       if (year % 400 == 0) {
    //         return true;
    //       } else {
    //         return false;
    //       }
    //     } else {
    //       return false;
    //     }
    //   }
    // } else {
    //   return false;
    // }
  }

  print() {
    return `${this._year}/${this._month}/${this._day}`;
  }
}

module.exports = Date;
