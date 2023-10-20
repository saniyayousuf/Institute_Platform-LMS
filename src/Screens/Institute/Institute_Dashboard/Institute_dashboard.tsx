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
import BAButton from '../../../Components/BAButton';

// ICONS
import ListIcon from '@mui/icons-material/List';
import DynamicFormIcon from '@mui/icons-material/DynamicForm';
import AppRegistrationIcon from '@mui/icons-material/AppRegistration';
import LogoutIcon from '@mui/icons-material/Logout';
// Screens
import CourseList from '../Institute_screens/CourseList';
import CourseForm from '../Institute_screens/CourseForm';
import AddQuiz from '../Institute_screens/AddQuiz';
import StudentForm from '../Institute_screens/StudentForm';
import StudentList from '../Institute_screens/StudentList';
import CourseDetail from '../Institute_screens/StudentDetail';
import Formcontrol from '../Institute_screens/formControl';


const drawerWidth = 240;
interface Props {
  window?: () => Window;
}

export default function InstitueDashboard(props: Props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const [pagesArr, setPagesArr] = React.useState([
   
    {
      name: "CourseList",
      route: "Course_list",
      icon: <DynamicFormIcon />,
    },

    {
      name: " Quiz Panel",
      route: "Add_quiz",
      icon: <DynamicFormIcon />,
    },
    {
      name: "formcontrol",
      route: "Course_list",
      icon: <DynamicFormIcon />,
    },
    {
      name: "payrol",
      route: "Course_list",
      icon: <DynamicFormIcon />,
    },
    {
      name: "result",
      route: "Course_list",
      icon: <DynamicFormIcon />,
    },
    {
      name: " Student List ",
      route: "student_list",
      icon: <DynamicFormIcon />,
    },
    {
      name: "teacher",
      route: "Course_list",
      icon: <DynamicFormIcon />,
    },
    // {
    //   name: " Student Form ",
    //   route: "student_form",
    //   icon: <DynamicFormIcon />,
    // },
   
  
  ]);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const navigate = useNavigate();

  const openPage = (route: any) => {
    navigate(`/institute-dashboard/${route}`);
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
      <div  className='ps-3  ms-5' >

      <BAButton label={'LOG OUT'} variant={'outlined'} onClick={()=> navigate('/login')}
           
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
          <Typography variant="h6" noWrap  component="div">
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
          <Route path="Course_detail/:id" element={<CourseDetail />} />
          <Route path="Course_Form" element={<CourseForm />} />
          <Route path="Course_Form/:id" element={<CourseForm />} />
          <Route path="Course_list" element={<CourseList />} />
          <Route path="formcontrol" element={<Formcontrol />} />
          <Route path="student_form" element={<StudentForm />} />
          <Route path="student_list" element={<StudentList/>} />
          <Route path="Add_quiz" element={<AddQuiz />} />
         
        </Routes>
      </Box>
    </Box>

  );
}