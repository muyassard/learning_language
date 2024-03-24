import { Container, Typography } from '@mui/material';
import { IEntity } from 'modules/dashboard/types';
import { session } from 'services/session';
import { Videoplayer } from './videoplayer';

export const Home: React.FC = () => {
  const myLessons = session.get('lesson');
  console.log(myLessons);

  return (
    <Container maxWidth="xl" sx={{ display: 'flex', gap: '10px', flexWrap: 'wrap', paddingBlockStart: '60px' }}>
      {myLessons ? (
        myLessons.map((lesson: IEntity.Lesson) => (
          <div key={lesson.title}>
            <Videoplayer
              description={lesson.description}
              test={lesson.test}
              language={lesson.language}
              title={lesson.title}
              url={lesson.url}
            />
          </div>
        ))
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
    </Container>
  );
};
