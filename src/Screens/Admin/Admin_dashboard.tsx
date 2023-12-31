import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { Route, Routes, useNavigate } from 'react-router-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import BAButton from '../../Components/BAButton';
// ICONS
import ListIcon from '@mui/icons-material/List';
import DynamicFormIcon from '@mui/icons-material/DynamicForm';
import AppRegistrationIcon from '@mui/icons-material/AppRegistration';
import LogoutIcon from '@mui/icons-material/Logout';
// Screens
import UserRegister from './admin_screens/UserRegister';
import InstituteList from './admin_screens/InstituteList';
import InstituteForm from './admin_screens/InstituteForm';


const drawerWidth = 240;
interface Props {
  window?: () => Window;
}

export default function AdminDashboard(props: Props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const [pagesArr, setPagesArr] = React.useState([
    {
      name: "Institute List",
      route: "Institute_list",
      icon: <ListIcon />,
    },

    // {
    //   name: "User Registration",
    //   route: "user_reg",
    //   icon: <AppRegistrationIcon />,
    // },
    // {
    //   // name: "Institute Form",
    //   route: "Institute_form",
    //   // icon: <DynamicFormIcon />,
    // }

  ]);
// const routescreen = (route:string)=>{
//   navigate(`/admin/${route}`)
// }
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const navigate = useNavigate();

  const openPage = (route: any) => {
    navigate(`/admin-dashboard/${route}`);
  };

  const drawer = (
    <div>
      <Toolbar />
      <Divider />
      <List>
        {pagesArr.map((x, index) => (
          <ListItem key={index} disablePadding>
            <ListItemButton onClick={() => openPage(x.route)}>
              <ListItemIcon>{x.icon ? x.icon : <IconButton />}</ListItemIcon>
              <ListItemText primary={x.name} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <div className='ps-3  ms-5' >

        <BAButton label={'LOG OUT'} variant={'outlined'} onClick={() => navigate('/login')}

        />
      </div>
    </div>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (

    <Box sx={{ display: 'flex' }}>

      <CssBaseline />

      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
        }}
      >
        <Toolbar>

          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            {/* <MenuIcon /> */}
          </IconButton>
          <Typography variant="h6" noWrap component="div">
            Institute Learning Management System
          </Typography>
          <Typography variant="h3" noWrap className='ms-5' component="div">

          </Typography>
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true,
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: 'none', sm: 'block' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
      >
        <Toolbar />
        <Routes>
          <Route path="Institute_form" element={<InstituteForm />} />
          <Route path="Institute_form/:id" element={<InstituteForm />} />
          <Route path="Institute_list/*" element={<InstituteList />} />
          <Route path="user_reg" element={<UserRegister />} />

        </Routes>
      </Box>
    </Box>

  );
}