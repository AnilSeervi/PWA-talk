export default {
  fonts: {
    body: "Iosevka"
  },
  colors: {
    background: "#000",
    text: "#ddd",
    primary: "#a66"
  },
  styles: {
    CodeSurfer: {
      pre: {
        color: "text",
        backgroundColor: "background"
      },
      code: {
        color: "#d6deeb",
        backgroundColor: "#011627",
      },
    },
  },
  tokens: {
    "comment cdata doctype": {
      fontStyle: "italic"
    },
    "builtin changed keyword punctuation operator tag deleted string attr-value char number inserted": {
      color: "primary"
    },
    "changed": {
      color: "rgb(162, 191, 252)",
      fontStyle: "italic"
    },
    "deleted": {
      color: "rgba(239, 83, 80, 0.56)",
      fontStyle: "italic"
    },
    "inserted attr-name": {
      color: "rgb(173, 219, 103)",
      fontStyle: "italic"
    },
    "comment": {
      color: "rgb(99, 119, 119)",
      fontStyle: "italic"
    },
    "string url": {
      color: "rgb(173, 219, 103)"
    },
    "variable": {
      color: "rgb(214, 222, 235)"
    },
    "number": {
      color: "rgb(247, 140, 108)"
    },
    "builtin char constant function": {
      color: "rgb(130, 170, 255)"
    },
    "punctuation": {
      color: "rgb(199, 146, 234)"
    },
    "selector doctype": {
      color: "rgb(199, 146, 234)",
      fontStyle: "italic"
    },
    "class-name": {
      color: "rgb(255, 203, 139)"
    },
    "tag operator keyword": {
      color: "rgb(127, 219, 202)"
    },
    "boolean": {
      color: "rgb(255, 88, 116)"
    },
    "property": {
      color: "rgb(128, 203, 196)"
    },
    "namespace": {
      color: "rgb(178, 204, 214)"
    },
    "highlight": {
      background: "hsla(0, 0%, 30%, .5)"
    },
    "line-number": {
      opacity: 0.8
    }
  },
  title: {
    backgroundColor: "background",
    color: "text"
  },
  subtitle: {
    color: "#d6deeb",
    backgroundColor: "rgba(10,10,10,0.9)"
  },
  unfocused: {
    // only the opacity of unfocused code can be changed
    opacity: 0.1
  }
}

