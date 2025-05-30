import { HomePage } from "../pageObjects/homePage";

describe('Demoqa scenario', () => {
   beforeEach(() => {
      cy.visit('https://demoqa.com/automation-practice-form/')
    });

  it('Demoqa scenario ', () => {
    
    const name = "Marta";
    const lastName = "Zapacka";
    const email = "s24zapamart@venta.lv";
    const number = "2134567891";
    const currentAddress = "zupa 13";


    HomePage.firstName().type(name);
    HomePage.lastName().type(lastName);
    HomePage.email().type(email);
    HomePage.femaleRadio().check({ force: true });
    HomePage.mobileNumber().type(number);
    HomePage.currentAddress().type(currentAddress);

    HomePage.dateOfBirth().click();
    HomePage.birthMonth().select("February");
    HomePage.birthYear().select("1930");
    HomePage.birthDay().click();
    HomePage.subjects().type("Economics{enter}");
    HomePage.musicBox().contains("Music").click();

    HomePage.uploadPicture().selectFile('cypress/files/pup.jpg');
    
    HomePage.state().contains("NCR").click();

    HomePage.city().contains("Delhi").click(); 

    HomePage.submit().click();
  })
})