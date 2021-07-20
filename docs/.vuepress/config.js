module.exports = {
  
  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Guide', link: '/about/' },
      { text: 'External', link: 'https://github.com/sodagreen574' },
    ],
    sidebar: [
      '/',
      '/page-a',
      ['/page-b', 'Explicit link text']
    ],
    sidebar:'auto',
    base:'/docs/',
  }
}