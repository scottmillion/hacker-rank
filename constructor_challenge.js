var Person = function (firstAndLast) {
  // Only change code below this line
  // Complete the method below and implement the others similarly

  this.getFullName = function () {
    if (this.fullName === undefined) {
      this.fullName = this.getFirstName() + " " + this.getLastName();
    }
    return this.fullName;
  };

  this.getLastName = function () {
    if (this.lastName === undefined) {
      this.lastName = firstAndLast.split(" ")[1];
    }
    return this.lastName;
  };

  this.getFirstName = function () {
    if (this.firstName === undefined) {
      this.firstName = firstAndLast.split(" ")[0];
    }
    return this.firstName;
  };

  this.setFirstName = function (first) {
    this.firstName = first;
  };

  this.setLastName = function (last) {
    this.lastName = last;
  };

  this.setFullName = function (firstAndLast) {
    this.firstName = firstAndLast.split(" ")[0];
    this.lastName = firstAndLast.split(" ")[1];
  };

  return firstAndLast;
};

var bob = new Person("Bob Ross");
bob.getFullName();
