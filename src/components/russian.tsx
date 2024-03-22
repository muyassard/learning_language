import { Container } from '@mui/material';
import { Videoplayer } from './videoplayer';
import { russianData } from 'data/myLessons';

export const Russian: React.FC = () => {
  return (
    <div>
      <Container maxWidth="xl" sx={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
        {russianData.map(lesson => (
          <Videoplayer
            key={lesson.title}
            test={lesson.test}
            language={lesson.language}
            title={lesson.title}
            url={lesson.url}
          />
        ))}
      </Container>
    </div>
  );
};
