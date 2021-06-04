import enterSearchParams from '../../pages/searchFlights';
import validateSearchResult from '../../pages/resultsPage';
import {testData} from '../../fixtures/testData';

describe('Doing regression testing on flight booking app', ()=>{

    const searchFlights = new enterSearchParams();
    const validateResults = new validateSearchResult();

    it.only('Searching without to date and validate results', ()=>{
        var minPrice;
        var maxPrice;
        var ticketPrice;
        var fromCitu;
        var toCity;
        var resLength;

        searchFlights.visit(testData.url);
        searchFlights.checkForImage();
        searchFlights.enterOriginCity(testData.fromCity);
        searchFlights.enterDesitnationCity(testData.toCity);
        searchFlights.enterTravelFromDate(testData.fromDate);
        searchFlights.clickSearchBtn();
        cy.request({
            method : 'GET',
            url : 'https://skyscanner-skyscanner-flight-search-v1.p.rapidapi.com/apiservices/browseroutes/v1.0/US/USD/en-US/BLR-sky/BOM-sky/2021-06',   
            headers : {'x-rapidapi-key': '2555fb00efmsh2ea1aafc67edd33p1bb476jsncc4e3c44af5a',
            'x-rapidapi-host': 'skyscanner-skyscanner-flight-search-v1.p.rapidapi.com',
            'useQueryString': true},
            query: {
                'inboundpartialdate': '2021-06-'+testData.fromDate
            }
        }).then((res)=>{
            var i;
            var pos = 1;
            resLength = res.body.Quotes.length-2;
            cy.log('length '+resLength);
            for(i=0; i<resLength;i++){
                cy.log(res.body.Quotes[i].MinPrice);
                cy.get(':nth-child('+pos+') > .index_info_ml0nk > .index_price_2ibrS').invoke('text').then((shownPrice)=>{
                    cy.log(shownPrice);
                    pos = pos+1;
                })
                /***
                 * I found that number of objects present in api response are not equal to the number of cards shown on UI
                 * Due to this I have forfiet this effort for now. Once the issue is resolved, I can pick this up.
                 */
            }
        })
    })
})