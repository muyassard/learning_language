import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { styled, useTheme, Theme, CSSObject } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MuiDrawer from '@mui/material/Drawer';
import MuiAppBar, { AppBarProps as MuiAppBarProps } from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import { Button, Tooltip } from '@mui/material';

import HomeIcon from '@mui/icons-material/Home';
import ListItemIcon from '@mui/material/ListItemIcon';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';

import { session } from 'services/session';
import { English } from 'components/english';
import { Home, Russian } from 'components';
import { Me } from 'data/me';
import Languages from 'components/languages';

const drawerWidth = 150;

const openedMixin = (theme: Theme): CSSObject => ({
  width: drawerWidth,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen
  }),
  overflowX: 'hidden'
});

const closedMixin = (theme: Theme): CSSObject => ({
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen
  }),
  overflowX: 'hidden',
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up('sm')]: {
    width: `calc(${theme.spacing(8)} + 1px)`
  }
});

interface AppBarProps extends MuiAppBarProps {
  open?: boolean;
}

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: prop => prop !== 'open'
})<AppBarProps>(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen
    })
  })
}));

const Drawer = styled(MuiDrawer, { shouldForwardProp: prop => prop !== 'open' })(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: 'nowrap',
  boxSizing: 'border-box',
  ...(open && {
    ...openedMixin(theme),
    '& .MuiDrawer-paper': openedMixin(theme)
  }),
  ...(!open && {
    ...closedMixin(theme),
    '& .MuiDrawer-paper': closedMixin(theme)
  })
}));

const Dashboard: React.FC = () => {
  const navigate = useNavigate();

  const theme = useTheme();
  const [open, setOpen] = useState(false);
  const [menuData, setmenuData] = useState('languages');

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="fixed" open={open}>
        <Toolbar className="navbar">
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={() => setOpen(true)}
            edge="start"
            sx={{
              marginRight: 5,
              ...(open && { display: 'none' })
            }}
          >
            <MenuIcon />
          </IconButton>
          <Typography>{Me[0].name}</Typography>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}></Typography>
          <Button
            color="inherit"
            variant="text"
            onClick={() => {
              Me.shift();

              session.removeAll();
              navigate('/auth/register');
            }}
          >
            Remove all
          </Button>

          <Button
            onClick={() => {
              Me.shift();
              navigate('/auth/login');
            }}
            color="inherit"
            variant="text"
          >
            Logout
          </Button>
        </Toolbar>
      </AppBar>
      <Drawer variant="permanent" open={open}>
        <Typography display="flex" alignItems="center" justifyContent="flex-end" padding="20px">
          <IconButton onClick={() => setOpen(false)}>{theme.direction === 'rtl' ? '' : <ChevronLeftIcon />}</IconButton>
        </Typography>

        <List>
          <ListItem disablePadding onClick={() => setmenuData('home')}>
            <ListItemButton
              sx={{
                minHeight: 48,
                justifyContent: open ? 'initial' : 'center'
              }}
            >
              <ListItemIcon
                sx={{
                  minWidth: 0,
                  mr: open ? 3 : 'auto',
                  justifyContent: 'center',
                  border: '50%'
                }}
              >
                <Tooltip title="home" placement="right">
                  <HomeIcon />
                </Tooltip>
              </ListItemIcon>
              <ListItemText primary="home" sx={{ opacity: open ? 1 : 0 }} />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding onClick={() => setmenuData('languages')}>
            <ListItemButton
              sx={{
                minHeight: 48,
                justifyContent: open ? 'initial' : 'center'
              }}
            >
              <ListItemIcon
                sx={{
                  minWidth: 0,
                  mr: open ? 3 : 'auto',
                  justifyContent: 'center',
                  border: '50%'
                }}
              >
                <Tooltip title="Languages" placement="right">
                  <img width={25} src="/images/languages.png" alt="languages" />
                </Tooltip>
              </ListItemIcon>
              <ListItemText primary="Languages" sx={{ opacity: open ? 1 : 0 }} />
            </ListItemButton>
          </ListItem>
        </List>
      </Drawer>
      <Box component="main" sx={{ flexGrow: 1, paddingLeft: 7, paddingBlockStart: 3, height: '96.5vh' }}>
        {menuData === 'home' && <Home />}
        {menuData === 'languages' && <Languages />}
      </Box>
    </Box>
  );
};

export default Dashboard;
