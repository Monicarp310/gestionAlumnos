export class AlumnInfo {
  private _name: string;
  private _surname1: string;
  private _surname2: string;
  private _email: string;
  private _dni: string;
  private _phone: number;
  private _phone2: number;
  private _country: string;
  private _province: string;
  private _postalCode: number;
  private _town: string;
  private _nickname: string;
  private _password: string;

  constructor(name: string, surname1: string, surname2: string, email: string, dni: string, phone: number, phone2: number, country: string, province: string, postalCode: number, town: string, nickname: string, password: string) {
    this._name = name;
    this._surname1 = surname1;
    this._surname2 = surname2;
    this._email = email;
    this._dni = dni;
    this._phone = phone;
    this._phone2 = phone2;
    this._country = country;
    this._province = province;
    this._postalCode = postalCode;
    this._town = town;
    this._nickname = nickname;
    this._password = password;
  }

  public get name(): string {
    return this._name;
  }
  public set name(value: string) {
    this._name = value;
  }

  public get surname1(): string {
    return this._surname1;
  }
  public set surname1(value: string) {
    this._surname1 = value;
  }

  public get surname2(): string {
    return this._surname2;
  }
  public set surname2(value: string) {
    this._surname2 = value;
  }

  public get email(): string {
    return this._email;
  }
  public set email(value: string) {
    this._email = value;
  }

  public get dni(): string {
    return this._dni;
  }
  public set dni(value: string) {
    this._dni = value;
  }

  public get phone(): number {
    return this._phone;
  }
  public set phone(value: number) {
    this._phone = value;
  }

  public get phone2(): number {
    return this._phone2;
  }
  public set phone2(value: number) {
    this._phone2 = value;
  }

  public get country(): string {
    return this._country;
  }
  public set country(value: string) {
    this._country = value;
  }

  public get province(): string {
    return this._province;
  }
  public set province(value: string) {
    this._province = value;
  }

  public get postalCode(): number {
    return this._postalCode;
  }
  public set postalCode(value: number) {
    this._postalCode = value;
  }

  public get town(): string {
    return this._town;
  }
  public set town(value: string) {
    this._town = value;
  }

  public get nickname(): string {
    return this._nickname;
  }
  public set nickname(value: string) {
    this._nickname = value;
  }

  public get password(): string {
    return this._password;
  }
  public set password(value: string) {
    this._password = value;
  }
}
