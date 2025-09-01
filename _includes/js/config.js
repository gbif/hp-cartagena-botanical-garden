var siteTheme = gbifReactComponents.themeBuilder.extend({
  baseTheme: 'light', 
  extendWith: {
    primary: themeStyle.colors.primary,
    fontSize: '16px'
  }
});

var siteConfig = {
  version: 2,
  availableCatalogues: ['OCCURRENCE', 'DATASET', 'COLLECTION', 'PUBLISHER', 'RESOURCE', 'LITERATURE'],
  routes: {
    enabledRoutes: [
      'occurrenceSearch',
      'datasetSearch',
      'datasetKey',
      'collectionKey',
      'collectionSearch',
      'publisherKey',
      'publisherSearch',
      'resourceSearch',
      'resourceKey',
      'literatureSearch'
    ],
    alwaysUseHrefs: true,
    occurrenceSearch: {
      route: '/specimen/search',
    },
    datasetKey: {
      route: '/dataset/:key',
      isHref: true,
      url: ({ key }) => {
        return `/dataset/${key}`;
      }
    },
    datasetSearch: {
      route: '/dataset/search',
      isHref: true
    },
    publisherKey: {
      route: '/publisher/:key',
      isHref: true,
      url: ({ key }) => {
        return `/publisher/${key}`;
      }
    },
    collectionSpecimens: {
      route: '/collection/:key/specimens',
      url: ({ key }) => `/collection/${key}/specimens`
    },
    collectionKey: {
      route: '/collection/:key',
      isHref: true,
      url: ({ key }) => {
        return `/collection/${key}`;
      }
    },
    publisherSearch: {
      route: '/publisher/search',
      isHref: true
    },
    resourceKey: {
      route: '/resource/:key',
      isHref: true,
      url: ({ key }) => {
        return `/resource/${key}`;
      }
    },
    resourceSearch: {
      route: '/resource/search',
      isHref: true
    },
    literatureSearch: {
      route: '/literature/search',
      isHref: true
    },    
  },
  occurrence: {
    mapSettings: {
      lat: 4.359262324914326,
      lng: -78.55825586583158,
      zoom: 4.55655220372271
    },
    availableTableColumns: ['features', 'country', 'coordinates', 'year', 'catalogNumber', 'recordedBy', 'identifiedBy'],
    rootPredicate: { 
      type: 'equals', 
      key: 'publishingOrg', 
      value: '698acf43-05cd-4b45-8107-7c666d87f77c' 
    },
    occurrenceSearchTabs: ['MAP', 'TABLE', 'GALLERY', 'DATASETS']
  },
  dataset: {
    rootFilter: {
      publishingOrg: '698acf43-05cd-4b45-8107-7c666d87f77c'
    },
    highlightedFilters: ['q', 'datasetType', 'license'],
    excludedFilters: ['publishingOrg'] // Hide this since it's already filtered
  },
  publisher: {
    highlightedFilters: ['q', 'country', 'name'],
    excludedFilters: ['networkKey'],
    rootFilter: {
      key: '698acf43-05cd-4b45-8107-7c666d87f77c' // Filter to only show this publisher
    }
  },
  resource: {
    availableCatalogues: ['RESOURCE'],
    rootFilter: {
      publishingOrganizationKey: '698acf43-05cd-4b45-8107-7c666d87f77c'
    },
    highlightedFilters: ['q', 'license'],
    excludedFilters: ['publishingOrganizationKey'] // Hide this since it's already filtered
  },
  literature: {
    rootFilter: {
      predicate: {
        type: 'or',
        predicates: [
          {
            type: 'equals',
            key: 'publishingOrganizationKey',
            value: '698acf43-05cd-4b45-8107-7c666d87f77c'
          },
          {
            type: 'in',
            key: 'countriesOfCoverage',
            values: ['CO']
          }
        ]
      }
    },
    highlightedFilters: ['q', 'year', 'literatureType'],
    // Fix for GraphQL errors - ensure arrays are non-nullable
    noNullableArrays: true
  },
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
  },
  // Add this to potentially fix GraphQL errors with nullable arrays
  graphql: {
    // This will ensure that array variables are treated as non-nullable arrays
    transformVariables: function(variables) {
      // Convert nullable arrays to non-nullable by using empty arrays instead of null
      const nonNullableVars = {...variables};
      for (const key in nonNullableVars) {
        if (Array.isArray(nonNullableVars[key])) {
          nonNullableVars[key] = nonNullableVars[key] || [];
        }
      }
      return nonNullableVars;
    }
  }
};

// Get the navigation bar element by its ID
var navbar = document.getElementById("navbar");

// Check if the navigation bar element exists
if (navbar) {
    // Set the display property to "none" to hide the navigation bar
    navbar.style.display = "none";
}
