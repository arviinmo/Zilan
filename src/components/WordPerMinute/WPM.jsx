import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';

export default function WPM() {
  return (
    <FormControl component="fieldset" sx={{mr: 40, mt: 8}}>
      <RadioGroup row aria-label="gender" name="row-radio-buttons-group">
        <FormControlLabel value="180WPM" control={<Radio />} label="180 WPM" />
        <FormControlLabel value="200WPM" control={<Radio />} label="200 WPM" />
        <FormControlLabel value="220WPM" control={<Radio />} label="220 WPM" />
        <FormControlLabel value="240WPM" control={<Radio />} label="240 WPM" />

      </RadioGroup>
    </FormControl>
  );
}