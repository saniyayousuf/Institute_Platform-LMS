import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import { useState } from 'react';
import { fbSignup } from '../../Config/Firebase/FirebaseMethods';
import { useNavigate } from 'react-router-dom';



export default function Signup() {

     const [model, setModel] = useState<any>({});


    const fillModel = (key: string, val: any) => {
        model[key] = val;
        setModel({ ...model });
    };

    const navigate = useNavigate();

  const Signup = () => {
    model.type = "Institute";
    console.log(model)
    fbSignup(model)
      .then((res) => {
        if (model.type == "Admin") {
            navigate("/dashboard");
            console.log("data sent")
        } else {
            navigate("/");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

    return (
        <>
            <Container className='shadow-md shadow-blue-500/50 rounded-r-lg p-4 mt-5' maxWidth="sm">
                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        mt: 4,

                    }}
                >
                    <h2 className='font-sans '>Sign Up</h2>
                    <form className='ps-12' >
                        <TextField
                            className='w-75'
                            label="Name"
                            name="name"
                            value={model.Name}
                            onChange={(e) => fillModel("Name", e.target.value)}
                            margin="normal"
                            fullWidth
                            required
                        />
                        <TextField
                            className='w-75'
                            label="Email"
                            name="email"
                            value={model.Email}
                            onChange={(e) => fillModel("email", e.target.value)}
                            type="email"
                            margin="normal"
                            fullWidth
                            required
                        />
                        <TextField
                            className='w-75'
                            label="Password"
                            name="password"
                            value={model.Password}
                            onChange={(e) => fillModel("password", e.target.value)}
                            type="password"
                            margin="normal"
                            fullWidth
                            required
                        />

                        <Select
                            className='w-75'
                            label="UserType"
                            name="Usertype"
                            value={model.type}
                            onChange={(e) => fillModel("type", e.target.value)}
                            // margin='dense'
                            fullWidth
                            required
                        >
                          
                            <MenuItem value="Student">Student</MenuItem>
                            <MenuItem value="Teacher">Teacher</MenuItem>
                            <MenuItem value="Institute">Institute</MenuItem>
                        </Select>
                        <Button
                            className='w-75'
                            type="submit"
                            variant="contained"
                            onClick={Signup}
                            color="primary"
                            fullWidth
                            sx={{ mt: 3 }}
                        >
                            Register
                        </Button>
                        
                    </form>
                </Box>
            </Container>
        </>
    )
}