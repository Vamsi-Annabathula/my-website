const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: 'Vamsi Annabathula',
  tagline: 'I am cool',
  url: 'https://your-docusaurus-test-site.com',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/dp.jpg',
  organizationName: 'facebook', // Usually your GitHub org/user name.
  projectName: 'personalSite', // Usually your repo name.
  themeConfig: {
    navbar: {
      title: 'Vamsi Annabathula',
      logo: {
        alt: 'Vamsi Annabathula Logo',
        src: 'img/dp.jpg',
      },
      items: [
        // {
        //   type: 'doc',
        //   docId: 'intro',
        //   position: 'left',
        //   label: 'Tutorial',
        // },
        { to: '/blog', label: 'Blog', position: 'left' },
        {
          href: 'https://github.com/vamsi-annabathula',
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
              label: 'Blogs',
              to: '/blog',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: "LinkedIn",
              href: "https://www.linkedin.com/in/annabathula-vamsi-3b6a65176/"
            },
            {
              label: "Instagram",
              href: "https://www.instagram.com/me_vamsea/"
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'Blog',
              to: '/blog',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/vamsi-annabathula',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} My Project, Inc. Built with Docusaurus.`,
    },
    prism: {
      theme: lightCodeTheme,
      darkTheme: darkCodeTheme,
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
            'https://github.com/facebook/docusaurus/edit/master/website/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/facebook/docusaurus/edit/master/website/blog/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
