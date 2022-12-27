module.exports = {
  permalink: '/:regular', 
  locales: {
    // The key is the path for the locale to be nested under.
    // As a special case, the default locale can use '/' as its path.
    '/': {
      lang: 'cs-CZ', // this will be set as the lang attribute on <html>
      title: 'Adina Foxova',
      description: 'Ceska stranka'
    },
    '/en/': {
      lang: 'en-US',
      title: 'Adina Foxova',
      description: 'Anglicka stranka'
    }
  }
}

  