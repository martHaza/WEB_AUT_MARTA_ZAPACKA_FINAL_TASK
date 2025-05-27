import { HomePage } from "../pageObjects/homePage";

describe('Demoqa scenario', () => {
  it('Demoqa scenario ', () => {
    HomePage.visit();
    const name = "Marta";
    const lastName = "Zapacka";
    const email = "s24zapamart@venta.lv";
    const number = "2134567891";
    const currentAddress = "zupa 13";


    HomePage.firstName.type(name);
    HomePage.lastName.type(lastName);
    HomePage.email.type(email);
    HomePage.femaleRadio.type();
    HomePage.mobileNumber.type(number);
    HomePage.currentAddress.type(currentAddress);

    const dateOfBirth = "28 February, 1930";
    HomePage.dateOfBirth.type();
    const subjects = "Economics";
    HomePage.subjects.type();
    HomePage.musicBox.click();
    const file = "pup.jpg";
    HomePage.uploadPicture.selectFile();
    const state = "NCR";
    HomePage.state.type();
    const city = "Delhi";
    HomePage.city.type();
    HomePage.submit.click();
  })
})