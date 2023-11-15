var siteTheme = gbifReactComponents.themeBuilder.extend({
  baseTheme: 'light', extendWith: {
    primary: themeStyle.colors.primary
  }
});

var siteTheme = gbifReactComponents.themeBuilder.extend({
  baseTheme: 'light', extendWith: {
    primary: themeStyle.colors.primary,
    fontSize: '16px'
  }
});

var siteConfig = {
  routes: {
    occurrenceSearch: {
      // The route you are currently using for occurrence search. The language prefix will be added automatically
      // If you need special routes per language, then you have to add locale specific overwrites. The page language is available as a global variable called `pageLang`
      route: '/specimen/search',
    },
    collectionKey: {
      route: '/collection/:key',
      isHref: true,
      url: ({ key }) => {
        return `/collection/${key}`;
      }
    },
    collectionSpecimens: {
      route: '/collection/:key/specimens',
      url: ({ key }) => `/collection/${key}/specimens`
    },
  },
  occurrence: {
    mapSettings: {
      lat: 4.359262324914326,
      lng: -78.55825586583158,
      zoom: 4.55655220372271
    },
    availableTableColumns: ['features', 'country', 'coordinates', 'year', 'catalogNumber', 'recordedBy', 'identifiedBy'], // the first column will always be scientificName, that cannot be changed
    // See https://www.gbif.org/developer/occurrence (long page without enough anchors - search for "Occurrence Download Predicates")
    // The format is however slightly different, in that is use camelCase for keys instead of CONSTANT_CASE. 
    rootPredicate: { type: 'equals', key: 'publishingOrg', value: '698acf43-05cd-4b45-8107-7c666d87f77c' },
    // occurrenceSearchTabs: ['MAP', 'TABLE', 'GALLERY', 'DATASETS'] // what tabs should be shown
    // see https://hp-theme.gbif-staging.org/data-exploration-config for more options
  },
  availableCatalogues: ['OCCURRENCE'],
  maps: {
    locale: 'en',
    defaultProjection: 'MERCATOR',
    defaultMapStyle: 'BRIGHT',
    mapStyles: {
      ARCTIC: ['NATURAL', 'BRIGHT'],
      PLATE_CAREE: ['NATURAL', 'BRIGHT', 'DARK'],
      MERCATOR: ['NATURAL', 'BRIGHT', 'DARK'],
      ANTARCTIC: ['NATURAL', 'BRIGHT', 'DARK']
    }
  },
  messages: {
    "catalogues.occurrences": "Specimens"
  }
};
// Get the navigation bar element by its ID
var navbar = document.getElementById("navbar");

// Check if the navigation bar element exists
if (navbar) {
    // Set the display property to "none" to hide the navigation bar
    navbar.style.display = "none";
}
// example of a language specific route overwrite
// if (pageLang === 'da')  {
//   siteConfig.routes.occurrenceSearch.route = '/observationer/sog';
// }
