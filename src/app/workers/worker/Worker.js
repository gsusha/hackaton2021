import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import {Avatar} from "@mui/material";
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import './worker.css';

const theme = createTheme(
    {
        palette: {
            mode: 'dark',
            primary: {
                main: '#18A0FB',
            },
            other: {
                border: '#7C7F85',
            },
            background: {
                default: '#282A2E',
                paper: '#36393F',
            }
        },
    }
);

export default function Worker() {
    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <main>
                <Container sx={{ py: 8 }} maxWidth="md">
                    <Button size="large" startIcon={<ArrowBackIosIcon />} sx={{
                       color: 'white',
                       fontSize: '22px',
                       marginBottom: 3,
                       textTransform: 'capitalize'
                    }}>
                        Иван Иванов</Button>
                    <Box className="column">
                        {/*<Box>*/}
                        {/*    <Avatar alt="Фото сотрудника" src="https://source.unsplash.com/random" className="avatar"/>*/}
                        {/*</Box>*/}

                        <Typography>Front-End разработчик</Typography>
                        


                    </Box>
                </Container>
            </main>

        </ThemeProvider>
    );
}
