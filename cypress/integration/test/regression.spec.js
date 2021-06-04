import enterSearchParams from '../../pages/searchFlights';
import validateSearchResult from '../../pages/resultsPage';
import { testData } from '../../fixtures/testData';

describe('Doing regression testing on flight booking app', ()=>{

    const searchFlights = new enterSearchParams();
    const validateResults = new validateSearchResult();

    it('Searching without to date and validate results',()=>{
        searchFlights.visit(testData.url);
        searchFlights.checkForImage();
        searchFlights.enterOriginCity(testData.fromCity);
        searchFlights.enterDesitnationCity(testData.toCity);
        searchFlights.enterTravelFromDate(testData.fromDate);
        searchFlights.clickSearchBtn();
        validateResults.validatePageHeader();
        validateResults.validateFlightPrice();
        validateResults.validateOriginCity(testData.fromCity);
        validateResults.validateDestinationCity(testData.toCity);
        validateResults.validateJourneyType();
        validateResults.validateFlightPrice();
        validateResults.validateFlightCarrierName();
        validateResults.validateLowestPriceTicket();
    })

    it('Searching with from & to date and validate results',()=>{
        searchFlights.visit(testData.url);
        searchFlights.checkForImage();
        searchFlights.enterOriginCity(testData.fromCity);
        searchFlights.enterDesitnationCity(testData.toCity);
        searchFlights.enterTravelFromDate(testData.fromDate);
        searchFlights.enterTravelToDate(testData.toDate);
        searchFlights.clickSearchBtn();
        validateResults.validatePageHeader();
        validateResults.validateFlightPrice();
        validateResults.validateOriginCity(testData.fromCity);
        validateResults.validateDestinationCity(testData.toCity);
        validateResults.validateJourneyType();
        validateResults.validateFlightPrice();
        validateResults.validateFlightCarrierName();
        validateResults.validateLowestPriceTicket();
    })

    it('Searching with same origin & destination city and validate results',()=>{
        searchFlights.visit(testData.url);
        searchFlights.checkForImage();
        searchFlights.enterOriginCity(testData.toCity);
        searchFlights.enterDesitnationCity(testData.toCity);
        searchFlights.enterTravelFromDate(testData.fromDate);
        searchFlights.enterTravelToDate(testData.toDate);
        searchFlights.clickSearchBtn();
        validateResults.validateNoResults();
    })

    it('Searching with from & to date, click on direct flights only and validate results',()=>{
        searchFlights.visit(testData.url);
        searchFlights.checkForImage();
        searchFlights.enterOriginCity(testData.fromCity);
        searchFlights.enterDesitnationCity(testData.toCity);
        searchFlights.enterTravelFromDate(testData.fromDate);
        searchFlights.enterTravelToDate(testData.toDate);
        searchFlights.clickSearchBtn();
        validateResults.validatePageHeader();
        validateResults.clickOnDirectFlightsBtn();
        validateResults.validateFlightPrice();
        validateResults.validateOriginCity(testData.fromCity);
        validateResults.validateDestinationCity(testData.fromCity);
        validateResults.validateJourneyType();
        validateResults.validateFlightPrice();
        validateResults.validateFlightCarrierName();
        validateResults.validateLowestPriceTicket();
    })

    it('Searching with from & to date, click on sort by price and validate results',()=>{
        searchFlights.visit(testData.url);
        searchFlights.checkForImage();
        searchFlights.enterOriginCity(testData.fromCity);
        searchFlights.enterDesitnationCity(testData.toCity);
        searchFlights.enterTravelFromDate(testData.fromDate);
        searchFlights.enterTravelToDate(testData.toDate);
        searchFlights.clickSearchBtn();
        validateResults.validatePageHeader();
        validateResults.clickOnSortByPrice();
        validateResults.validateFlightPrice();
        validateResults.validateOriginCity(testData.fromCity);
        validateResults.validateOriginCity(testData.toCity);
        validateResults.validateJourneyType();
        validateResults.validateFlightPrice();
        validateResults.validateFlightCarrierName();
        validateResults.validateLowestPriceTicket();
    })

    it('Searching with from & to date, click on sort by date and validate results',()=>{
        searchFlights.visit(testData.url);
        searchFlights.checkForImage();
        searchFlights.enterOriginCity(testData.fromCity);
        searchFlights.enterDesitnationCity(testData.toCity);
        searchFlights.enterTravelFromDate(testData.fromDate);
        searchFlights.enterTravelToDate(testData.toDate);
        searchFlights.clickSearchBtn();
        validateResults.validatePageHeader();
        validateResults.clickOnSortByDate();
        validateResults.validateFlightPrice();
        validateResults.validateOriginCity(testData.fromCity);
        validateResults.validateOriginCity(testData.toCity);
        validateResults.validateJourneyType();
        validateResults.validateFlightPrice();
        validateResults.validateFlightCarrierName();
        validateResults.validateLowestPriceTicket();
    })

    it('Searching with from & to date, select ticket validate results',()=>{
        searchFlights.visit(testData.url);
        searchFlights.checkForImage();
        searchFlights.enterOriginCity(testData.fromCity);
        searchFlights.enterDesitnationCity(testData.toCity);
        searchFlights.enterTravelFromDate(testData.fromDate);
        searchFlights.enterTravelToDate(testData.toDate);
        searchFlights.clickSearchBtn();
        validateResults.validatePageHeader();
        validateResults.clickOnSortByDate();
        validateResults.validateFlightPrice();
        validateResults.validateOriginCity(testData.fromCity);
        validateResults.validateOriginCity(testData.toCity);
        validateResults.validateJourneyType();
        validateResults.validateFlightPrice();
        validateResults.validateFlightCarrierName();
        validateResults.validateLowestPriceTicket();
        validateResults.checkBookingAmount();
    })

    it('Searching with from & to date, click on search new flight and validate results',()=>{
        searchFlights.visit(testData.url);
        searchFlights.checkForImage();
        searchFlights.enterOriginCity(testData.fromCity);
        searchFlights.enterDesitnationCity(testData.toCity);
        searchFlights.enterTravelFromDate(testData.fromDate);
        searchFlights.enterTravelToDate(testData.toDate);
        searchFlights.clickSearchBtn();
        validateResults.validatePageHeader();
        validateResults.clickOnSortByDate();
        validateResults.validateFlightPrice();
        validateResults.validateOriginCity(testData.fromCity);
        validateResults.validateOriginCity(testData.toCity);
        validateResults.validateJourneyType();
        validateResults.validateFlightPrice();
        validateResults.validateFlightCarrierName();
        validateResults.validateLowestPriceTicket();
        validateResults.clickOnSearchAnotherFlight();
        searchFlights.verifyTitle();
    })

    it('Verifying mandatory fields validate results',()=>{
        searchFlights.visit(testData.url);
        searchFlights.checkForImage();
        searchFlights.verifyButtonisDisabled();
        searchFlights.enterOriginCity(testData.fromCity);
        searchFlights.verifyButtonisDisabled();
        searchFlights.enterDesitnationCity(testData.toCity)
        searchFlights.verifyButtonisDisabled();
        searchFlights.enterTravelToDate(testData.toDate);
        searchFlights.verifyButtonisDisabled();
        searchFlights.enterTravelFromDate(testData.fromDate);
        searchFlights.verifyButtonisEnabled();
    })

    it('Move price slider and validate results',()=>{
        searchFlights.visit(testData.url);
        searchFlights.checkForImage();
        searchFlights.enterOriginCity(testData.fromCity);
        searchFlights.enterDesitnationCity(testData.toCity);
        searchFlights.enterTravelFromDate(testData.fromDate);
        searchFlights.clickSearchBtn();
        validateResults.validatePageHeader();
        validateResults.validateFlightPrice();
        validateResults.validateOriginCity(testData.fromCity);
        validateResults.validateDestinationCity(testData.toCity);
        validateResults.validateJourneyType();
        validateResults.validateFlightPrice();
        validateResults.validateFlightCarrierName();
        validateResults.validateLowestPriceTicket();
        validateResults.slider();
    })

    it('Searching with from & to date, where from date > to date validate results',()=>{
        searchFlights.visit(testData.url);
        searchFlights.checkForImage();
        searchFlights.enterOriginCity(testData.fromCity);
        searchFlights.enterDesitnationCity(testData.toCity);
        searchFlights.enterTravelFromDate(testData.toDate);
        searchFlights.enterTravelToDate(testData.fromDate);
        searchFlights.clickSearchBtn();
        validateResults.validatePageHeader();
        validateResults.clickOnSortByDate();
        validateResults.validateFlightPrice();
        validateResults.validateOriginCity(testData.fromCity);
        validateResults.validateOriginCity(testData.toCity);
        validateResults.validateJourneyType();
        validateResults.validateFlightPrice();
        validateResults.validateFlightCarrierName();
        validateResults.validateLowestPriceTicket();
        validateResults.clickOnSearchAnotherFlight();
        searchFlights.verifyTitle();
    })

})