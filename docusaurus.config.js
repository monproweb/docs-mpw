module.exports = {
  title: 'Mon Pro Web',
  tagline: 'Documentation',
  url: 'https://docs.monproweb.io',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  favicon: 'img/favicon.ico',
  organizationName: 'monproweb', // Usually your GitHub org/user name.
  projectName: 'docs-mpw', // Usually your repo name.
  themeConfig: {
    navbar: {
      title: 'Mon Pro Web',
      logo: {
        alt: 'Mon Pro Web Logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          to: 'docs/',
          activeBasePath: 'docs',
          label: 'Docs',
          position: 'left',
        },
        {
          href: 'https://github.com/monproweb/docs-mpw',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Style Guide',
              to: 'docs/',
            },
            {
              label: 'Second Doc',
              to: 'docs/doc2/',
            },
          ],
        },
        {
          title: 'Communauté',
          items: [
            {
              label: 'Stack Overflow',
              href: 'https://stackoverflow.com/users/10944586/thomas-erhel',
            },
            {
              label: 'Twitter',
              href: 'https://twitter.com/monproweb',
            },
          ],
        },
        {
          title: 'Plus',
          items: [
            {
              label: "Blog",
              href: "https://blog.monproweb.io",
            },
            {
              label: "GitHub",
              href: "https://github.com/monproweb/docs-mpw/",
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Mon Pro Web, Inc. Construit avec Docusaurus.`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl:
            'https://github.com/monproweb/docs-mpw/edit/master/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
