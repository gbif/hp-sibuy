var siteTheme = gbifReactComponents.themeBuilder.extend({baseTheme: 'light', extendWith: {
  primary: themeStyle.colors.primary
}});

var siteConfig = {
    occurrence: {
      mapSettings: {
        lat: -32.689529,
        lng: -55.999250,
        zoom: 6
      },
      rootPredicate: {
        "type": "and",
        "predicates": [
          {
            "type":"equals",
            "key": "country",
            "value": "UY"
          },
          {
            "type": "equals",
            "key": "notIssues",
            "value": "COUNTRY_COORDINATE_MISMATCH"
          }
        ] 
     },
    highlightedFilters: ['taxonKey', 'stateProvince', 'year', 'basisOfRecord', 'publishingOrg', 'datasetName','occurrenceIssue'],
    occurrenceSearchTabs: ['TABLE',  'MAP','GALLERY', 'DATASETS']
  }
};
