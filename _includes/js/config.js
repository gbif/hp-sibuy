var siteTheme = gbifReactComponents.themeBuilder.extend({baseTheme: 'light', extendWith: {
  primary: themeStyle.colors.primary
}});

var siteConfig = {
    occurrence: {
      mapSettings: {
        lat: -34.531472,
        lng: -54.288967,
        zoom: 3
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
    occurrenceSearchTabs: ['TABLE',  'MAP', 'GALLERY', 'DATASETS']
  }
};
