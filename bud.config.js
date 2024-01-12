/**
 * Compiler configuration
 *
 * @see {@link https://roots.io/docs/sage sage documentation}
 * @see {@link https://bud.js.org/guides/configure bud.js configuration guide}
 *
 * @type {import('@roots/bud').Config}
 */

/**
 * Import WordPress `theme.json` settings
 */
import blocksThemeSettings from './blocksThemeSettings.js';

export default async (app) => {
    app.setPath('@src', 'web/app/themes/your-theme-name/resources');
    app.setPath('@dist', 'web/app/themes/your-theme-name/public');
    app.setPath('@fonts', 'web/app/themes/your-theme-name/resources/fonts');
    app.setPath('@images', 'web/app/themes/your-theme-name/resources/images');
    app.setPath('@scripts', 'web/app/themes/your-theme-name/resources/scripts');

    /**
     * Application assets & entrypoints
     *
     * @see {@link https://bud.js.org/docs/bud.entry}
     * @see {@link https://bud.js.org/docs/bud.assets}
     */
    app.entry('app', ['@scripts/app', '@styles/app'])
        .entry('home', ['@styles/pages/home'])
        .entry('category', ['@scripts/category', '@styles/pages/category'])
        .entry('post', ['@styles/pages/post'])
        .entry('search', ['@styles/pages/search'])
        .entry('404', ['@styles/pages/404'])
        .entry('page', ['@styles/pages/page'])
        .entry('editor', ['@scripts/editor', '@styles/editor'])
        .assets(['images'])
        .minimize();

    /**
     * Set public path
     *
     * @see {@link https://bud.js.org/docs/bud.setPublicPath}
     */
    app.setPublicPath('/app/themes/your-theme-name/public/');

    /**
     * Development server settings
     *
     * @see {@link https://bud.js.org/docs/bud.setUrl}
     * @see {@link https://bud.js.org/docs/bud.setProxyUrl}
     * @see {@link https://bud.js.org/docs/bud.watch}
     */
    app.setUrl(3000)
        .setProxyUrl('http://lando-wp-experiments.lndo.site')
        .watch(['web/app/themes/your-theme-name/resources/views', 'app']);

    /**
     * Generate WordPress `theme.json`
     *
     * @note This overwrites `theme.json` on every build.
     *
     * @see {@link https://bud.js.org/extensions/sage/theme.json}
     * @see {@link https://developer.wordpress.org/block-editor/how-to-guides/themes/theme-json}
     */
    app.wpjson
        .useTailwindFontFamily()
        .setSettings(blocksThemeSettings)
        .enable();

    /**
     * Move generated WordPress `theme.json` to theme dir
     *
     * @see {@link https://bud.js.org/reference/bud.after}
     */
    app.after(async (app) => {
        app.sh(['mv', 'theme.json', 'web/app/themes/your-theme-name/theme.json']);
    });
};
