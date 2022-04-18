import Root from './Root';
import image from "@frontity/html2react/processors/image";
import iframe from "@frontity/html2react/processors/iframe";
import links from "./processor/links";

export default {
  name: "wildperutheme",
  roots: {
    theme: Root
  },
  state: {
    theme: {},
    source: {
      data: {
        "/": {
          isReady: true,
          isFetching: false,
          isHomePage: true
        },


        "/es/": {
          isReady: true,
          isFetching: false,
          isHomePage: true
        },
        
        "/tourdetails/": {
          isReady: true,
          isFetching: false,
          isTourDetails: true
        }
      }
    }
  },

      /**
   * Actions are functions that modify the state or deal with other parts of
   * Frontity like libraries.
   */
       actions: {
        theme: {
          toggleMobileMenu: ({ state }) => {
            state.theme.isMobileMenuOpen = !state.theme.isMobileMenuOpen;
          },
          closeMobileMenu: ({ state }) => {
            state.theme.isMobileMenuOpen = false;
          },
        },
      },
  
      libraries: {
        html2react: {
          /**
           * Add a processor to `html2react` so it processes the `<img>` tags
           * inside the content HTML. You can add your own processors too
           */
          processors: [image, iframe, links],
        },
      },
};
