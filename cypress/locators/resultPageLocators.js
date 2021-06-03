exports.resultPageLocators = {
  pageHeader: '.index_container_3Hfy- > .router-link-active',
  flightlist: 'div.index_flightsList_2vvJC',
  originCity: '.index_row_24uZo > :nth-child(1)',
  destinationCity: '.index_row_24uZo > :nth-child(3)',
  journeyDescription: '.index_noticeRow_3z8V4 > :nth-child(2)',
  flightMaxPrice: '.cost-range_rangeContainer_3Nd31 > :nth-child(2)',
  flightMinPrice: '.cost-range_rangeContainer_3Nd31 > :nth-child(1)',
  ticketPrice: '.index_info_ml0nk > .index_price_2ibrS',
  cheapestTicketPrice: '.index_cheapest_2q1Am > .index_info_ml0nk > .index_price_2ibrS',
  carrierName: '.index_info_ml0nk > .index_carrierName_2sonj',
  lowestPrice: '.index_attention_TLvkv',
  noResultsFound: ':nth-child(1) > :nth-child(1) > div',
  firstResultCard: '.index_flightsList_2vvJC > :nth-child(1)',
  firstResultCardPrice: ':nth-child(1) > .index_info_ml0nk > .index_price_2ibrS',
  totalBookingAmount: '.index_price_1rX0R',
  searchAnotherFlight: '.index_container_3tfOT > :nth-child(1) > :nth-child(1) > .router-link-active',
  priceSlider: '.cost-range_range_1L3EV'
};

exports.searchFiltersLocators = {
  directFlightsOnly: '.v-input--selection-controls__ripple',
  sortByPrice: '.index_container_3dDcv > :nth-child(2) > div',
  sortByDate: '.index_container_3dDcv > :nth-child(3) > div',
}
