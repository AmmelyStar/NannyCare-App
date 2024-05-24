import React, { useState } from 'react';
import { Radio, RadioGroup, FormControlLabel, FormControl, FormLabel } from '@mui/material';
import redTheme from '../../../dataTheme/theme-red.json';
import blueTheme from '../../../dataTheme/theme-blue.json';
import greenTheme from '../../../dataTheme/theme-green.json';

export default function RowRadioButtonsGroup({ handleThemeChange }) {
  const [selectedTheme, setSelectedTheme] = useState('red');

  const handleChange = (event) => {
    const selectedTheme = event.target.value;
    setSelectedTheme(selectedTheme);
    switch (selectedTheme) {
      case 'red':
        handleThemeChange(redTheme);
        break;
      case 'blue':
        handleThemeChange(blueTheme);
        break;
      case 'green':
        handleThemeChange(greenTheme);
        break;
      default:
        break;
    }
  };

  return (
    <FormControl component="fieldset">
      <RadioGroup row value={selectedTheme} onChange={handleChange}>
        <FormControlLabel value="red" control={<Radio />} label="Red" />
        <FormControlLabel value="blue" control={<Radio />} label="Blue" />
        <FormControlLabel value="green" control={<Radio />} label="Green" />
      </RadioGroup>
    </FormControl>
  );
}