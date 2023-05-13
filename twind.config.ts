import { Options } from "$fresh/plugins/twind.ts";

export default {
  selfURL: import.meta.url,
  theme: {
    extend: {
      colors: {
        "teal-300": "rgb(94 234 212)",
      },
      keyframes: {
        wiggle: {
          "0%, 100%": { transform: "rotate(-3deg)" },
          "50%": { transform: "rotate(3deg)" },
        },
        "appear-t": {
          "0%": { opacity: "0", transform: "translate(0,-50px)" },
          "100%": { opacity: "1", transform: "translate(0,0)" },
        },
        "appear-l": {
          "0%": { opacity: "0", transform: "translate(-50%,-200px)" },
          "100%": { opacity: "1", transform: "translate(0,0)" },
        },
      },
      animation: {
        wiggle: "wiggle 1s ease-in-out infinite",
        appear: "appear-l 1.5s ",
      },
    },
  },
} as Options;
