function User(email, name) {
  this.email = email;
  this.name = name;
  this.online = false;

  this.login = function() {
    console.log(this.email, 'has logged in');
  };
}

User.prototype.login = function() {
  this.online = true;
  console.log(this.email, 'has logged in');
};

User.prototype.logout = function() {
  this.online = false;
  console.log(this.email, 'has logged out');
};

function Admin(role, ...args) {
  User.apply(this, args);
  this.role = role;
}

Admin.prototype = Object.create(User.prototype);
Admin.prototype.deleteUser = function(u) {
  users = users.filter(user => {
    return user.name != u.name;
  });
};

let userOne = new User('jonas@gmail.com', 'Jonas');
let userTwo = new User('jo@gmail.com', 'Joe');
let admin = new Admin('super user', 'jooo@gmail.com', 'Joooe', 'super user');

let users = [userOne, userTwo, admin];
console.log(userOne);
userTwo.login();
console.log(admin);
