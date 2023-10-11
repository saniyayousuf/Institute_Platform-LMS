import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { FbAuth, FbLogin } from '../../Config/Firebase/FirebaseMethods';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';


export default function Login() {

  const [model, setModel] = useState<any>({});
  const navigate = useNavigate()
  const fillModel = (key: string, val: any) => {
    model[key] = val;
    setModel({ ...model });
  };
  useEffect(() => {
    FbAuth()
      .then((res) => {

        navigate("/dashboard");
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  let Login = () => {
    console.log(model);
    FbLogin(model)
      .then((res) => {
        console.log(res);
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
          <h2 className='font-sans pe-12 '>Sign In</h2>
          <form className='ps-12' >

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


            <Button
              className='w-75'
              type="submit"
              variant="contained"
              onClick={Login}
              color="primary"
              fullWidth
              sx={{ mt: 3 }}
            >
              Sign In
            </Button>
          </form>
        </Box>
      </Container>
    </>
  )
}