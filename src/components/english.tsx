import { useNavigate } from 'react-router-dom';

import { Button, Grid, Stack, Typography } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

import { Videoplayer } from './videoplayer';
import { LanguageTest } from './test';
import { englishData } from 'data/myLessons';

export const English: React.FC = () => {
  const navigate = useNavigate();

  return (
    <Stack
      paddingX={{ xs: 2, sm: 3, md: 4 }}
      paddingY={5}
      boxSizing="border-box"
      width="100%"
      height="100vh"
      spacing={2}
      alignItems="start"
      sx={{ overflowX: 'hidden', background: 'linear-gradient(to right bottom, #EBF5FF, #B3F0F0)' }}
    >
      <Stack
        width="100%"
        direction={{ lg: 'row', md: 'row', sm: 'row', xs: 'column' }}
        justifyContent="space-around"
        alignItems="center"
        gap={3}
      >
        <Button
          startIcon={<ArrowBackIcon />}
          onClick={() => navigate('/app/dashboard')}
          variant="contained"
          color="info"
        >
          Back
        </Button>
        <Typography
          sx={{
            fontSize: {
              xs: '10px',
              sm: '12px',
              md: '14px',
              lg: '16px'
            }
          }}
          variant="overline"
          textAlign="center"
        >
          A new word is added to the English dictionary every two hours. <br /> This means that approximately 4,000 new
          words appear in the dictionary during the year.
        </Typography>
      </Stack>

      <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 12, md: 12, lg: 12 }}>
        {englishData.map(lesson => (
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
              test={<LanguageTest />}
              language={lesson.language}
              title={lesson.title}
              description={lesson.description}
              url={lesson.url}
            />
          </Grid>
        ))}
      </Grid>
    </Stack>
  );
};
