import Root from './Root'

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

        "/tourdetails/": {
          isReady: true,
          isFetching: false,
          isTourDetails: true
        }
      }
    }
  },
  actions: {
    theme: {}
  }
};
