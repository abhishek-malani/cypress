import enterSearchParams from '../../pages/searchFlights';
import validateSearchResult from '../../pages/resultsPage';
import {testData} from '../../fixtures/testData';

describe('Doing regression testing on flight booking app', ()=>{

    const searchFlights = new enterSearchParams();
    const validateResults = new validateSearchResult();

    it.only('Searching without to date and validate results', ()=>{
        var ticketPrice;
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
                'inboundpartialdate': '2021-06-30'
            }
        }).then((res)=>{
            var i;
            var pos = 1;
            resLength = res.body.Quotes.length-1;
            var carrierLength = res.body.Carriers.length;
            for(i=0; i<resLength;i++){
                ticketPrice = res.body.Quotes[i].MinPrice;
                
                //Matches the ticket price with api response
                cy.get(':nth-child('+pos+') > .index_info_ml0nk > .index_price_2ibrS').contains(ticketPrice);

                //Matches carrier name with api response
                var carrierId = res.body.Quotes[i].OutboundLeg.CarrierIds[0];
                for(var j=0; j<carrierLength; j++){
                    if(res.body.Carriers[j].CarrierId == carrierId){
                        cy.get(':nth-child('+pos+') > .index_info_ml0nk > .index_carrierName_2sonj').should('have.text',res.body.Carriers[j].Name);
                    }
                }

                //Matches journey type with api response
                var isDirect = res.body.Quotes[i].Direct;
                if(isDirect){
                    cy.get(':nth-child('+pos+') > .index_noticeRow_3z8V4 > :nth-child(2)').should('have.text','direct flight');
                }
                else{
                    cy.get(':nth-child('+pos+') > .index_noticeRow_3z8V4 > :nth-child(2)').should('have.text','flight with transition');
                }

                pos = pos+1;
                if(pos==36){
                    break;
                }
            }
            
            //Matches origin and destination cities with respect to api response
            var originId = res.body.Quotes[i].OutboundLeg.OriginId;
            var destinationId = res.body.Quotes[i].OutboundLeg.DestinationId;
            for(var i=0; i<2; i++){
                if(res.body.Places[i].PlaceId == originId){
                    expect(res.body.Places[i].Name).to.have.string(testData.fromCity);
                }
                else if(res.body.Places[i].PlaceId == destinationId){
                    expect(res.body.Places[i].Name).to.have.string(testData.toCity);
                }
            }
            
        })
    })
})