import {createMuiTheme} from '@material-ui/core';

const theme = createMuiTheme({
    overrides: {
      MuiButton: {
        text: {
          backgroundColor: '#F68080',
          borderRadius: 3,
          border: 0,
          color: 'white',
          height: 30,
          padding: '0 30px',
          margin: '20px',
          boxShadow: '0 3px 5px 2px rgba(255, 105, 135, 0.3)',
          fontFamily: 'Poppins',
          fontWeight: 700,
          fontSize: 14,
          '&:hover': {
            backgroundColor: '#FFDCDC'
          }
        },
      },
      MuiBottomNavigation: {
        root: {
            backgroundColor: '#FFAFA4',
        }
      },
      MuiBottomNavigationAction: {
        root: {
            color: '#000000',
        },
        iconOnly: {
            color: '#FF0000'
        },
        wrapper: {
            color: '#FFFFFF ',
        }
      },
      MuiDialogActions: {
        action: {
          color: '#FFFFFF'
        },
      }
    },
    palette: {
        primary: {
          main: '#F68080',
          light: '#FFDCDC',
          contrastText:'#FFFFFF'
        },
        secondary: {
            main: '#FFFFFF',
            contrastText: '#F68080',
        },
    },
    typography: {
        useNextVariants: true,
        h1: {
            fontFamily: 'Poppins',
            fontWeight: 700,
            color: '#000000',
            fontSize: 44,
            marginBottom: 20
        },
        h2: {
            fontFamily: 'Poppins',
            fontWeight: 700,
            color: '#FFFFFF',
            fontSize: 48,
            margin: 0
        },
        body1: {
            fontFamily: 'Poppins',
            // color: '#F68080',
            color: '#FFFFFF',
            fontSize: 18,
        },
    },
});

export default theme;