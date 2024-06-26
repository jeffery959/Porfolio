import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      height:{
        "costum1":"700px"
      },
      maxWidth:{
        "costum1":"570px",
        "128":"28rem" ,
        "136":"30rem", 
        "168":"34rem",
        "192":"38rem",
        "224":"42rem",
        "384":"62rem",
        "448":"78rem",
        "480":"84rem"
      },
      colors:{
        'primary':'#623EC8',
        'secondary':'#00B18F'
      }
    },
  },
  plugins: [
    
  ],
};
export default config;
