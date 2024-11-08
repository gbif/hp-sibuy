var siteTheme = gbifReactComponents.themeBuilder.extend({
  baseTheme: 'light', extendWith: {
    primary: themeStyle.colors.primary,
    fontSize: '16px'
  }
});

var siteConfig = {
  version: 2,
  disableInlineTableFilterButtons: false, // disable option for adding filters by clicking table cells. See https://github.com/gbif/hosted-portals/issues/274
  routes: {
    alwaysUseHrefs: true, // Update - there now is translations. since the site isn't translated we can use push for now. if true, then we will always use hrefs, if false we will use onClick events and push state to the history. I've added this because I just realize that the language picker doesn't work with pushState as the url of the translated site is not updated with the new url
    enabledRoutes: ['occurrenceSearch', 'collectionSearch', 'collectionKey', 'institutionSearch', 'institutionKey', 'datasetKey', 'datasetSearch'],
  },
  availableCatalogues: ['COLLECTION', 'OCCURRENCE', 'DATASET'],
  occurrence: {
    highlightedFilters: ['taxonKey', 'stateProvince', 'year', 'basisOfRecord', 'publishingOrg', 'datasetName', 'occurrenceIssue'],
    excludedFilters: ['occurrenceStatus', 'networkKey', 'hostingOrganizationKey', 'protocol', 'publishingCountryCode', 'institutionCode', 'collectionCode'],
    mapSettings: {
      lat: -34.531472,
      lng: -54.288967,
      zoom: 5
    },
    rootPredicate: {
      "type": "and",
      "predicates": [
        {
          "type": "equals",
          "key": "country",
          "value": "UY"
        }
      ]
    },
    occurrenceSearchTabs: ['TABLE', 'MAP', 'GALLERY', 'DATASETS'] // what tabs should be shown
  },
  collection: {
    // filters on the grscicoll institution v1 API https://www.gbif.org/developer/summary
    // https://hp-theme.gbif-staging.org/data-exploration-config
    rootFilter: {
      country: 'UY',
      displayOnNHCPortal: true,
    },
    excludedFilters: ['code','countrySingleGrSciColl','collectionDescriptorCountry'],// no reason to show a filter on country, when there is only one
  },
  institution: {
    rootFilter: {
      country: 'UY',
      displayOnNHCPortal: true,
      active: true
    },
    excludedFilters: ['code','countrySingleGrSciColl','collectionDescriptorCountry'],// no reason to show a filter on country, when there is only one
    mapSettings: {
      enabled: true, // show a map on institution search?
      lat: -34.531472,
      lng: -54.288967,
      zoom: 5
    },
  },
  //literature: {
    //rootFilter: {
      //predicate: {
        //type: 'or', predicates: [
          //{
            //type: 'in',
            //key: 'countriesOfResearcher',
            //values: ['UY']
          //},
          //{
            //type: 'in',
            //key: 'countriesOfCoverage',
            //values: ['UY']
          //}
        //]
      //}
    //},
    //highlightedFilters: ['q', 'countriesOfResearcher', 'countriesOfCoverage', 'year']
  //},
  dataset: {
    rootFilter: { publishingCountry: 'UY' },
    highlightedFilters: ['q', 'anyPublisherKey', 'datasetType', 'license'],
    excludedFilters: ['publishingCountryCode'],
  },
  //apiKeys: {
    //maptiler: "GET_YOUR_OWN_TOKEN", // https://github.com/gbif/hosted-portals/issues/229
    //mapbox: "GET_YOUR_OWN__TOKEN"
  //},
  maps: {
    locale: 'es', // we want to show the maps in spanish
    defaultProjection: 'MERCATOR',
    defaultMapStyle: 'BRIGHT',
    mapStyles: {
      ARCTIC: ['NATURAL', 'BRIGHT'],
      PLATE_CAREE: ['NATURAL', 'BRIGHT', 'DARK'],
      MERCATOR: ['NATURAL', 'BRIGHT', 'SATELLITE', 'DARK'],
      ANTARCTIC: ['NATURAL', 'BRIGHT', 'DARK']
    }
  },
  //messages: { // custom overwrites for the translations, e.g. label the occurrence catalog as a specimen catalog to match our data scope of specimens.
  //  "catalogues.occurrences": "Specimens"
  //}
};
