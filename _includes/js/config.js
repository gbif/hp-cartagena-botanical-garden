var siteConfig = {
  "version": 3,
  "pages": [
    {
      "id": "occurrenceSearch",
      "path": "specimen/search"
    },
    {
      "id": "datasetSearch",
      "path": "dataset/search"
    },
    {
      "id": "datasetKey",
      "path": "dataset/:key"
    },
    {
      "id": "collectionKey",
      "path": "collection/:key"
    },
    {
      "id": "collectionSearch",
      "path": "collection/search"
    },
    {
      "id": "publisherKey",
      "path": "publisher/:key"
    },
    {
      "id": "publisherSearch",
      "path": "publisher/search"
    },
    {
      "id": "resourceSearch",
      "path": "resource/search"
    },
    {
      "id": "resourceKey",
      "path": "resource/:key"
    },
    {
      "id": "literatureSearch",
      "path": "literature/search"
    }
  ],
  "disableInlineTableFilterButtons": false,
  "availableCatalogues": [
    "OCCURRENCE",
    "DATASET",
    "COLLECTION",
    "PUBLISHER",
    "RESOURCE",
    "LITERATURE"
  ],
  "dataHeader": {
    "enableApiPopup": false,
    "enableInfoPopup": false
  },
  "theme": {
    "primary": themeStyle.colors.primary,
    "borderRadius": 3,
    "stickyOffset": "0px"
  },
  "maps": {
    "locale": "en",
    "mapStyles": {
      "defaultProjection": "MERCATOR",
      "defaultMapStyle": "BRIGHT",
      "options": {
        "ARCTIC": [
          "NATURAL",
          "BRIGHT"
        ],
        "PLATE_CAREE": [
          "NATURAL",
          "BRIGHT",
          "DARK"
        ],
        "MERCATOR": [
          "NATURAL",
          "BRIGHT",
          "DARK"
        ],
        "ANTARCTIC": [
          "NATURAL",
          "BRIGHT",
          "DARK"
        ]
      }
    }
  },
  "languages": [
    {
      "code": "es",
      "localeCode": "es",
      "label": "Español",
      "default": false,
      "textDirection": "ltr",
      "cmsLocale": "es",
      "vocabularyLocale": "es-ES",
      "iso3LetterCode": "spa",
      "gbifOrgLocalePrefix": "/es",
      "grSciCollLocalePrefix": "/es",
      "mapTileLocale": "es"
    },
    {
      "code": "en",
      "localeCode": "en",
      "label": "English",
      "default": true,
      "textDirection": "ltr",
      "iso3LetterCode": "eng",
      "cmsLocale": "en-GB",
      "vocabularyLocale": "en",
      "gbifOrgLocalePrefix": "",
      "mapTileLocale": "en"
    }
  ],
  "messages": {
    "es": {
      "catalogues.occurrences": "Specimens"
    },
    "en": {
      "catalogues.occurrences": "Specimens"
    }
  },
  "occurrenceSearch": {
    "scope": {
      "type": "equals",
      "key": "publishingOrg",
      "value": "698acf43-05cd-4b45-8107-7c666d87f77c"
    },
    "availableTableColumns": [
      "features",
      "country",
      "coordinates",
      "year",
      "catalogNumber",
      "recordedBy",
      "identifiedBy"
    ],
    "tabs": [
      "map",
      "table",
      "gallery",
      "datasets",
      "download"
    ],
    "mapSettings": {
      "lat": 4.359262324914326,
      "lng": -78.55825586583158,
      "zoom": 4.55655220372271
    }
  },
  "collectionSearch": {},
  "institutionSearch": {},
  "datasetSearch": {
    "scope": {
      "publishingOrg": "698acf43-05cd-4b45-8107-7c666d87f77c"
    },
    "highlightedFilters": [
      "q",
      "type",
      "license"
    ],
    "excludedFilters": [
      "publishingOrg"
    ]
  },
  "publisherSearch": {
    "scope": {
      "key": "698acf43-05cd-4b45-8107-7c666d87f77c"
    },
    "highlightedFilters": [
      "q",
      "country",
      "name"
    ],
    "excludedFilters": [
      "networkKey"
    ]
  },
  "literatureSearch": {
    "scope": {
      "type": "equals",
      "key": "publishingOrganizationKey",
      "value": "698acf43-05cd-4b45-8107-7c666d87f77c"
    },
    "highlightedFilters": [
      "q",
      "year",
      "literatureType"
    ]
  }
};

// Get the navigation bar element by its ID
var navbar = document.getElementById("navbar");

// Check if the navigation bar element exists
if (navbar) {
  // Set the display property to "none" to hide the navigation bar
  navbar.style.display = "none";
}