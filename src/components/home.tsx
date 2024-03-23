import {  Container, Typography } from '@mui/material';
import { IEntity } from 'modules/dashboard/types';
import { session } from 'services/session';
import { Videoplayer } from './videoplayer';

export const Home: React.FC = () => {
  const myLessons = session.get('lesson');
  console.log();

  return (
    <Container maxWidth="xl" sx={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
      {myLessons ? (
        myLessons.map((lesson: IEntity.Lesson) => (
          <div  key={lesson.title}>
            <Videoplayer test={lesson.test} language={lesson.language} title={lesson.title} url={lesson.url} />
          </div>
        ))
      ) : (
        <Container maxWidth="xl" sx={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}>
          <Typography variant="h5"> You have no tutorials viewed yet</Typography>
        </Container>
      )}
    </Container>
  );
};
