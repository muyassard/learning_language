import { Container } from '@mui/material';
import { Videoplayer } from './videoplayer';
import { EnglishTest } from './englishTest';

const url = 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/TearsOfSteel.mp4';

const language = 'english';

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
        {' '}
        <Videoplayer
          test={<EnglishTest />}
          language={language}
          title="lesson1"
          url="https://www.youtube.com/watch?v=MqGzrhHnn5E"
        />
        <Videoplayer
          test={<EnglishTest />}
          language={language}
          title="lesson2"
          url="https://www.youtube.com/watch?v=LkzEwCeyaZk"
        />
        <Videoplayer
          test={<EnglishTest />}
          language={language}
          title="lesson3"
          url="https://www.youtube.com/watch?v=k3rDBN2it-c&t=7s"
        />
        <Videoplayer
          test={<EnglishTest />}
          language={language}
          title="lesson4"
          url="https://www.youtube.com/watch?v=k3rDBN2it-c&t=7s"
        />
      </Container>
    </div>
  );
};
