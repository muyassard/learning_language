import { Container } from '@mui/material';
import { Videoplayer } from './videoplayer';
import { EnglishTest } from './englishTest';
import { englishData } from 'data/myLessons';

export const English: React.FC = () => {
  return (
    <div>
      <Container
        maxWidth="xl"
        sx={{
          display: 'inline-flex',
          gap: '20px',
          flexWrap: 'wrap'
        }}
      >
        {englishData.map(lesson => (
          <Videoplayer
            key={lesson.title}
            test={<EnglishTest />}
            language={lesson.language}
            title={lesson.title}
            url={lesson.url}
          />
        ))}
      </Container>
    </div>
  );
};
