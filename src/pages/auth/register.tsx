import { useState } from 'react';
import * as yup from 'yup';

import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import { message } from 'antd';

import { Button, Container, IconButton, InputAdornment, Stack, TextField, Typography } from '@mui/material';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import { Types } from 'modules/auth/';
import { session } from 'services/session';
import { Me } from 'data/me';
import { Login, User } from 'modules/auth/loginType';

const schema = yup.object().shape({
  name: yup.string().required('Name is required'),
  email: yup.string().email('Invalid email').required('Email is required'),
  password: yup.string().required('Password is required').min(6, 'Password must be at least 6 characters')
});

export const Register: React.FC = () => {
  const navigate = useNavigate();
  const [eye, seteye] = useState(false);

  const form = useForm<Types.Login>({
    defaultValues: { email: '', password: '', name: '' }
  });

  const { register, handleSubmit, formState } = form;
  const { errors } = formState;

  const onSubmit = (data: Types.Login) => {
    try {
      const user = session.get('user').find((user: Login) => user.email === data.email);
      if (user) {
        message.error(`you have already registered ${data.name} `);
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
    <Container maxWidth="xs">
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
            error={!!errors.email}
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
  );
};

export default Register;
