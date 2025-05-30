import { BasePage } from "./basePage";
export class HomePage extends BasePage{
    static get url(){
        return "/#/";
    }

    static firstName() {
        return cy.get('input#firstName');
    }

    static lastName() {
        return cy.get('input#lastName');
    }

    static email() {
        return cy.get('input#userEmail');
    }

    static femaleRadio() {
        return cy.get('input#gender-radio-2');
    }

    static mobileNumber() {
        return cy.get('input#userNumber');
    }

    static currentAddress() {
        return cy.get('textarea#currentAddress');
    }

    static dateOfBirth() {
        return cy.get('input#dateOfBirthInput');
    }

    static birthMonth() {
        return cy.get('.react-datepicker__month-select');
    }

    static birthYear() {
        return cy.get('.react-datepicker__year-select');
    }

    static birthDay() {
        return cy.get('.react-datepicker__day--028').not(".react-datepicker__day--outside-month");
    }

    static subjects() {
        return cy.get('div#subjectsContainer');
    }

    static musicBox() {
        return cy.get('.custom-control-label');
    }

    static state() {
        return cy.get('div#state');
    }

    static city() {
        return cy.get('div#city');
    }

    static uploadPicture() {
        return cy.get('input#uploadPicture');
    }

    static submit() {
        return cy.get('button#submit');
    }
    
}