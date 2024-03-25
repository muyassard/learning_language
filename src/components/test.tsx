import React, { useState, useEffect } from 'react';
import { Button, Chip, Grid, Typography } from '@mui/material';
import { IEntity } from 'modules/dashboard/types';
import engTest from '../data/englishLesson1Test.json';
import ReplyIcon from '@mui/icons-material/Reply';
import useSound from 'use-sound';
// @ts-ignore
import victory from '../assets/victory.mp3';
// @ts-ignore
import achive from '../assets/achive.mp3';

const reorderAnswers = (question: IEntity.TestApi) => {
  const answers = [question.correct_answer, ...question.incorrect_answers];

  for (let index = 0; index < answers.length; index++) {
    const j = Math.floor(Math.random() * index);
    const tmp = answers[index];
    answers[index] = answers[j];
    answers[j] = tmp;
  }

  return answers;
};

const data = engTest.results;

export const LanguageTest: React.FC = () => {
  const [playSound] = useSound(victory);
  const [achiveSound] = useSound(achive);

  const [currentQuestion, setCurrentQuestion] = useState<IEntity.TestApi>(data[0]);

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);

  const [answers, setAnswers] = useState<string[]>([]);
  const [countCorrectAnswers, setCountCorrectAnswers] = useState<boolean[]>([]);
  const [isDone, setIsDone] = useState(false);

  useEffect(() => {
    setCurrentQuestion(data[currentQuestionIndex]);
    setAnswers(reorderAnswers(data[currentQuestionIndex]));
  }, [currentQuestionIndex]);

  const selectAnswer = (answer: string) => {
    if (answer === currentQuestion?.correct_answer) {
      setCountCorrectAnswers(prevState => [...prevState, true]);
      
      achiveSound();
    }
    setTimeout(() => {
      const newQuestionIndex = currentQuestionIndex + 1;
      setCountCorrectAnswers(prevState => [...prevState, false]);

      if (newQuestionIndex === data.length) {
        setIsDone(true);
      } else {
        setCurrentQuestionIndex(newQuestionIndex);
      }
    }, 100);
  };
  if (isDone) {
    playSound();
    const trueCount = countCorrectAnswers.filter(item => item === true).length;
    return <Chip label={`Your correct : ${trueCount} `} color="primary" variant="outlined" />;
  }

  return (
    <Grid container justifyContent="center">
      <Grid spacing={1} direction="column" item xs={10} sm={8} md={8} lg={8}>
        <Grid container spacing={2} direction="column" sx={{ position: 'relative' }}>
          {currentQuestion && (
            <>
              <Chip
                label={<ReplyIcon />}
                sx={{
                  display: currentQuestionIndex === 0 ? 'none' : 'block',
                  position: 'absolute ',
                  left: '-35px',
                  top: '10px',
                  padding: '0'
                }}
                variant="outlined"
                onClick={() => {
                  if (currentQuestionIndex !== 0) setCurrentQuestionIndex(currentQuestionIndex - 1);
                  setCountCorrectAnswers(prevState => {
                    prevState.pop();
                    return [...prevState];
                  });
                }}
              ></Chip>

              <Grid item>
                <Typography sx={{ fontSize: { xs: '14px', sm: '16px', md: '18px', lg: '20px' } }} variant="h6">
                  {currentQuestion.question}
                </Typography>
              </Grid>
              {answers.map((ans: string, idx: number) => (
                <Grid item key={ans} xs={10} sm={6}>
                  <Button
                    sx={{
                      '&:hover': {
                        bgcolor: '#6DB3F2'
                      },
                      fontSize: { xs: '10px', sm: '12px', md: '14px', lg: '16px' }
                    }}
                    fullWidth
                    variant="contained"
                    onClick={() => selectAnswer(ans)}
                  >
                    {idx + 1}. {ans}
                  </Button>
                </Grid>
              ))}
            </>
          )}
        </Grid>
      </Grid>
    </Grid>
  );
};
