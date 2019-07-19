/* eslint-disable quote-props */
export default {
  a: {
    color: "text",
    bg: "background",
    textDecoration: "none",
    borderBottom: "0.1rem dotted",
    // TODO: Fix this. See https://github.com/system-ui/theme-ui/issues/{75/81}
    borderColor: "text",
    ":hover": {
      color: "background",
      bg: "text",
      borderBottom: "none",
    },
  },
  h1: {
    fontFamily: "heading",
    fontSize: 5,
    "> span": {
      fontSize: 5,
    },
  },
  p: {
    fontSize: 2,
  },
};