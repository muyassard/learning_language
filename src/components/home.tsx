import { Container, Grid, Stack, Typography } from '@mui/material';
import { IEntity } from 'modules/dashboard/types';
import { session } from 'services/session';
import { Videoplayer } from './videoplayer';

export const Home: React.FC = () => {
  const myLessons = session.get('lessons');

  return (
    <Stack width="100%" height="100%" spacing={2} alignItems="start" sx={{ overflowX: 'hidden', marginTop:'100px' }}>
      {myLessons ? (
        <Grid
          paddingInlineStart={2}
          container
          paddingX={{ xs: 2, sm: 3, md: 4 }}
          sx={{
            height: '97vh',
            width: '100%',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            backgroundImage: `url(/images/bgauth.jpg)`
          }}
          spacing={{ xs: 2, md: 3 }}
          columns={{ xs: 4, sm: 12, md: 12, lg: 12 }}
        >
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
            justifyContent: 'space-around'
          }}
        >
          <Typography
            variant="h4"
            sx={{
              marginBottom: { xs: 2, md: 0 },
              fontSize: {
                xs: '1rem',
                sm: '1.5rem',
                md: '2rem',
                lg: '2rem'
              }
            }}
          >
            You can learn many languages. <br /> learn languages ​​easily with uss
          </Typography>
          <img style={{ maxWidth: '100%', height: 'auto', width: '500px' }} src="/images/lan2.jpg" alt="languages" />
        </Container>
      )}
    </Stack>
  );
};
