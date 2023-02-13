import { defineConfig } from 'vitepress';
// refer https://vitepress.vuejs.org/config/introduction for details
const config = {
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
          collapsed: false,
          items: [
            { text: 'Colores', link: '/guide/colors' },    
            { text: 'Tipografía', link: '/guide/typography' },                    
            { text: 'Íconos', link: '/guide/icons' },                    
  
          ],
        },
        {
          text: 'CSS Básico Intro',
          collapsed: true,
          items: [
            { text: 'Selectores', link: '/guide/css/basic/selectors' },    
            { text: 'Pseudo-clases', link: '/guide/css/basic/pseudoclases' },                    
            { text: 'Pseudo-elementos', link: '/guide/css/basic/pseudoelementos' },                    
            { text: 'Especificidad', link: '/guide/typography' },                    
            { text: 'Valores y unidades', link: '/guide/typography' },                    
            { text: 'Propiedades y texto', link: '/guide/typography' },                    
            { text: 'Box Model',
              items:[
                { text: 'Margin', link: '/guide/typography' },                    
                { text: 'Padding', link: '/guide/typography' },                    
                { text: 'Box-sizing', link: '/guide/typography' },                    
                { text: 'Border Radius', link: '/guide/typography' },                    
              ]
            },
            { text: 'Outline', link: '/guide/typography' },                    
            { text: 'Background', link: '/guide/typography' },                    
            { text: 'Gradientes', link: '/guide/typography' },                    
            { text: 'Box shadow', link: '/guide/typography' },                    
            { text: 'Variables', link: '/guide/typography' },                    
            { text: 'Posicionamiento', link: '/guide/typography' },                    
            { text: 'Overflow', link: '/guide/typography' },                    
            { text: 'Display', link: '/guide/typography' },                    
            { text: 'Flexbox', link: '/guide/typography' },                    
            { text: 'Grid', link: '/guide/typography' },                    
            { text: 'Animaciones', link: '/guide/typography' },                    
  
          ],
        },
      ],
    },
}


export default defineConfig(config)
