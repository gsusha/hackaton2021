import * as React from 'react';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useContext, useState } from 'react';
import { MyContext } from "../../contexts/MyContext";


function Login(){

    const {loginUser,isLoggedIn} = useContext(MyContext);

    const initialState = {
        userInfo:{
            name:'',
            password:'',
        },
        errorMsg:'',
        successMsg:'',
    }

    const [state,setState] = useState(initialState);

    // On change input value (name & password)
    const onChangeValue = (e) => {
        setState({
            ...state,
            userInfo:{
                ...state.userInfo,
                [e.target.name]:e.target.value
            }
        });
    }

    const theme = createTheme(
        {
          palette: {
            mode: 'dark',
              primary: {
                  main: '#18A0FB',
                  form: '#36393F',
              },
              background: {
                default: '#282A2E',
              }
          },
        }
    );

    const handleSubmit = async (event) => {
      // event.preventDefault();
      // const data = await loginUser(state.userInfo);
      // if(data.success && data.token){
      //   setState({
      //     ...initialState,
      //   });
      //   localStorage.setItem('loginToken', data.token);
      //   await isLoggedIn();
      // }
      // else{
      //   setState({
      //     ...state,
      //     successMsg:'',
      //     errorMsg:data.message
      //   });
      // }
    };

    let successMsg = '';
    let errorMsg = '';
    if(state.errorMsg){
        errorMsg = <div className="error-msg">{state.errorMsg}</div>;
    }
    if(state.successMsg){
        successMsg = <div className="success-msg">{state.successMsg}</div>;
    }

    return (
      <ThemeProvider theme={theme}>
        <Container component="main" maxWidth="xs">
          <CssBaseline />
          <Box
            sx={{
              marginTop: 8,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              bgcolor: 'primary.form',
              padding: 5,
              borderRadius: 5,
            }}
          >
            <Box
            sx={{
                display: 'flex',
                alignItems: 'center',
            }}
            >
                <LockOutlinedIcon />
                <Typography component="h1" variant="h6" marginLeft={1}>
                    Авторизация
                </Typography>
            </Box>
            <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
              <TextField
                margin="normal"
                required
                fullWidth
                id="login"
                label="Имя пользователя"
                name="login"
                autoComplete="name"
                autoFocus
                variant="standard"
                value={state.userInfo.email}
                onChange={onChangeValue}
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="Пароль"
                type="password"
                id="password"
                autoComplete="current-password"
                variant="standard"
                value={state.userInfo.email}
                onChange={onChangeValue}
              />
              {errorMsg}
              {successMsg}
              <Button
                // type="submit"
                href="/app"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2, color: 'text.primary', boxShadow: 0 }}
              >
                Войти
              </Button>
            </Box>
          </Box>
        </Container>
      </ThemeProvider>
    );
}

export default Login;
