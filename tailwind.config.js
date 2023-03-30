/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html'],
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
  plugins: [],
}

