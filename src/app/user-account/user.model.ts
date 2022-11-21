export class User {
  firstName!: string;
  lastName!: string;
  password!: string;
  country!: string;
  city!: string;
  cardType!:string;
  cardNumber!: string;
  constructor(
    firstName: string,
    lastName: string,
    password: string,
    country: string,
    city: string,
    cardType:string,
    cardNumber: string
  ) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.password = password;
    this.country = country;
    this.city = city;
    this.cardType=cardType
    this.cardNumber = cardNumber;
  }
  changeValues(
    firstName: string,
    lastName: string,
    country: string,
    city: string,
    cardType:string,
    cardNumber: string
  ) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.country = country;
    this.city = city;
    this.cardType=cardType;
    this.cardNumber = cardNumber;
  }
}
