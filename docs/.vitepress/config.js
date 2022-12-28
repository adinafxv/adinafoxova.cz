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
  
  
  themeConfig: {
    siteTitle: false,
    logo: { 
      light: '/logo.svg',
      dark: '/logoDark.svg',
      alt: '{fxv}'
    },
    
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

  