export default {
  
  locales: {
    // The key is the path for the locale to be nested under.
    // As a special case, the default locale can use '/' as its path.
    '/': {
      lang: 'cs-CZ', // this will be set as the lang attribute on <html>
      title: 'Adina Foxova',
      description: 'UX Designérka na volné noze',
    },
    '/en/': {
      lang: 'en-US',
      title: 'Adina Foxova',
      description: 'Freelance UX Designer'
    }
  },

  head: [
    ['link', { rel: "apple-touch-icon", sizes: "180x180", href: "/assets/fav/apple-touch-icon.png"}],
    ['link', { rel: "icon", type: "image/png", sizes: "32x32", href: "/assets/fav/assets/favicon-32x32.png"}],
    ['link', { rel: "icon", type: "image/png", sizes: "16x16", href: "/assets/fav/assets/favicon-16x16.png"}],
    ['link', { rel: "manifest", href: "/assets/fav/site.webmanifest"}],
    ['link', { rel: "mask-icon", href: "/assets/fav/safari-pinned-tab.svg", color: "#e6c341"}],
    ['link', { rel: "shortcut icon", href: "/assets/fav/assets/favicon.ico"}],
    ['meta', { name: "msapplication-TileColor", content: "#3a0839"}],
    ['meta', { name: "msapplication-config", content: "/assets/fav/browserconfig.xml"}],
    ['meta', { name: "theme-color", content: "#e6c341"}],
  ],
  // ...
  
  
  themeConfig: {
    siteTitle: '{fxv}',
    
    /* locales: {
      '/': {
      sidebar: [
        {
          text: 'Switch language',
          items: [
            { text: 'English 🇬🇧', link: '/en/' },
            ]
          },
        ]
      },

      '/en/': {
        sidebar: [
          {
           text: 'Přepnout jazyk',
            items: [
              { text: 'Czech 🇨🇿', link: '/' },
              ]
            },
          ]
        }
      } */
    }


}

  