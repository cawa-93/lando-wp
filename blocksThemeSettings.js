const blocksThemeSettings = {
    color: {
        custom: true,
        customDuotone: false,
        customGradient: false,
        defaultDuotone: false,
        defaultGradients: false,
        defaultPalette: false,
        duotone: [],
        palette: [
            {
                slug: 'main-text',
                color: '#0E343F',
                name: 'Main text',
            },
            {
                slug: 'main-text-op80',
                color: '#0E343F80',
                name: 'Main text opacity 80%',
            },
            {
                slug: 'main-text-op40',
                color: '#0E343F40',
                name: 'Main text opacity 40%',
            },
            {
                slug: 'main-text-op20',
                color: '#0E343F20',
                name: 'Main text opacity 20%',
            },
            {
                slug: 'main-text-op05',
                color: '#0E343F05',
                name: 'Main text opacity 5%',
            },
            {
                slug: 'main-background',
                color: '#E4EDF0',
                name: 'Main background',
            },
            {
                slug: 'secondary-background',
                color: '#e4edf0',
                name: 'Secondary background',
            },
            {
                slug: 'white',
                color: '#ffffff',
                name: 'White',
            },
            {
                slug: 'blue',
                color: '#0056a6',
                name: 'Blue',
            },
            {
                slug: 'hover',
                color: '#154351',
                name: 'Hover',
            },
        ],
    },
    custom: {},
    spacing: {
        padding: true,
        margin: true,
        units: ['px', '%', 'em', 'rem', 'vw', 'vh'],
    },
    typography: {
        fontWeight: true,
        letterSpacing: true,
        textDecoration: true,
        textTransform: true,
        customFontSize: true,
        fontSizes: [
            {
                slug: 'small-text',
                size: '14px',
                name: 'Small text',
            },
            {
                slug: 'normal-text',
                size: '16px',
                name: 'Normal text',
            },
            {
                slug: 'big-text',
                size: '20px',
                name: 'Big text',
            },
            {
                slug: 'h3-title',
                size: '32px',
                name: 'h3 Title',
            },
            {
                slug: 'h2-title',
                size: '48px',
                name: 'h2 Title',
            },
            {
                slug: 'h1-title',
                size: '64px',
                name: 'h1 Title',
            },
        ],
    },
};

export default blocksThemeSettings;
