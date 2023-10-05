import React, { useState } from 'react';
// Pickdate time calandar
import DatePicker from 'react-datepicker';

import 'react-datepicker/dist/react-datepicker.css';

const CalendarReservation = () => {
  const [startDate, setStartDate] = useState(new Date());
  /*  const [endDate, setEndDate] = useState(null); */

  return (
    <DatePicker
      className="karas_date_picker"
      selected={startDate}
      minDate={new Date('02-10-2023')}
      maxDate={new Date('10-12-2023')}
      onChange={(date: any) => setStartDate(date)}
      inline
      /*  dateFormat="yyyy.MM.dd" */
    />
  );
};

export default CalendarReservation;
