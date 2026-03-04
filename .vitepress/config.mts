import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Modular Auton Docs",
  description: "Docs for Modular Auton and other stuff",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
    ],

    sidebar: [
      {
        text: 'Introduction',
        items: [
          { text: 'Intro', link: '/summary' },
          { text: 'Outline', link: '/outline' },
          { text: 'Auto Paths', link: '/autopaths' },
          { text: 'Auto Template', link: '/autotemplate' },

        ]
      },
      {
        text: 'Guides',
        items: [
          { text: 'Adding a new Path', link: '/newpaths' },
          { text: 'Making a custom auto', link: '/customauto' },

        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  }
})
