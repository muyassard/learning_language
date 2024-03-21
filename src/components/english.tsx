import { Container } from '@mui/material';
import { Videoplayer } from './videoplayer';
import { EnglishTest } from './englishTest';

const url = 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/TearsOfSteel.mp4';

export const English: React.FC = () => {
  return (
    <div>
      <Container maxWidth="xl" sx={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
        <Videoplayer
          test={<EnglishTest />}
          language="english"
          title="lesson1"
          url="https://www.youtube.com/watch?v=MqGzrhHnn5E"
        />
        <Videoplayer
          test={'helloxon'}
          language="english"
          title="lesson2"
          url="https://www.youtube.com/watch?v=LkzEwCeyaZk"
        />
      </Container>
    </div>
  );
};
