import { Container, Grid } from '@mui/material';
import { languageData } from 'data/myLessons';
import React from 'react';
import LanguageCard from './languageCard';

const Languages: React.FC = () => {
  return (
    <Container
      className="lan"
      sx={{
        display: 'flex',
        margin: '0px',
        flexWrap: 'wrap',
        height: '100vh',
        background: 'linear-gradient(to right bottom, #EBF5FF, #B3F0F0)'
      }}
    >
      <Grid container alignContent="flex-start" spacing={3} sx={{ marginTop: '50px' }}>
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
