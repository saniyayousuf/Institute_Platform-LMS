// import * as React from 'react';
// // import dayjs, { Dayjs } from 'Dayjs';
// import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
// import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
// import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
// import { DatePickerToolbar } from '@mui/x-date-pickers';
// import { DatePicker } from '@mui/x-date-pickers/DatePicker';

// type DatePickerProps = {
//   label: string;
//   className?:  string;
//   value?:string;
//   onChange?:any
// };

// export default function DatePicker(props: DatePickerProps) {
//   const { label } = props
//   const [value, setValue] = React.useState<Dayjs | null>(dayjs('2022-04-17'));

//   return (
//     <LocalizationProvider dateAdapter={AdapterDayjs} 
     
//     >
//       <DemoContainer components={['DatePicker', 'DatePicker']}>
//         <DatePicker
//          className="p-3 border-2 border-cyan-700 focus:border-cyan-300 w-full outline-none rounded my-1 "
//           label={label}
//           value={value}
//           onChange={(newValue:any) => setValue(newValue)}
        
//         />
//       </DemoContainer>
//     </LocalizationProvider>
//   );
// }