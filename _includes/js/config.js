var siteTheme = gbifReactComponents.themeBuilder.extend({baseTheme: 'light', extendWith: {
  primary: themeStyle.colors.primary
}});

var siteConfig = {
  rootPredicate: {"type": "equals", "key": "publishingOrgKey", "value": "862f7ec3-3134-4dce-ab5a-03c81f54bd72"}
};
