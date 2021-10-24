import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import Box from "@mui/material/Box";
import DateRangeIcon from "@mui/icons-material/DateRange";
import PeopleIcon from "@mui/icons-material/People";
import * as React from "react";
import {createTheme, ThemeProvider} from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import Container from "@mui/material/Container";
import './projects.css'

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

export default function Projects() {
    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <main>
                <Container sx={{ py: 8 }} maxWidth="md">
                    <Typography variant='h5' marginBottom={2}>История проектов</Typography>
                    <Divider sx={{marginBottom: 2}} />
                    <Typography variant='h6'>Hackathon 2021</Typography>
                    <Typography sx={{marginBottom: 2}}>Front-end Разработчик</Typography>
                    <Box sx={{display: 'flex', marginBottom: 2}}>
                        <DateRangeIcon sx={{marginRight: 2}}/>
                        <Box>
                            <Typography>Дата начала: 02.09.2020</Typography>
                            <Typography>Дата окончания: 02.09.2021</Typography>
                        </Box>
                    </Box>
                    <Box sx={{display: 'flex', alignItems: 'center', marginBottom: 2}}>
                        <PeopleIcon sx={{marginRight: 2}}/>
                        <Typography>Анастасия Новицкая, Дмитрий Пушенко, Владислав Комиссаров, Владислав Никитин, Оксана Щербань</Typography>
                    </Box>
                    <Box className="projects-tags">
                        <Box className='projects-tag'>HTML</Box>
                        <Box className='projects-tag'>HTML</Box>
                        <Box className='projects-tag'>HTML</Box>
                        <Box className='projects-tag'>HTML</Box>
                        <Box className='projects-tag'>HTML</Box>
                        <Box className='projects-tag'>HTML</Box>
                        <Box className='projects-tag'>HTML</Box>
                        <Box className='projects-tag'>HTML</Box>
                        <Box className='projects-tag'>HTML</Box>
                        <Box className='projects-tag'>HTML</Box>
                    </Box>

                    <Divider sx={{marginBottom: 2}} />
                    <Typography variant='h6'>Hackathon 2021</Typography>
                    <Typography sx={{marginBottom: 2}}>Front-end Разработчик</Typography>
                    <Box sx={{display: 'flex', marginBottom: 2}}>
                        <DateRangeIcon sx={{marginRight: 2}}/>
                        <Box>
                            <Typography>Дата начала: 02.09.2020</Typography>
                            <Typography>Дата окончания: 02.09.2021</Typography>
                        </Box>
                    </Box>
                    <Box sx={{display: 'flex', alignItems: 'center', marginBottom: 2}}>
                        <PeopleIcon sx={{marginRight: 2}}/>
                        <Typography>Анастасия Новицкая, Дмитрий Пушенко, Владислав Комиссаров, Владислав Никитин, Оксана Щербань</Typography>
                    </Box>
                    <Box className="projects-tags">
                        <Box className='projects-tag'>HTML</Box>
                        <Box className='projects-tag'>HTML</Box>
                        <Box className='projects-tag'>HTML</Box>
                        <Box className='projects-tag'>HTML</Box>
                        <Box className='projects-tag'>HTML</Box>
                        <Box className='projects-tag'>HTML</Box>
                        <Box className='projects-tag'>HTML</Box>
                        <Box className='projects-tag'>HTML</Box>
                        <Box className='projects-tag'>HTML</Box>
                        <Box className='projects-tag'>HTML</Box>
                    </Box>

                    <Divider sx={{marginBottom: 2}} />
                    <Typography variant='h6'>Hackathon 2021</Typography>
                    <Typography sx={{marginBottom: 2}}>Front-end Разработчик</Typography>
                    <Box sx={{display: 'flex', marginBottom: 2}}>
                        <DateRangeIcon sx={{marginRight: 2}}/>
                        <Box>
                            <Typography>Дата начала: 02.09.2020</Typography>
                            <Typography>Дата окончания: 02.09.2021</Typography>
                        </Box>
                    </Box>
                    <Box sx={{display: 'flex', alignItems: 'center', marginBottom: 2}}>
                        <PeopleIcon sx={{marginRight: 2}}/>
                        <Typography>Анастасия Новицкая, Дмитрий Пушенко, Владислав Комиссаров, Владислав Никитин, Оксана Щербань</Typography>
                    </Box>
                    <Box className="projects-tags">
                        <Box className='projects-tag'>HTML</Box>
                        <Box className='projects-tag'>HTML</Box>
                        <Box className='projects-tag'>HTML</Box>
                        <Box className='projects-tag'>HTML</Box>
                        <Box className='projects-tag'>HTML</Box>
                        <Box className='projects-tag'>HTML</Box>
                        <Box className='projects-tag'>HTML</Box>
                        <Box className='projects-tag'>HTML</Box>
                        <Box className='projects-tag'>HTML</Box>
                        <Box className='projects-tag'>HTML</Box>
                    </Box>

                </Container>
            </main>

        </ThemeProvider>
    );
}