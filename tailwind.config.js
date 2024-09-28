/** @type {import('tailwindcss').Config} */
export default {
  content: ["assets/**", "entrypoints/**", "components/**"],
  theme: {
    extend: {
      keyframes: {
        typewriter: {
          to: {
            left: "100%",
          },
        },
        shake: {
          "0%, 100%": { transform: "rotate(-3.5deg)" },
          "50%": { transform: "rotate(3.5deg)" },
        },
      },
      animation: {
        shake: "shake 195ms ease-in-out",
        typewriter: "typewriter 0.8s steps(11) forwards",
      },
    },
  },
  plugins: [],
};
