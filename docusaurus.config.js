// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {
    themes as prismThemes
} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
    title: 'Jinze',
    tagline: 'Dinosaurs are cool',
    favicon: 'img/favicon.ico',

    // Set the production url of your site here
    url: 'http://Jinzedev.github.io',
    // url: 'https://your-docusaurus-site.example.com',
    // Set the /<baseUrl>/ pathname under which your site is served
    // For GitHub pages deployment, it is often '/<projectName>/'
    baseUrl: '/',

    // GitHub pages deployment config.
    // If you aren't using GitHub pages, you don't need these.
    organizationName: 'Jinzedev', // Usually your GitHub org/user name.
    projectName: 'Jinzedev.github.io', // Usually your repo name.
    deploymentBranch: 'gh-pages',
    onBrokenLinks: 'throw',
    onBrokenMarkdownLinks: 'warn',

    // Even if you don't use internationalization, you can use this field to set
    // useful metadata like html lang. For example, if your site is Chinese, you
    // may want to replace "en" with "zh-Hans".
    i18n: {
        defaultLocale: 'zh-cn',
        locales: ['zh-cn', 'en'],
    },

    presets: [
        [
            'classic',
            /** @type {import('@docusaurus/preset-classic').Options} */
            ({

                docs: {
                    sidebarPath: './sidebars.js',
                    sidebarCollapsible: true,
                    // Please change this to your repo.
                    // Remove this to remove the "edit this page" links.
                    editUrl:
                        'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
                },

                blog: {
                    showReadingTime: true,
                    blogSidebarTitle: '文章列表',
                    postsPerPage: 'ALL',
                    blogSidebarCount: 10,


                    // Please change this to your repo.
                    // Remove this to remove the "edit this page" links.
                    editUrl:
                        'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
                },
                theme: {
                    customCss: './src/css/custom.css',
                },
            }),
        ],
    ],

    themeConfig:
        /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
        ({
            // Replace with your project's social card
            image: 'img/docusaurus-social-card.jpg',
            docs: {
                sidebar: {
                    hideable: true,
                },
            },

            navbar: {
                title: '槿泽',
                logo: {
                    alt: 'My Site Logo',
                    src: 'img/logo.svg',
                },
                items: [
                    {
                        type: 'docSidebar',
                        sidebarId: 'tutorialSidebar',
                        position: 'left',
                        label: '📑笔记',
                    },
                    {

                        to: '/docs/story',
                        label: '✍️瞎写',
                        sidebarId: 'interview',
                        position: 'left'
                    },
                    { to: 'blog', label: '😸博客', position: 'left' },
                    {
                        href: 'https://github.com/jinzedev',
                        label: 'GitHub',
                        position: 'right',
                    },
                ],
            },
            colorMode: {
                defaultMode: 'dark',
                disableSwitch: false,
                respectPrefersColorScheme: false,
            },
            prism: {
                theme: prismThemes.vsLight,
                darkTheme: prismThemes.vsDark,
            },
        }),
    plugins: [
        [
            'docusaurus-plugin-image-zoom',
            {
                selector: '.markdown :not(em) > img',
                background: {
                    light: 'rgb(255, 255, 255)',
                    dark: 'rgb(50, 50, 50)',
                },
            },
        ],

        '@docusaurus/plugin-ideal-image',


    ]
};

export default config;
