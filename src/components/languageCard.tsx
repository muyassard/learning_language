import { Avatar, Card, CardContent, Stack, Tooltip, Typography } from '@mui/material';
import { IEntity } from 'modules/dashboard/types';
import React from 'react';
import { useNavigate } from 'react-router-dom';

const LanguageCard: React.FC<IEntity.LanguageCard> = ({ ...language }) => {
  const navigate = useNavigate();

  return (
    <Card
      onClick={() => navigate(language.navigate)}
      sx={{ maxWidth: 350, padding: 1, marginTop: '20px', cursor: 'pointer' }}
    >
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
        {/* <Tooltip title={window.innerWidth < 768 && language.description }> */}
        <Typography
          sx={{
            fontSize: { xs: '12px', sm: '12px', md: '14px', lg: '16px' },
            overflow: 'hidden',
            display: '-webkit-box',
            WebkitBoxOrient: 'vertical',
            WebkitLineClamp: 6
          }}
        >
          {language.description}
        </Typography>
        {/* </Tooltip> */}
      </CardContent>
    </Card>
  );
};

export default LanguageCard;
