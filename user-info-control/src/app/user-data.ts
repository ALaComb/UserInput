export class UserData {

    firstname: string;
    lastname: string;
    address: Address;
    phone: string;

    populate(firstname: string, lastname: string, address: Address, phone: string) {
        this.firstname = firstname;
        this.lastname = lastname;
        this.address = address;
        this.phone = phone;
    }
}

export class Address {
    street: string;
    aptNum: string;
    city: string;
    state: string;
    ZIP: string;
    country: string;

    populate(street: string, aptNum: string, city: string, state: string, ZIP: string, country: string) {
        this.street = street;
        this.aptNum = aptNum;
        this.city = city;
        this.state = state;
        this.ZIP = ZIP;
        this.country = country;
    }

    toString() {

        return this.street + ' ' + this.aptNum + '\n' + this.city + ', ' + this.state + ' ' + this.ZIP + '\n' + this.country;
    }
}
