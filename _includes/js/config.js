var siteTheme = gbifReactComponents.themeBuilder.extend({
  baseTheme: 'light', extendWith: {
    primary: themeStyle.colors.primary
  }
});

var siteConfig = {
  routes: {
    occurrenceSearch: {
      // The route you are currently using for occurrence search. The language prefix will be added automatically
      // If you need special routes per language, then you have to add locale specific overwrites. The page language is available as a global variable called `pageLang`
      route: '/data'
    }
  },
  occurrence: {
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
        },
        {
          "type": "equals",
          "key": "notIssues",
          "value": "COUNTRY_COORDINATE_MISMATCH"
        }
      ]
    },
    highlightedFilters: ['taxonKey', 'stateProvince', 'year', 'basisOfRecord', 'publishingOrg', 'datasetName', 'occurrenceIssue'],
    occurrenceSearchTabs: ['TABLE', 'MAP', 'GALLERY', 'DATASETS']
  }
};
