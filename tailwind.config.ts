import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens:{
      'xs':'320px',
      'sm': '575px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    },
    extend: {
     fontFamily:{
      title:['Poppins','sans-serif'],
      head:['Inter','sans-serif'],
      title2:['Sansita','sans-serif']
      
    },
    boxShadow: {
      'custom': '0px 4px 16px 0px rgba(0, 0, 0, 0.25)',
    },
      colors:{
        button:'#23b78d',
        heading:'#1EB697',
        linecolor:'#6B7385',
        round:' #E8DDFD',
        redd:" #EE4A62",
        b:' #000000',
        shadowcolor:'#00000040',
        circlecolor:'#FFFFFF',
         buttcolor:' #1AB69D',
         btncolor:'#C077E9',
         btndivcolor:'#F6EBFC',
         para:'#6B7385',
         cardcolor1:'#fffccf',
         cardcolor2:'#ffedff',
         cardcolor3:'#ffe8eb',
         cardcolor4:'#e9f6ff',
         PurchaseCard:'#f0f4f5',     
         btcolor:'#efdafb',
         bt1color:'#23b78d',
         bordercolor:'#1BB69C',
         textc:'#6B7385',
         headcolor:'#2F57EF',
         rightcolor:'#30B979'

      },
      
    },
  },
  plugins: [],
};
export default config;
