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
import EqualizerIcon from '@mui/icons-material/Equalizer';
import DateRangeIcon from '@mui/icons-material/DateRange';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import Divider from '@mui/material/Divider';
import Project from '../../projects/project/Project'

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
            },
        },
    }
);

export default function Worker() {
    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <main>
                <Container sx={{ py: 8 }} maxWidth="md">
                    <Button href="/app/workers" className="worker-btn" size="large" startIcon={<ArrowBackIosIcon />}>
                        Иван Иванов</Button>
                    <Box className="worker-card" marginBottom={10}>
                        <Box>
                            <Typography marginBottom={2}>Front-End разработчик</Typography>

                            <Box sx={{display: 'flex', alignItems: 'center'}}>
                                <EqualizerIcon sx={{marginRight: 2}}/>
                                <Typography>Middle</Typography>
                            </Box>
                            <Box sx={{display: 'flex', alignItems: 'center'}}>
                                <DateRangeIcon sx={{marginRight: 2}}/>
                                <Typography>Дата рождения: 02.03.1984</Typography>
                            </Box>
                            <Box sx={{display: 'flex', alignItems: 'center', marginBottom: 2}}>
                                <AccessTimeIcon sx={{marginRight: 2}}/>
                                <Typography>В компании с 22.02.2019</Typography>
                            </Box>

                            <Typography marginBottom={1}>Контакты:</Typography>
                            <Box sx={{display: 'flex', alignItems: 'center'}}>
                                <PhoneIcon sx={{marginRight: 2}}/>
                                <Typography>+7 (950) 000-00-00</Typography>
                            </Box>
                            <Box sx={{display: 'flex', alignItems: 'center'}}>
                                <EmailOutlinedIcon sx={{marginRight: 2}}/>
                                <Typography>iivanov@company.com</Typography>
                            </Box>
                        </Box>

                        <Box>
                            <Avatar alt="Фото сотрудника" src="https://source.unsplash.com/random" className="worker-avatar"/>
                        </Box>

                    </Box>

                    <Typography variant='h5' marginBottom={2}>Навыки</Typography>
                    <Divider sx={{marginBottom: 2}} />
                    <Box className="worker-tags" marginBottom={10}>
                        <Box className='worker-tag'>HTML</Box>
                        <Box className='worker-tag'>HTML</Box>
                        <Box className='worker-tag'>HTML</Box>
                        <Box className='worker-tag'>HTML</Box>
                        <Box className='worker-tag'>HTML</Box>
                        <Box className='worker-tag'>HTML</Box>
                        <Box className='worker-tag'>HTML</Box>
                        <Box className='worker-tag'>HTML</Box>
                        <Box className='worker-tag'>HTML</Box>
                    </Box>

                    {Project()}
                </Container>
            </main>

        </ThemeProvider>
    );
}
