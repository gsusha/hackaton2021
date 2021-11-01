import * as React from 'react';
import { styled, createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import MuiDrawer from '@mui/material/Drawer';
import Box from '@mui/material/Box';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import { mainListItems, secondaryListItems } from './listItems';
import {Avatar} from "@mui/material";
import './App.css';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Auth from "./auth/Auth";
import Worker from "./workers/worker/Worker";
import Projects from "./projects/Projects";
import Project from "./projects/project/Project";
import { Actions } from "../contexts/Actions";
import { Provider } from "../contexts/Context";



const drawerWidth = 240;

const AppBar = styled(MuiAppBar, {
    shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    ...(open && {
        marginLeft: drawerWidth,
        width: `calc(100% - ${drawerWidth}px)`,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    }),
}));

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
    ({ theme, open }) => ({
        '& .MuiDrawer-paper': {
            position: 'relative',
            whiteSpace: 'nowrap',
            width: drawerWidth,
            transition: theme.transitions.create('width', {
                easing: theme.transitions.easing.sharp,
                duration: theme.transitions.duration.enteringScreen,
            }),
            boxSizing: 'border-box',
            ...(!open && {
                overflowX: 'hidden',
                transition: theme.transitions.create('width', {
                    easing: theme.transitions.easing.sharp,
                    duration: theme.transitions.duration.leavingScreen,
                }),
                width: theme.spacing(7),
                [theme.breakpoints.up('sm')]: {
                    width: theme.spacing(9),
                },
            }),
        },
        '.info': {
            ...(!open&& {
                display: 'none',
            }),
        }
    }),
);

const mdTheme = createTheme(
    {
        palette: {
            mode: 'dark',
            primary: {
                main: '#18A0FB',
            },
            background: {
                default: '#282A2E',
                paper: '#36393F'
            }
        },
    }
);

function DashboardContent() {
    const [open, setOpen] = React.useState(true);
    const toggleDrawer = () => {
        setOpen(!open);
    };

    return (
        <Router>
            <Switch>
                <Route path="/app">
                    <ThemeProvider theme={mdTheme}>
                        <Box sx={{ display: 'flex'}}>
                            <CssBaseline />
                            <AppBar position="absolute" open={open}>
                                <Toolbar
                                    sx={{
                                        pr: '24px', // keep right padding when drawer closed
                                        bgcolor: 'background.paper',
                                    }}
                                >
                                    <IconButton
                                        edge="start"
                                        color="inherit"
                                        aria-label="open drawer"
                                        onClick={toggleDrawer}
                                        sx={{
                                            marginRight: '36px',
                                            ...(open && { display: 'none' }),
                                        }}
                                    >
                                        <MenuIcon />
                                    </IconButton>
                                    <Typography
                                        component="h1"
                                        variant="h6"
                                        color="inherit"
                                        noWrap
                                        sx={{ flexGrow: 1 }}
                                    >
                                        Система управления сотрудниками
                                    </Typography>
                                </Toolbar>
                            </AppBar>
                            <Drawer variant="permanent" open={open}>
                                <Toolbar
                                    sx={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'flex-end',
                                        px: [1],
                                    }}
                                >
                                    <IconButton onClick={toggleDrawer}>
                                        <ChevronLeftIcon />
                                    </IconButton>
                                </Toolbar>
                                <Box className='info' sx={{display: 'flex', flexDirection: 'column', alignItems: 'center', marginBottom: 3}}>
                                    <Avatar alt="User" src="https://source.unsplash.com/random" className="avatar"/>
                                    <Typography variant='subtitle1' marginBottom={-1}>Катя Иванова</Typography>
                                    <Typography variant='subtitle1'>Менеджер проектов</Typography>
                                </Box>
                                <Divider />
                                <List>{mainListItems}</List>
                                <Divider />
                                {/*<List>{secondaryListItems}</List>*/}
                            </Drawer>
                            <Box
                                component="main"
                                sx={{
                                    backgroundColor: (theme) =>
                                        theme.palette.mode === 'light'
                                            ? theme.palette.grey[100]
                                            : theme.palette.grey[900],
                                    flexGrow: 1,
                                    height: '100vh',
                                    overflow: 'auto',
                                }}
                            >
                                <Toolbar />

                                <Route path="/app/auth">
                                    <Auth />
                                </Route>
                                <Route path="/app/workers">
                                    <Workers />
                                </Route>
                                <Route path="/app/worker">
                                    <Worker />
                                </Route>
                                <Route path="/app/projects">
                                    <Projects />
                                </Route>
                                <Route path="/app/project">
                                    <Project />
                                </Route>
                            </Box>
                        </Box>
                    </ThemeProvider>
                </Route>
                <Route path="/">
                    <div>
                        <Auth />
                    </div>
                </Route>
            </Switch>
        </Router>
    );
}

export default function App() {
    return <DashboardContent />;
}
