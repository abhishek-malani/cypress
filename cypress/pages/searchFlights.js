require('cypress-xpath');
import { searchPageLocators } from '../locators/searchPageLocators';

class enterSearchParams{
  visit(url){
    cy.visit(url);
  }

  checkForImage(){
    cy.get(searchPageLocators.backgroundImage).should('be.visible');
  }

  verifyTitle(){
    cy.get(searchPageLocators.searchPageTitle).should('have.text','Your travel begins now');
  }

  enterOriginCity(originCityName){
    cy.get(searchPageLocators.originCity).type(originCityName);
    cy.xpath(`//div[contains(text(),'${originCityName}')]`).click();
  }

  enterDesitnationCity(destinationCityName){
    cy.get(searchPageLocators.destinationCity).type(destinationCityName);
    cy.xpath(`//div[contains(text(),'${destinationCityName}')]`).click();  
  }
  
  enterTravelFromDate(fromDate){
    cy.get(searchPageLocators.fromDate).click();
    cy.xpath(`//div[contains(text(),'${fromDate}')]`).click();
  }
  
  enterTravelToDate(toDate){
    cy.get(searchPageLocators.toDate).click();
    cy.xpath(`//div[contains(text(),'${toDate}')]`).click();
  }

  clickSearchBtn(){
    cy.xpath(searchPageLocators.searchBtn).click();
  }

  verifyButtonisDisabled(){
    cy.get(searchPageLocators.searchBtnClass).should('be.disabled');
  }

  verifyButtonisEnabled(){
    cy.get(searchPageLocators.searchBtnClass).should('not.be.disabled');
  }
  
}

export default enterSearchParams;
