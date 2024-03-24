import React, { useState, useEffect } from 'react';
import { Button, Chip, CircularProgress, Grid, Stack, Typography } from '@mui/material';
import { Test } from 'modules/dashboard/api';
import { IEntity } from 'modules/dashboard/types';

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

export const LanguageTest: React.FC = () => {
  const [data, setData] = useState<IEntity.TestApi[]>([]);
  const [currentQuestion, setCurrentQuestion] = useState<IEntity.TestApi | null>(null);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState<string[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [countCorrectAnswers, setCountCorrectAnswers] = useState(0);
  const [isDone, setIsDone] = useState(false);

  useEffect(() => {
    Test.List()
      .then(response => {
        const result = response.data.results;
        setData(result);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
        setError('Error fetching data');
        setLoading(false);
      });
  }, []);

  useEffect(() => {
    if (data.length > 0) {
      setCurrentQuestion(data[currentQuestionIndex]);
      setAnswers(reorderAnswers(data[currentQuestionIndex]));
    }
  }, [data, currentQuestionIndex]);

  if (loading) {
    return <CircularProgress />;
  }

  if (error) {
    return <div>{error}</div>;
  }

  const selectAnswer = (answer: string) => {
    if (answer === currentQuestion?.correct_answer) {
      setCountCorrectAnswers(countCorrectAnswers + 1);
    }
    setTimeout(() => {
      const newQuestionIndex = currentQuestionIndex + 1;

      if (newQuestionIndex === data.length) {
        setIsDone(true);
      } else {
        setCurrentQuestionIndex(newQuestionIndex);
      }
    }, 100);
  };
  if (isDone) {
    return <Chip label={`Your correct : ${countCorrectAnswers} `} color="primary" variant="outlined" />;
  }

  return (
    <Grid container justifyContent="center">
      <Grid item xs={12} sm={10} md={8} lg={6}>
        <Grid container spacing={2} direction="column" alignItems="center">
          {currentQuestion && (
            <>
              <Grid item>
                <Typography variant="h6" align="center">
                  {currentQuestion.question}
                </Typography>
              </Grid>
              {answers.map((ans: string, idx: number) => (
                <Grid item key={ans} xs={12} sm={6}>
                  <Button fullWidth variant="contained" onClick={() => selectAnswer(ans)}>
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
