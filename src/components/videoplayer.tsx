import {
  Backdrop,
  Box,
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  Chip,
  Container,
  Drawer,
  Fade,
  Modal,
  Typography
} from '@mui/material';
import { Types } from 'modules/dashboard';
import { useState } from 'react';
import ReactPlayer from 'react-player';
import { session } from 'services/session';

export const Videoplayer: React.FC<Types.IEntity.Lesson> = ({ ...lessonData }) => {
  const localKey = lessonData.title + lessonData.language;
  const states = session.get(localKey);
  const state = states ? states[states.length - 1] : '';

  const [videoStatus, setVideoStatus] = useState<string>(state || '');

  const [remainingTime, setRemainingTime] = useState<number | null>(null);
  const [videoDuration, setVideoDuration] = useState(0);
  const [open, setOpen] = useState(false);

  const handleProgress = (state: { playedSeconds: number }) => {
    const { playedSeconds } = state;
    const remainingSeconds = videoDuration - playedSeconds;
    const remainingMinutes = Math.floor(remainingSeconds / 60);
    setRemainingTime(remainingMinutes);
  };

  const onPlay = () => {
    setVideoStatus('progress');
    session.add(localKey, 'progress');
  };

  const onEnded = () => {
    setVideoStatus('end');
    session.add(localKey, 'end');
    // session.add('lessons', lessonData);
  };

  const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'white',
    borderRadius: '10px',
    boxShadow: 24,
    p: 4
  };

  return (
    <Container sx={{ display: 'contents' }}>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={() => setOpen(false)}
        slots={{ backdrop: Backdrop }}
      >
        <Fade in={open}>
          <Box sx={style}>{lessonData.test}</Box>
        </Fade>
      </Modal>

      <Card
        sx={{
          maxWidth: '85%'
        }}
      >
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
            onPlay={onPlay}
          />
          <CardContent>
            <Typography gutterBottom variant="h6" component="div">
              {lessonData.title}
            </Typography>
            <Typography gutterBottom component="div">
              {remainingTime !== null && <p>Remaining time: {remainingTime} minutes</p>}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {lessonData.description}{' '}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button onClick={() => setOpen(true)}>Open Test</Button>
        </CardActions>
        <CardActions>
          {videoStatus === 'end' ? (
            <Chip label="video fully viewed" color="primary" variant="outlined" />
          ) : videoStatus === 'progress' ? (
            <Chip label="video in progress" color="success" variant="outlined" />
          ) : (
            ''
          )}
        </CardActions>
      </Card>
    </Container>
  );
};
