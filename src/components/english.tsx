import { Container } from '@mui/material';
import { Videoplayer } from './videoplayer';
import { EnglishTest } from './englishTest';
import { englishData } from 'data/myLessons';

const url = 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/TearsOfSteel.mp4';


export const English: React.FC = () => {
  return (
    <div>
      <Container
        maxWidth="xl"
        sx={{
          display: 'inline-flex',
          gap: '20px',
          flexWrap: 'wrap',
          '@media (max-width: 500px)': {
            justifyContent: 'center'
          }
        }}
      >
        {englishData.map(lesson => (
          <Videoplayer test={<EnglishTest />} language={lesson.language} title={lesson.title} url={lesson.url} />
        ))}
      </Container>
    </div>
  );
};
