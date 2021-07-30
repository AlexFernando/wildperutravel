const settings = {
  "name": "wildperutravel",
  "state": {
    "frontity": {
      "url": "https://restapi.wildfreewalkingtours.com/",
      "title": "Wild Peru Travel",
      "description": "WordPress installation for Wild Peru Travel Website"
    }
  },
  "packages": [
    {
      "name": "wildperutheme",
    },
    {
      "name": "@frontity/wp-source",
      "state": {
        "source": {
          "api": "https://restapi.wildfreewalkingtours.com/wp-json/",

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
};

export default settings;
