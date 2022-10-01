import { createTheme, CssBaseline, ThemeProvider } from '@mui/material';
import React from 'react';
import Mobile from './components/mobile';

function App() {
    const theme = createTheme({
        typography: {
            button: {
                textTransform: 'none'
            }
        },
        palette: {
            primary: {
                main: '#171725',
                contrastText: '#fff'
            },
            secondary: {
                main: '#0062FF'
            }
        }
    });

    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <Mobile />
        </ThemeProvider>
    );
}

export default App;
