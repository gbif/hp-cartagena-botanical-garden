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
    // Define ALL routes explicitly to avoid undefined errors
    occurrenceSearch: {
      route: '/specimen/search',
      isHref: true
    },
    datasetKey: {
      route: '/dataset/:key',
      isHref: true,
      url: ({ key }) => `/dataset/${key}`
    },
    datasetSearch: {
      route: '/dataset/search',
      isHref: true
    },
    publisherKey: {
      route: '/publisher/:key',
      isHref: true,
      url: ({ key }) => `/publisher/${key}`
    },
    publisherSearch: {
      route: '/publisher/search',
      isHref: true
    },
    collectionKey: {
      route: '/collection/:key',
      isHref: true,
      url: ({ key }) => `/collection/${key}`
    },
    collectionSearch: {
      route: '/collection/search',
      isHref: true
    },
    collectionSpecimens: {
      route: '/collection/:key/specimens',
      isHref: true,
      url: ({ key }) => `/collection/${key}/specimens`
    },
    resourceKey: {
      route: '/resource/:key',
      isHref: true,
      url: ({ key }) => `/resource/${key}`
    },
    resourceSearch: {
      route: '/resource/search',
      isHref: true
    },
    literatureSearch: {
      route: '/literature/search',
      isHref: true
    },
    // Add these additional routes that might be used internally
    occurrenceKey: {
      route: '/specimen/:key',
      isHref: true,
      url: ({ key }) => `/specimen/${key}`
    },
    literatureKey: {
      route: '/literature/:key',
      isHref: true,
      url: ({ key }) => `/literature/${key}`
    },
    institutionKey: {
      route: '/institution/:key',
      isHref: true,
      url: ({ key }) => `/institution/${key}`
    },
    institutionSearch: {
      route: '/institution/search',
      isHref: true
    }
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
    excludedFilters: ['publishingOrg']
  },
  publisher: {
    highlightedFilters: ['q', 'country', 'name'],
    excludedFilters: ['networkKey'],
    rootFilter: {
      key: '698acf43-05cd-4b45-8107-7c666d87f77c'
    }
  },
  resource: {
    rootFilter: {
      publishingOrganizationKey: '698acf43-05cd-4b45-8107-7c666d87f77c'
    },
    highlightedFilters: ['q', 'license'],
    excludedFilters: ['publishingOrganizationKey']
  },
  literature: {
    rootFilter: {
      predicate: {
        type: 'equals',
        key: 'publishingOrganizationKey',
        value: '698acf43-05cd-4b45-8107-7c666d87f77c'
      }
    },
    highlightedFilters: ['q', 'year', 'literatureType']
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
  }
};

// Get the navigation bar element by its ID
var navbar = document.getElementById("navbar");

// Check if the navigation bar element exists
if (navbar) {
    // Set the display property to "none" to hide the navigation bar
    navbar.style.display = "none";
}