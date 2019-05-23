export class Contact {
  id: string;
  firstName: string;
  lastName: string;
  phone: string;
  email: string;
  street?: string;
  postalCode?: string;
  city?: string;

  // address: IAddress;


  constructor(id?: string, firstName?: string, lastName?: string, phone?: string,
              email?: string, street?: string, postalCode?: string, city?: string) {
    this.id = id;
    this.firstName = firstName;
    this.lastName = lastName;
    this.phone = phone;
    this.email = email;
    this.street = street;
    this.postalCode = postalCode;
    this.city = city;
  }
}

interface IAddress {
  street?: string;
  postalCode?: string;
  city?: string;
}
