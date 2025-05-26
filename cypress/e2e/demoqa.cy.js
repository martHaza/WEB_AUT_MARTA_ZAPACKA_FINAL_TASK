import { HomePage } from "../pageObjects/homePage";

describe('Demoqa scenario', () => {
  it('Demoqa scenario ', () => {
    HomePage.visit();
    const name = "Marta";
    const lastName = "Zapacka";
    const email = "s24zapamart@venta.lv";
    const mobileNumber = "2134567891";
    const currentAddress = "zupa 13";

    HomePage.firstName.type(name);
    HomePage.lastName.type(lastName);
    HomePage.email.type(email);
    HomePage.femaleRadio.type();
    HomePage.mobileNumber.type(mobileNumber);
    HomePage.currentAddress.type(currentAddress);
    
  })
})