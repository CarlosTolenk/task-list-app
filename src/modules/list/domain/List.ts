export class List {
  createdAt: string | undefined;
  name: string | undefined;
  avatar: string | undefined;
  id: string;
  username?: string;
  password?: string;
  lastName?: string;
  email?: string;

  constructor(params: Partial<List>) {
    this.createdAt = params.createdAt;
    this.name = params.name;
    this.avatar = params.avatar;
    this.id = params.id || '';
    this.username = params.username;
    this.password = params.password;
    this.lastName = params.lastName;
    this.email = params.email;
  }
}
