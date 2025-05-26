import { BasePage } from "./basePage";
export class HomePage extends BasePage{
    static get url(){
        return "";
    }

    static get firstName() {
        return cy.get('input#firstName');
    }

    static get lastName() {
        return cy.get('input#lastName');
    }

    static get email() {
        return cy.get('input#userEmail');
    }

    static get femaleRadio() {
        return cy.get('input#gender-radio-2');
    }

    static get mobileNumber() {
        return cy.get('input#userNumber');
    }

    static get currentAddress() {
        return cy.get('textarea#currentAddress');
    }

    static get dateOfBirth() {
        return cy.get('input#dateOfBirthInput');
    }

    static get subjects() {
        return cy.get('div#subjectsContainer');
    }

    static get musicBox() {
        return cy.get('input#hobbies-checkbox-3');
    }

    static get state() {
        return cy.get('div#state');
    }

    static get city() {
        return cy.get('div#city');
    }

    static get uploadPicture() {
        return cy.get('input#uploadPicture');
    }

    static get submit() {
        return cy.get('button#submit');
    }

}