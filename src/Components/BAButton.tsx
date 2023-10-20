import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

type btntype = {
  label: string,
  variant?: string,
  onClick?: any,
  className?: string;
}


export default function BAButton(props: btntype) {
  const { onClick, variant, label, className } = props;
  return (
    <Stack spacing={2} direction="row">
      <Button
        onClick={onClick}
        variant={"contained"}
        className={className}
        >
        {label}
      </Button>

    </Stack>
  );
}