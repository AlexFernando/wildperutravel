const settings = [
  //ENGLISH SITE
  {
  "name": "wildperutravel",
  "state": {
    "frontity": {
      "url": "https://wildperu2024.wildfreewalkingtours.com",
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
            {
              name: "Home", 
              link : "/",
              submenu: []
            },
  
            // {
            //   name: "Tours",
            //   link: "/fulltours/",
            //   submenu: [
            //     {
            //       name: 'All Tours',
            //       link: '/fulltours/'
            //     },
            //     {
            //       name: 'Sacred Valley',
            //       link: '/sacredvalley/'
            //     },
            //     {
            //       name: 'Adventure Tours',
            //       link: '/adventuretours/'
            //     },
            //   ]
            // },

            {
              name: "Packages",
              link: "#",
              submenu: [
                {
                  name: 'Cusco Magic 8D / 7N',
                  link: '/alltours/cusco-magic-8-days-7-nights/'
                },

                {
                  name: 'Cusco Magic 7D / 6N',
                  link: '/alltours/cusco-magic-7-days-6-nights/'
                },

                {
                  name: 'Cusco 5D / 4N',
                  link: '/alltours/cusco-5-days-4-nigths/'
                }
              ]
            },

            {
              name: '01 Day Tours',
              link: '/city-tours/',
              submenu: []
            },

            {
              name: 'Hiking/Treks',
              link: '/hiking/',
              submenu: []
            },

            {
              name: "Machu Picchu",
              link: "/machupicchu/",
              submenu: []
            },
  
            {
              name: 'Adventure Tours',
              link: '/adventuretours/',
              submenu: []
            },

            {
              name: "Jungle",
              link: "/jungle/",
              submenu: []
            },
  
            {
              name: "Blog",
              link: "/blog-page/",
              submenu: []
            },

            {
              name: "Contact",
              link: "/contact-tour/",
              submenu: []
            },

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
          "api": "https://wildperu2024.wildfreewalkingtours.com/wp-json/",

          "params": {
            per_page: 100,
          },

          "postTypes": [

            {
              type: "alltours",
              endpoint: "alltours",
              archive: "alltours",
            },

            {
              type: "blog",
              endpoint: "blog",
              archive: "blog",
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
    // "match": [".*localhost:3000\/es(\/.*)?$"],
    "state": {
      "frontity": {
        "url": "https://wildperu2024.wildfreewalkingtours.com/es/",
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
              // ["Acerca de ", "/es/"],
              // ["Tours", "/es/fulltours/"],
              // ["Valle Sagrado", "/es/sacredvalley/"],
              // ["Tours de Aventura", "/es/adventuretours/"],           
              // ["Contacto", "/es/contact-tour/"]

              {
                name: "Inicio", 
                link : "/es/",
                submenu: []
              },
    
              // {
              //   name: "Tours",
              //   link: "/es/fulltours/",
              //   submenu: [
              //     {
              //       name: 'Nuestros Tours',
              //       link: '/es/fulltours/'
              //     },
              //     {
              //       name: 'Valle Sagrado',
              //       link: '/es/sacredvalley/'
              //     },
              //     {
              //       name: 'Tours de Aventura',
              //       link: '/es/adventuretours/'
              //     },
              //   ]
              // },
  
              {
                name: "Paquetes Turísticos",
                link: "/",
                submenu: [
                  {
                    name: 'Cusco Magic 8D / 7N',
                    link: '/es/alltours/cusco-magic-8-days-7-nights/'
                  },

                  {
                    name: 'Cusco Magic 7D / 6N',
                    link: '/es/alltours/cusco-magic-7-days-6-nights/'
                  },

                  {
                    name: 'Cusco 5D / 4N',
                    link: '/es/alltours/cusco-5-days-4-nigths/'
                  }
                ]
              },

              {
                name: 'Tours 01 Día',
                link: '/es/city-tours/',
                submenu: []
              },

              {
                name: 'Hiking/Treks',
                link: '/es/hiking/',
                submenu: []
              },

              {
                name: 'Aventura',
                link: '/es/adventuretours/',
                submenu: []
              },
    
              {
                name: "Machu Picchu",
                link: "/es/machupicchu/",
                submenu: []
              },

              {
                name: "Amazonía",
                link: "/es/jungle/",
                submenu: []
              },
  
              {
                name: "Blog",
                link: "/es/blog-page/",
                submenu: []
              },
  
              {
                name: "Contacto",
                link: "/es/contact-tour/",
                submenu: []
              },
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
            "api": "https://wildperu2024.wildfreewalkingtours.com/es/wp-json/",
  
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
              {
                type: "blog",
                endpoint: "blog",
                archive: "blog",
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
