import * as React from 'react';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import ListSubheader from '@mui/material/ListSubheader';
import PeopleIcon from '@mui/icons-material/People';
import LogoutIcon from '@mui/icons-material/Logout';
import AssignmentIcon from '@mui/icons-material/Assignment';
import SettingsIcon from '@mui/icons-material/Settings';
import ArchitectureIcon from '@mui/icons-material/Architecture';
import PersonIcon from '@mui/icons-material/Person';
import { Link } from "react-router-dom";

export const mainListItems = (
    <div>
        <ListItem button component={Link} to="/app/workers" className="list-btn">
            <ListItemIcon>
                <PeopleIcon className="list-icon" />
            </ListItemIcon>
            <ListItemText primary="Все сотрудники" />
        </ListItem>
        <ListItem button component={Link} to="/app/worker" className="list-btn">
            <ListItemIcon>
                <PersonIcon className="list-icon" />
            </ListItemIcon>
            <ListItemText primary="Сотрудник" />
        </ListItem>
        <ListItem button component={Link} to="/app/projects" className="list-btn">
            <ListItemIcon>
                <ArchitectureIcon className="list-icon" />
            </ListItemIcon>
            <ListItemText primary="Все проекты" />
        </ListItem>
        <ListItem button component={Link} to="/app/project" className="list-btn">
            <ListItemIcon>
                <SettingsIcon className="list-icon" />
            </ListItemIcon>
            <ListItemText primary="Проект" />
        </ListItem>
        <ListItem button component={Link} to="/" className="list-btn">
            <ListItemIcon>
                <LogoutIcon className="list-icon" />
            </ListItemIcon>
            <ListItemText primary="Выйти" />
        </ListItem>
    </div>
);

export const secondaryListItems = (
    <div>
        <ListSubheader inset>Secondary</ListSubheader>
        <ListItem button>
            <ListItemIcon>
                <AssignmentIcon />
            </ListItemIcon>
            <ListItemText primary="Year-end sale" />
        </ListItem>
    </div>
);
