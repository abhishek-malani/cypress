import { resultPageLocators } from '../locators/resultPageLocators';
import { searchFiltersLocators } from '../locators/resultPageLocators';

class validateSearchResult{

    validatePageHeader(){
        cy.get(resultPageLocators.pageHeader).contains('Flights searching')
    }
    
    validateOriginCity(originCityName){
        cy.get(resultPageLocators.flightlist).within(($div)=>{
            cy.get(resultPageLocators.originCity).invoke('text').then((displayedFromCity)=>{
                expect(displayedFromCity).to.be.contain(originCityName);
            })
        })
    }

    validateDestinationCity(destinationCityName){
        cy.get(resultPageLocators.flightlist).within(($div)=>{
            cy.get(resultPageLocators.destinationCity).invoke('text').then((displayedToCity)=>{
                expect(displayedToCity).to.be.contain(destinationCityName);
            })
        })
    }

    validateJourneyType(){
        cy.get(resultPageLocators.flightlist).within(($div)=>{
            cy.get(resultPageLocators.journeyDescription).invoke('text').then((flightType)=>{
            expect(flightType).to.contain('direct','flight','transition');
            })
        })
    }

    validateFlightPrice(){
        var maxPrice;
        cy.get(resultPageLocators.flightMaxPrice).invoke('text').then((MaxPrice)=>{
            maxPrice = MaxPrice;
        })
        var minPrice;
        cy.get(resultPageLocators.flightMinPrice).invoke('text').then((MinPrice)=>{
            minPrice = MinPrice;
        })

        cy.get(resultPageLocators.flightlist).within(($div)=>{
            cy.get(resultPageLocators.ticketPrice).invoke('text').then((displayedPrice)=>{
                var priceError = false;
                var prices = displayedPrice.split('$');
                prices.forEach(function(price){
                    if(parseInt(price)<=parseInt(maxPrice) && parseInt(price)>=parseInt(minPrice)){
                        priceError = true;
                    }
                })
                expect(priceError).to.be.true;
            })
        })
    }

    validateFlightCarrierName(){
        cy.get(resultPageLocators.flightlist).within(($div)=>{
            cy.get(resultPageLocators.carrierName).invoke('text').then((carrierName)=>{
                expect(carrierName).to.be.not.null;
            })
        })
    }

    validateLowestPriceTicket(){
        var minPrice;
        cy.get(resultPageLocators.flightMinPrice).invoke('text').then((MinPrice)=>{
            minPrice = MinPrice;
        })
        cy.get(resultPageLocators.flightlist).within(($div)=>{
            cy.get(resultPageLocators.cheapestTicketPrice).invoke('text').then((displayedPrice)=>{
                var priceError = false;
                var prices = displayedPrice.split('$');
                prices.forEach(function(price){
                    if(parseInt(price)<=parseInt(minPrice)){
                        priceError = true;
                    }
                })
                expect(priceError).to.be.true;
            })
        })
        
    }

    checkBookingAmount(){
        cy.get(resultPageLocators.firstResultCard).click();
        cy.get(resultPageLocators.firstResultCardPrice).invoke('text').then((ticketPrice)=>{
            cy.get(resultPageLocators.totalBookingAmount).invoke('text').then((bokingAmount)=>{
                expect(parseInt(ticketPrice.split('$')[0])).to.be.eq(parseInt(bokingAmount.split('$')[0]));
            })
        })
    } 

    clickOnSearchAnotherFlight(){
        cy.get(resultPageLocators.searchAnotherFlight).click();
    }

    validateNoResults(){
        cy.get(resultPageLocators.noResultsFound).contains("Sorry, we can't find any flights");
    }
    
    clickOnDirectFlightsBtn(){
        cy.get(searchFiltersLocators.directFlightsOnly).click();
    }

    clickOnSortByPrice(){
        cy.get(searchFiltersLocators.sortByPrice).click();
    }

    clickOnSortByDate(){
        cy.get(searchFiltersLocators.sortByDate).click();
    }

    slider(){
        cy.get(resultPageLocators.priceSlider).first()
        .invoke('val', 50)
        .trigger('change',{force:true});
    }
    
}

export default validateSearchResult;
