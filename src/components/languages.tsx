import { Container, Grid } from '@mui/material';
import { languageData } from 'data/myLessons';
import React from 'react';
import LanguageCard from './languageCard';

const Languages: React.FC = () => {
  return (
    <Container
      maxWidth="xl"
      sx={{
        display: 'flex',
        gap: '10px',
        flexWrap: 'wrap',
        height: '100%',
        background: 'linear-gradient(to right bottom, #EBF5FF, #B3F0F0)'
      }}
    >
      <Grid container spacing={5} sx={{ marginTop: '20px' }}>
        {languageData.map(language => (
          <Grid item xs={12} sm={6} md={4} key={language.lan}>
            <LanguageCard
              navigate={language.navigate}
              imgUrl={language.imgUrl}
              description={language.description}
              lan={language.lan}
            />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Languages;
