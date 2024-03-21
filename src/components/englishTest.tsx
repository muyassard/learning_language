import { useState, useEffect } from 'react';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { Typography } from '@mui/material';

interface CheckedItems {
  [key: string]: boolean;
}

export const EnglishTest = () => {
  const [checkedItems, setCheckedItems] = useState<CheckedItems>({
    ishonmoq: false,
    label2: false,
    label3: false
  });

  useEffect(() => {
    const savedState = localStorage.getItem('checkboxState');
    if (savedState) {
      setCheckedItems(JSON.parse(savedState));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('checkboxState', JSON.stringify(checkedItems));
  }, [checkedItems]);

  const handleCheckboxChange = (label: string) => {
    setCheckedItems(prevState => ({
      ...prevState,
      [label]: !prevState[label]
    }));
  };

  return (
    <>
      <Typography>Find the correct translation of the words</Typography>
      <FormGroup row>
        <FormControlLabel
          control={<Checkbox checked={checkedItems.ishonmoq} onChange={() => handleCheckboxChange('ishonmoq')} />}
          label="ishonmoq"
        />
        <FormControlLabel
          control={<Checkbox checked={checkedItems.label2} onChange={() => handleCheckboxChange('label2')} />}
          label="label2"
        />
        <FormControlLabel
          control={<Checkbox checked={checkedItems.label3} onChange={() => handleCheckboxChange('label3')} />}
          label="label3"
        />
      </FormGroup>
    </>
  );
};
