const fontWeightLight = 300;
const fontWeightRegular = 400;
const fontWeightMedium = 500;
const fontWeightBold = 600;

export default {
    typography: {
        fontFamily:'Open Sans',
        fontSize: '16px',
        fontWeightLight,
        fontWeightRegular,
        fontWeightMedium,
        fontWeightBold,
        h3: {
            fontFamily:'Open Sans',
            fontWeight: fontWeightRegular,
        },

    },
    palette:{
        common:{
            black: '#000000',
            white: '#ffffff',
        },
        primary:{
            main: '#fff100',
        },
        secondary:{
            main: '#d8d8d8',
        },
        grey: {
            50: '#fafafa',
            100: '#f5f5f5',
            200: '#eeeeee',
            300: '#e0e0e0',
            400: '#bdbdbd',
            500: '#9e9e9e',
            600: '#757575',
            700: '#616161',
            800: '#424242',
            900: '#212121',
            A100: '#d5d5d5',
            A200: '#aaaaaa',
            A400: '#303030',
            A700: '#616161',
        },
        text: {
            primary: '#252525',
            secondary: 'rgba(0, 0, 0, 0.54)',
            disabled: 'rgba(0, 0, 0, 0.38)',
            hint: 'rgba(0, 0, 0, 0.38)',
            divider: 'rgba(0, 0, 0, 0.12)',
        },
        background: {
            default: '#ffffff',
            main: '#000000',
            cart:'#ffffff',
        }

    }
}