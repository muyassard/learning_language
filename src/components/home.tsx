import { Container, Grid, Stack, Typography } from '@mui/material';
import { IEntity } from 'modules/dashboard/types';
import { session } from 'services/session';
import { Videoplayer } from './videoplayer';

export const Home: React.FC = () => {
  const myLessons = session.get('lessons');

  return (
    <Stack
      paddingX={{ xs: 2, sm: 3, md: 4 }}
      paddingY={5}
      boxSizing="border-box"
      width="100%"
      height="100vh"
      spacing={2}
      alignItems="start"
      sx={{ overflowX: 'hidden', background: 'linear-gradient(to right bottom, #EBF5FF, #B3F0F0)' }}
    >
      {myLessons ? (
        <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 12, md: 12, lg: 12 }}>
          {myLessons.map((lesson: IEntity.Lesson) => (
            <Grid
              sx={{
                transition: 'transform 0.2s ease-in-out',
                '&:hover': {
                  transform: 'scale(1.05)'
                }
              }}
              item
              xs={12}
              sm={6}
              md={4}
              key={lesson.url}
            >
              <Videoplayer
                key={lesson.title}
                test={lesson.test}
                language={lesson.language}
                title={lesson.title}
                description={lesson.description}
                url={lesson.url}
              />
            </Grid>
          ))}
        </Grid>
      ) : (
        <Container
          maxWidth="xl"
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', md: 'row' },
            alignItems: 'center',
            justifyContent: 'space-around',
            textAlign: 'center'
          }}
        >
          <Typography
            variant="h4"
            sx={{
              marginBottom: { xs: 2, md: 0 },
              fontSize: {
                xs: '1rem', // Adjust the smallest font size here
                sm: '1.5rem',
                md: '2rem',
                lg: '2rem'
              }
            }}
          >
            You can learn many languages. <br /> learn languages ​​easily with uss
          </Typography>
          <img
            style={{ maxWidth: '100%', height: 'auto', width: '500px' }} // Add margin bottom for small screens
            src="/images/lan2.jpg"
            alt="languages"
          />
        </Container>
      )}
    </Stack>
  );
};
