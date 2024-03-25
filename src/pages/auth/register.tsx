import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';

import { Login } from 'modules/auth/loginType';
import { session } from 'services/session';
import { Me } from 'data/me';
import { Types } from 'modules/auth/';

import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import { Button, Container, Grid, IconButton, InputAdornment, Stack, TextField, Typography } from '@mui/material';

import AOS from 'aos';
import 'aos/dist/aos.css';

import { message } from 'antd';

export const Register: React.FC = () => {
  const navigate = useNavigate();
  const [eye, seteye] = useState(false);

  const form = useForm<Types.Login>({
    defaultValues: { email: '', password: '', name: '' }
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

  const onSubmit = (data: Types.Login) => {
    const users = session.get('user');
    try {
      if (users) {
        const user = users.find((user: Login) => user.email === data.email && user.password === data.password);
        if (!user) {
          session.add('user', data);
          message.success(`welcome ${data.name} ✋`);
          console.log(Me);

          setTimeout(() => {
            // navigate('/app/dashboard');
            navigate('/auth/login');
          }, 1000);
        } else {
          message.error(`you have already registered ${data.name} `);
        }
      } else {
        session.add('user', data);
        message.success(`welcome ${data.name} ✋`);
        console.log(Me);

        setTimeout(() => {
          // navigate('/app/dashboard');
          navigate('/auth/login');
        }, 1000);
      }
    } catch (err) {
      console.log(err);
    }
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
          Register
        </Typography>
        <form noValidate onSubmit={handleSubmit(onSubmit)}>
          <Stack spacing={2}>
            <TextField
              label="enter name"
              {...register('name', {
                required: 'Name is required',
                minLength: { value: 3, message: 'minimum length 3' }
              })}
              error={!!errors.name}
              helperText={errors.name?.message}
            />

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
              Register
            </Button>
          </Stack>
        </form>
        <Button>
          <Link to="/auth/login">Go to Login</Link>
        </Button>
      </Container>
    </Grid>
  );
};

export default Register;
