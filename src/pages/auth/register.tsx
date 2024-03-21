import { useState } from 'react';

import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';

import { Alert, Button, Container, IconButton, InputAdornment, Stack, TextField, Typography } from '@mui/material';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import { Types } from 'modules/auth/';
import { session } from 'services/session';

export const Register: React.FC = () => {
  const navigate = useNavigate();
  const [eye, seteye] = useState(false);

  const form = useForm<Types.Login>({
    defaultValues: { email: '', password: '', name: '' }
  });

  const { register, handleSubmit, formState } = form;
  const { errors } = formState;

  const onSubmit = (data: Types.Login) => {
    session.add('user', data);
    console.log(data);
    <Alert variant="filled" severity="success">
      welcome {session.get('user').name} ✋
    </Alert>;

    console.log('welcome');
    setTimeout(() => {
      navigate('/app/dashboard');
    }, 1000);
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
            type="name"
            {...register('name', { required: 'enter name' })}
            error={!!errors.email}
            helperText={errors.name?.message}
          />

          <TextField
            label="enter email"
            type="email"
            {...register('email', { required: 'enter email' })}
            error={!!errors.email}
            helperText={errors.email?.message}
          />
          <TextField
            type={eye ? 'text' : 'password'}
            label="enter password"
            {...register('password', { required: 'enter password' })}
            error={!!errors.password}
            helperText={errors.password?.message}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton onClick={() => seteye(!eye)}>
                    {eye ? <VisibilityIcon /> : <VisibilityOffIcon />}
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
