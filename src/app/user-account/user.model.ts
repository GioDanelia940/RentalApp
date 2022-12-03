export class User {
  id!: number;
  email!: string;
  password!: string;
  verifiedUser!:boolean;
  firstName!: string;
  lastName!: string;
  country!: string;
  city!: string;
  cardType!: string;
  cardNumber!: string;
  constructor(
    id: number,
    email: string,
    password: string,
    verifiedUser:boolean,
    firstName: string,
    lastName: string,
    country: string,
    city: string,
    cardType: string,
    cardNumber: string
  ) {
    this.id = id;
    this.email = email;
    this.password = password;
    this.verifiedUser=true;
    this.firstName = firstName;
    this.lastName = lastName;
    this.country = country;
    this.city = city;
    this.cardType = cardType;
    this.cardNumber = cardNumber;
  }
}
