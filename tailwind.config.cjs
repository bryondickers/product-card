/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {

    colors:{
      darkCyan:'hsl(var(--dark-cyan))',
      cream:'hsl(var(--cream))',
      darkBlue:'hsl(var(--very-dark-blue))',
      darkGrayish:"hsl(var(--dark-grayish-blue))",
      light:'hsl(var(--white))'

    },
    extend: {
      fontFamily:{
        montserrat:"'Montserrat'",
        fraunces:"'Fraunces'"
      }
    },
  },
  plugins: [
    tailwindcss: {},
    autoprefixer: {},
    ...(process.env.NODE_ENV === 'production' ? { cssnano: {} } : {})
  ],
}
