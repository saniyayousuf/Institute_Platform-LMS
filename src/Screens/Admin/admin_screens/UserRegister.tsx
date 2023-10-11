
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import { useState } from 'react';
import { FbAdd, FbGet } from '../../../Config/Firebase/FirebaseMethods';



export default function UserRegister() {
    const [model, setModel] = useState<any>({});


    const fillModel = (key: string, val: any) => {
        model[key] = val;
        setModel({ ...model });
    };

    const userReg = () => {
        
        FbAdd("USERS", model).then((res) => {
            console.log(model)
            console.log(res, "=> User Created Successfully ")
           
        }).catch((err) => {
            console.log(err, "=> User doesn't Created")

        })

    }

    return <>
        <Container className='shadow-md shadow-blue-500/50 rounded-r-lg p-4' maxWidth="sm">
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    mt: 4,
                }}
            >
                <h2 className='font-sans '>User Register</h2>
                <form >
                    <TextField
                        label="Name"
                        name="name"
                        value={model.Name}
                        onChange={(e) => fillModel("Name", e.target.value)}
                        margin="normal"
                        fullWidth
                        required
                    />
                    <TextField
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
                        label="Password"
                        name="password"
                        value={model.Password}
                        onChange={(e) => fillModel("password", e.target.value)}
                        type="password"
                        margin="normal"
                        fullWidth
                        required
                    />
                    <TextField
                        label="CNIC"
                        name="cnic"
                        value={model.CNIC}
                        onChange={(e) => fillModel("cnic", e.target.value)}
                        margin="normal"
                        fullWidth
                        required
                    />
                    <Select
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
                        type="submit"
                        variant="contained"
                        onClick={userReg}
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
}