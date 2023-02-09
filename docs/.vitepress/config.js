import { defineConfig } from 'vitepress';

// refer https://vitepress.vuejs.org/config/introduction for details
export default defineConfig({
  lang: 'es_MX',
  title: 'Sistema de diseño',
  description: 'Vite & Vue powered static site generator.',

  themeConfig: {
    nav: [
    //   { text: 'Example', link: '/example' },

      // {
      //   text: 'Dropdown Menu',
      //   items: [
      //     { text: 'Item A', link: '/item-1' },
      //     { text: 'Item B', link: '/item-2' },
      //     { text: 'Item C', link: '/item-3' },
      //   ],
      // },

      // ...
    ],

    sidebar: [
      {
        text: 'Bases',
        items: [
          { text: 'Colores', link: '/guide/colors' },    
          { text: 'Tipografía', link: '/guide/typography' },                    
          { text: 'Íconos', link: '/guide/icons' },                    

        ],
      },
      {
        text: 'Bases',
        items: [
          { text: 'Colores', link: '/guide/colors' },    
          { text: 'Tipografía', link: '/guide/typography' },                    
        ],
      },
    ],
  },
});
