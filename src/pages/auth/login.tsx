import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';

import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import { Button, Container, Grid, IconButton, InputAdornment, Stack, TextField, Typography } from '@mui/material';

import { Login as loginType } from 'modules/auth/loginType';
import { session } from 'services/session';
import { Me } from 'data/me';

import AOS from 'aos';
import 'aos/dist/aos.css';

import { message } from 'antd';

export const Login: React.FC = () => {
  const navigate = useNavigate();

  const form = useForm<loginType>({
    defaultValues: { email: '', password: '' }
  });

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true
    });
    AOS.refresh();
  }, []);

  const { register, handleSubmit, formState } = form;
  const { errors } = formState;
  const [eye, seteye] = useState(false);

  const onSubmit = (data: loginType) => {
    console.log(data);

    try {
      const user = session
        .get('user')
        .find((user: loginType) => user.email === data.email && user.password === data.password);

      if (user !== -1) {
        message.success(`welcome ${user.name} ✋`);
        Me.push(user);
        navigate('/app/dashboard');
      }
    } catch (err) {
      message.error(`you are not registered `);
    }
  };

  const goToRegister = () => {
    Me.shift();
    navigate('/auth/register');
  };

  return (
    <Grid
      alignContent="center"
      sx={{
        height: '100vh',
        width: '100%',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundImage: `url(/images/bgauth.jpg)`
      }}
    >
      <Container data-aos="zoom-in" maxWidth="xs">
        <Typography my={2} variant="h4">
          Login
        </Typography>

        <form noValidate onSubmit={handleSubmit(onSubmit)}>
          <Stack spacing={2}>
            <TextField
              label="Enter email"
              {...register('email', {
                required: 'Email is required',
                pattern: { value: /\S+@\S+\.\S+/, message: 'Invalid email' }
              })}
              error={!!errors.email}
              helperText={errors.email && errors.email.message}
            />
            <TextField
              type={eye ? 'text' : 'password'}
              label="Enter password"
              {...register('password', {
                required: 'Password is required',
                minLength: { value: 4, message: 'Password must be at least 4 characters' }
              })}
              error={!!errors.password}
              helperText={errors.password && errors.password.message}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton onClick={() => seteye(!eye)}>
                      {eye ? <VisibilityOffIcon /> : <VisibilityIcon />}
                    </IconButton>
                  </InputAdornment>
                )
              }}
            />
            <Button onSubmit={handleSubmit(onSubmit)} type="submit" variant="contained">
              login
            </Button>
          </Stack>
        </form>
        <Button onClick={() => goToRegister()}>Go to Register</Button>
      </Container>
    </Grid>
  );
};

export default Login;
