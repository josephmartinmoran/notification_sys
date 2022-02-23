import React from 'react'; // Will have to be adapted to the redkite UI

const MarketplaceContext = React.createContext({
  contract: null,
  offerCount: null,
  offers: [],
  userFunds: null,
  mktIsLoading: true,
  loadContract: () => {},
  loadOfferCount: () => {},
  loadOffers: () => {},
  updateOffer: () => {},
  addOffer: () => {},
  loadUserFunds: () => {},
  setMktIsLoading: () => {}
});

export default MarketplaceContext;