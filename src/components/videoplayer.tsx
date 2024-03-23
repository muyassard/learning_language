import {
  Box,
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  Chip,
  Container,
  Drawer,
  Typography
} from '@mui/material';
import { Types } from 'modules/dashboard';
import { useState } from 'react';
import ReactPlayer from 'react-player';
import { session } from 'services/session';

export const Videoplayer: React.FC<Types.IEntity.Lesson> = ({ ...lessonData }) => {
  const [videoStatus, setVideoStatus] = useState('progress');
  const [remainingTime, setRemainingTime] = useState<number | null>(null);
  const [videoDuration, setVideoDuration] = useState(0);
  const [open, setOpen] = useState(false);

  const handleProgress = (state: { playedSeconds: number }) => {
    const { playedSeconds } = state;
    const remainingSeconds = videoDuration - playedSeconds;
    const remainingMinutes = Math.floor(remainingSeconds / 60);
    setRemainingTime(remainingMinutes);
  };

  const onEnded = () => {
    setVideoStatus('end');
    session.add('lesson', lessonData);
  };

  return (
    <Container sx={{ display: 'contents' }}>
      <Drawer open={open} onClose={() => setOpen(false)}>
        <Box sx={{ width: 250, paddingY: 10, paddingX: 1 }} onClick={() => setOpen(false)}>
          <Typography>{lessonData.test} </Typography>
        </Box>
      </Drawer>
      <Card sx={{ maxWidth: '90%' }}>
        <CardActionArea>
          <ReactPlayer
            width="100%"
            height="auto"
            url={lessonData.url}
            muted={true}
            controls={true}
            onProgress={handleProgress}
            onDuration={state => {
              setVideoDuration(state);
            }}
            onEnded={onEnded}
          />
          <CardContent>
            <Typography gutterBottom variant="h6" component="div">
              {remainingTime !== null && <p>Remaining time: {remainingTime} minutes</p>}
            </Typography>
            <Typography gutterBottom variant="h6" component="div">
              {lessonData.title}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Try this test to strengthen your knowledge 👇
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button onClick={() => setOpen(true)}>Open Test</Button>
        </CardActions>
        <CardActions>
          {videoStatus === 'end' && <Chip label="video fully viewed" color="primary" variant="outlined" />}
        </CardActions>
      </Card>
    </Container>
  );
};
