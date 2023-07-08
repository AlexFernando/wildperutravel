const settings = [
  //ENGLISH SITE
  {
  "name": "wildperutravel",
  "state": {
    "frontity": {
      "url": "https://wildperu2023.wildfreewalkingtours.com",
      "title": "Wild Peru Travel",
      "description": "WordPress installation for Wild Peru Travel Website"
    },

    "theme":{
      "lang": "en"
    }
  },
  "packages": [
    {
      "name": "wildperutheme",
      "state": {
        "theme": {
          "menu": [
            ["About", "/"],
            ["Tours", "/fulltours/"],
            ["Packages", "/packages/"],
            ["Machu Picchu", "/machupicchu/"],
            ["Sacred Valley", "/sacredvalley/"],
            ["Adventure Tours", "/adventuretours/"],            
            ["Contact", "/contact-tour/"],
          ],
          "featured": {
            "showOnList": true,
            "showOnPost": true
          },
          // Whether to auto-fetch links on a page. Values can be "no" | "all" | "in-view" | "hover"
          autoPrefetch: "hover"
        }
      }
    },
    {
      "name": "@frontity/wp-source",
      "state": {
        "source": {
          "api": "https://wildperu2023.wildfreewalkingtours.com/wp-json/",

          "params": {
            per_page: 100,
          },

          "postTypes": [

            {
              type: "alltours",
              endpoint: "alltours",
              archive: "alltours",
            },
          ],
        }
      }
    },
    "@frontity/tiny-router",
    "@frontity/html2react",
    "@aamodtgroup/frontity-contact-form-7"
    ]
  },

  //SPANISH SITE

  {
    
    "name": "wildperutravel-spanish",
    "match": [".*wildperutravels.com\/es(\/.*)?$"],
    "state": {
      "frontity": {
        "url": "https://wildperu2023.wildfreewalkingtours.com/es/",
        "title": "Wild Peru Travel",
        "description": "WordPress installation for Wild Peru Travel Website"
      },

      "theme":{
        "lang": "es"
      }
    },
    "packages": [
      {
        "name": "wildperutheme",
        "state": {
          "theme": {
            "menu": [
              ["Acerca de ", "/es/"],
              ["Tours", "/es/fulltours/"],
              ["Valle Sagrado", "/es/sacredvalley/"],
              ["Tours de Aventura", "/es/adventuretours/"],           
              ["Contacto", "/es/contact-tour/"]
            ],
            "featured": {
              "showOnList": true,
              "showOnPost": true
            },
            // Whether to auto-fetch links on a page. Values can be "no" | "all" | "in-view" | "hover"
            autoPrefetch: "hover"
          }
        }
      },
      {
        "name": "@frontity/wp-source",
        "state": {
          "source": {
            "api": "https://wildperu2023.wildfreewalkingtours.com/es/wp-json/",
  
            "subdirectory": "/es",
            "homepage": "/homepage",

            "params": {
              "lang": "es",
            },
  
            "params": {
              per_page: 100,
            },
            
            "postTypes": [
  
              {
                type: "alltours",
                endpoint: "alltours",
                archive: "alltours",
              },
            ],
          }
        }
      },
      "@frontity/tiny-router",
      "@frontity/html2react",
      "@aamodtgroup/frontity-contact-form-7"
    ]
  }

]
;

export default settings;
