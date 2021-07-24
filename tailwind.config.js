const plugin = require('tailwindcss/plugin')

module.exports = {
  mode: "jit",
  purge: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./styles/**/*.{css}",
  ],
  darkMode: false,
  theme: {
    extend: {

    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    plugin(({ addVariant, e }) => {
      addVariant('peer-open', ({ modifySelectors, separator }) => {
        modifySelectors(({ className }) => {
          return `.peer[open] .${e(`peer-open${separator}${className}`)}`
        })
      })
    }),
    
    plugin(({ addVariant, e }) => {
      addVariant('label-checked', ({ modifySelectors, separator }) => {
        modifySelectors(({ className }) => {
          return `label input:checked ~ .${e(`label-checked${separator}${className}`)}`
        })
      })
    }),
  ],
}
