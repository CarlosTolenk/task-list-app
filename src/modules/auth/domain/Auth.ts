export class Auth {
  userId: number;
  name: string;
  lastName: string;
  email: string;
  avatar: string;
  lastLogin: string;
  phoneNumber: string;
  token: string;

  constructor({...params}: Auth) {
    this.userId = params.userId;
    this.name = params.name;
    this.lastName = params.lastName;
    this.email = params.email;
    this.avatar = params.avatar;
    this.lastLogin = params.lastLogin;
    this.phoneNumber = params.phoneNumber;
    this.token = params.token;
  }
}
