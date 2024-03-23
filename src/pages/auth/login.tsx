import { useState } from 'react';
import { message } from 'antd';

import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import { Button, Container, IconButton, InputAdornment, Stack, TextField, Typography } from '@mui/material';
import { useForm } from 'react-hook-form';
import { Login as loginType } from 'modules/auth/loginType';
import { Link, useNavigate } from 'react-router-dom';
import { session } from 'services/session';
import { Me } from 'data/me';

export const Login: React.FC = () => {
  const navigate = useNavigate();

  const form = useForm<loginType>({
    defaultValues: { email: '', password: '' }
  });

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
    <Container maxWidth="xs">
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
  );
};

export default Login;
