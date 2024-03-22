import { useState, useEffect } from 'react';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { Typography } from '@mui/material';

interface CheckedItems {
  [key: string]: boolean;
}

export const EnglishTest = () => {
  const [checkedItems1, setCheckedItems1] = useState<CheckedItems>({
    ishonmoq: false,
    ishonch: false,
    ish: false
  });

  const [checkedItems2, setCheckedItems2] = useState<CheckedItems>({
    olmoq: false,
    tushuntirmoqq: false,
    tushmoq: false
  });

  const [checkedItems3, setCheckedItems3] = useState<CheckedItems>({
    topmoq: false,
    topishmoq: false,
    task: false
  });

  const [checkedItems4, setCheckedItems4] = useState<CheckedItems>({
    bilim: false,
    bilmoq: false,
    bilimdon: false
  });

  const [checkedItems5, setCheckedItems5] = useState<CheckedItems>({
    tayoq: false,
    toshloq: false,
    tomon: false
  });

  useEffect(() => {
    const savedState1 = localStorage.getItem('checkboxState1');
    if (savedState1) {
      setCheckedItems1(JSON.parse(savedState1));
    }
    const savedState2 = localStorage.getItem('checkboxState2');
    if (savedState2) {
      setCheckedItems2(JSON.parse(savedState2));
    }
    const savedState3 = localStorage.getItem('checkboxState3');
    if (savedState3) {
      setCheckedItems3(JSON.parse(savedState3));
    }
    const savedState4 = localStorage.getItem('checkboxState4');
    if (savedState4) {
      setCheckedItems4(JSON.parse(savedState4));
    }
    const savedState5 = localStorage.getItem('checkboxState5');
    if (savedState5) {
      setCheckedItems5(JSON.parse(savedState5));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('checkboxState1', JSON.stringify(checkedItems1));
    localStorage.setItem('checkboxState2', JSON.stringify(checkedItems2));
    localStorage.setItem('checkboxState3', JSON.stringify(checkedItems3));
    localStorage.setItem('checkboxState4', JSON.stringify(checkedItems4));
    localStorage.setItem('checkboxState5', JSON.stringify(checkedItems5));
  }, [checkedItems1, checkedItems2, checkedItems3, checkedItems4, checkedItems5]);

  const handleCheckboxChange = (label: string, setCheckedItems: React.Dispatch<React.SetStateAction<CheckedItems>>) => {
    setCheckedItems(prevState => ({
      ...prevState,
      [label]: !prevState.label
    }));
  };

  return (
    <>
      <Typography variant="h6">Find the correct translation of the words</Typography>
      <Typography marginY={1} fontWeight="bold">
        Believe - .....
      </Typography>
      <FormGroup row>
        <FormControlLabel
          control={
            <Checkbox
              checked={checkedItems1.ishonmoq}
              onChange={() => handleCheckboxChange('ishonmoq', setCheckedItems1)}
            />
          }
          label="ishonmoq"
        />
        <FormControlLabel
          control={
            <Checkbox
              checked={checkedItems1.ishonch}
              onChange={() => handleCheckboxChange('ishonch', setCheckedItems1)}
            />
          }
          label="ishonch"
        />
        <FormControlLabel
          control={
            <Checkbox checked={checkedItems1.ish} onChange={() => handleCheckboxChange('ish', setCheckedItems1)} />
          }
          label="ish"
        />
      </FormGroup>
      <Typography marginY={1} fontWeight="bold">
        explain - .....
      </Typography>
      <FormGroup row>
        <FormControlLabel
          control={
            <Checkbox checked={checkedItems2.olmoq} onChange={() => handleCheckboxChange('olmoq', setCheckedItems2)} />
          }
          label="olmoq"
        />
        <FormControlLabel
          control={
            <Checkbox
              checked={checkedItems2.tushuntirmoq}
              onChange={() => handleCheckboxChange('tushuntirmoq', setCheckedItems2)}
            />
          }
          label="tushuntirmoq"
        />
        <FormControlLabel
          control={
            <Checkbox
              checked={checkedItems2.tushmoq}
              onChange={() => handleCheckboxChange('tushmoq', setCheckedItems2)}
            />
          }
          label="tushmoq"
        />
      </FormGroup>
      <Typography marginY={1} fontWeight="bold">
        find - .....
      </Typography>

      <FormGroup row>
        <FormControlLabel
          control={
            <Checkbox
              checked={checkedItems3.topmoq}
              onChange={() => handleCheckboxChange('topmoq', setCheckedItems3)}
            />
          }
          label="topmoq"
        />
        <FormControlLabel
          control={
            <Checkbox
              checked={checkedItems3.topishmoq}
              onChange={() => handleCheckboxChange('topishmoq', setCheckedItems3)}
            />
          }
          label="topishmoq"
        />
        <FormControlLabel
          control={
            <Checkbox checked={checkedItems3.task} onChange={() => handleCheckboxChange('task', setCheckedItems3)} />
          }
          label="task"
        />
      </FormGroup>
      <Typography marginY={1} fontWeight="bold">
        know - .....
      </Typography>

      <FormGroup row>
        <FormControlLabel
          control={
            <Checkbox checked={checkedItems4.bilim} onChange={() => handleCheckboxChange('bilim', setCheckedItems4)} />
          }
          label="bilim"
        />
        <FormControlLabel
          control={
            <Checkbox
              checked={checkedItems4.bilmoq}
              onChange={() => handleCheckboxChange('bilmoq', setCheckedItems4)}
            />
          }
          label="bilmoq"
        />
        <FormControlLabel
          control={
            <Checkbox
              checked={checkedItems4.bilimdon}
              onChange={() => handleCheckboxChange('bilimdon', setCheckedItems4)}
            />
          }
          label="bilimdon"
        />
      </FormGroup>
      <Typography marginY={1} fontWeight="bold">
        stick - .....
      </Typography>

      <FormGroup row>
        <FormControlLabel
          control={
            <Checkbox checked={checkedItems5.tayoq} onChange={() => handleCheckboxChange('tayoq', setCheckedItems5)} />
          }
          label="tayoq"
        />
        <FormControlLabel
          control={
            <Checkbox
              checked={checkedItems5.toshloq}
              onChange={() => handleCheckboxChange('toshloq', setCheckedItems5)}
            />
          }
          label="toshloq"
        />
        <FormControlLabel
          control={
            <Checkbox checked={checkedItems5.tomon} onChange={() => handleCheckboxChange('tomon', setCheckedItems5)} />
          }
          label="tomon"
        />
      </FormGroup>
    </>
  );
};
