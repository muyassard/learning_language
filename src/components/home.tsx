import { Box, Typography } from '@mui/material';
import { IEntity } from 'modules/dashboard/types';
import { session } from 'services/session';
import { Videoplayer } from './videoplayer';

export const Home: React.FC = () => {
  const myLessons = session.get('lesson');
  console.log();

  return (
    <Box height={100}>
      {myLessons ? (
        myLessons.map((lesson: IEntity.Lesson) => (
          <div className="">
            <Videoplayer test={lesson.test} language={lesson.language} title={lesson.title} url={lesson.url} />
          </div>
        ))
      ) : (
        <Typography> You have no tutorials viewed yet</Typography>
      )}
    </Box>
  );
};
