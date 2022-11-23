export class User {
  email!: string;
  password!: string;
  firstName!: string;
  lastName!: string;
  country!: string;
  city!: string;
  cardType!: string;
  cardNumber!: string;
  constructor(
    email: string,
    password: string,
    firstName: string,
    lastName: string,
    country: string,
    city: string,
    cardType: string,
    cardNumber: string
  ) {
    this.email = email;
    this.password = password;
    this.firstName = firstName;
    this.lastName = lastName;
    this.country = country;
    this.city = city;
    this.cardType = cardType;
    this.cardNumber = cardNumber;
  }
}
