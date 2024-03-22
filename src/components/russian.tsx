import { Container } from '@mui/material';
import { Videoplayer } from './videoplayer';

const language = 'russian';

export const Russian: React.FC = () => {
  return (
    <div>
      <Container maxWidth="xl" sx={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
        <Videoplayer
          test={'russion test1'}
          language={language}
          title="lesson1"
          url="https://www.youtube.com/watch?v=wUHzV6BeQlo"
        />
        <Videoplayer
          test={'russion test2'}
          language={language}
          title="lesson2"
          url="https://www.youtube.com/watch?v=92Fqov_wB2U"
        />
        <Videoplayer
          test={'russion test3'}
          language={language}
          title="lesson3"
          url="https://www.youtube.com/watch?v=GZgEr1vcsQA"
        />
        <Videoplayer
          test={'russion test4'}
          language={language}
          title="lesson3"
          url="https://www.youtube.com/watch?v=_0DOKakFWcY"
        />
      </Container>
    </div>
  );
};
