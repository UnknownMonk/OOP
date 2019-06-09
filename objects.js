class User {
  constructor(email, name) {
    this.email = email;
    this.name = name;
    this.score = 0;
  }
  login() {
    console.log(this.email, 'Just logged in');
    return this;
  }
  logout() {
    console.log(this.email, 'Just logged out');
    return this;
  }

  updateScore() {
    this.score++;
    console.log(this.email, 'score is now', this.score);
    return this;
  }
}

class Admin extends User {
  deleteUser(user) {
    users = users.filter(u => {
      return u.name != user.name;
    });
  }
}

let userOne = new User('jonas@gmail.com', 'Jonas');
let userTwo = new User('jo@gmail.com', 'Joe');
let admin = new Admin('more@mail.com', 'mary');

let users = [userOne, userTwo, admin];
admin.deleteUser(userTwo);

console.log(users);

console.log(userOne);
console.log(userTwo);
userOne.login();
userTwo.logout();
userOne
  .login()
  .updateScore()
  .updateScore()
  .logout();
