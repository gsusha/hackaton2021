import * as React from 'react';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';


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

export default function Auth() {
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    // eslint-disable-next-line no-console
    console.log({
      email: data.get('email'),
      password: data.get('password'),
    });
  };

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
          <Box action = "auth.php" component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="login"
              label="Email"
              name="login"
              autoComplete="email"
              autoFocus
              variant="standard"
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
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2, color: 'text.primary' }}
            >
              Войти
            </Button>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}
