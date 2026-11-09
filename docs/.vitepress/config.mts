import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'White Tee Landscape',
  description: 'A source-backed research hub for the plain white T-shirt market.',
  base: '/white-tee-landscape/',
  cleanUrls: true,
  themeConfig: {
    nav: [
      { text: 'Landscape', link: '/landscape' },
      { text: 'Competitors', link: '/competitors/' },
      { text: 'Research method', link: '/research/method' },
    ],
    sidebar: {
      '/competitors/': [
        { text: 'Competitors', items: [
          { text: 'Overview & watchlist', link: '/competitors/' },
          { text: 'Profile template', link: '/competitors/_template' },
        ] },
      ],
      '/research/': [
        { text: 'Research', items: [
          { text: 'Method', link: '/research/method' },
          { text: 'Evidence log', link: '/research/evidence-log' },
          { text: 'Sources', link: '/research/sources' },
        ] },
      ],
      '/': [
        { text: 'Project', items: [
          { text: 'Landscape', link: '/landscape' },
          { text: 'Research method', link: '/research/method' },
          { text: 'Evidence log', link: '/research/evidence-log' },
          { text: 'Sources', link: '/research/sources' },
        ] },
        { text: 'Competitors', items: [
          { text: 'Overview & watchlist', link: '/competitors/' },
          { text: 'Profile template', link: '/competitors/_template' },
        ] },
      ],
    },
    socialLinks: [],
    footer: { message: 'Working research. Verify claims against the linked source.', copyright: 'Internal project hub' },
  },
})
