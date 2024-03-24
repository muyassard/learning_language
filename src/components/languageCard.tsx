import { Avatar, Button, Card, CardActionArea, CardActions, CardContent, Stack, Typography } from '@mui/material';
import { IEntity } from 'modules/dashboard/types';
import React from 'react';
import { useNavigate } from 'react-router-dom';

const LanguageCard: React.FC<IEntity.LanguageCard> = ({ ...language }) => {
  const navigate = useNavigate();

  return (
    <Card sx={{ maxWidth: 350, padding: 1, marginTop: '20px', height: { xl: 220 } }}>
      <CardActionArea>
        <CardContent style={{ display: 'flex', gap: '15px' }}>
          <Stack direction="column" spacing={1} justifyContent="space-around">
            <Avatar
              alt="Remy Sharp"
              src={language.imgUrl}
              sx={{
                width: { xs: 40, sm: 56, md: 64, lg: 72 },
                height: { xs: 40, sm: 56, md: 64, lg: 72 }
              }}
            />
            <Typography gutterBottom variant="h6" component="div">
              {language.lan}
            </Typography>
          </Stack>
          <Typography
            sx={{
              fontSize: {
                xs: '12px',
                sm: '12px',
                md: '14px',
                lg: '16px'
              }
            }}
            paddingLeft={2}
            variant="body2"
            color="text.secondary"
          >
            {language.description}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button onClick={() => navigate(language.navigate)}>Open Lesson</Button>
      </CardActions>
    </Card>
  );
};

export default LanguageCard;
