import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';


type inputtype = {
  label: string,
  variant?: string,
  onChange?: any,
  required: boolean,
  type?: string,
  value?: any,
  className?: string




}
export default function Input(props: inputtype) {
  const { label, onChange, type, required, variant, value, className } = props;
  return (
    <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <TextField
        className={className}
        placeholder={label}
        required={required}
        variant="filled"
        onChange={onChange}
        type={type ?? "text"}
        value={value}
      />

    </Box>
  );
}