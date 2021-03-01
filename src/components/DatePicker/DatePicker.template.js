import RNDatePicker from 'react-native-date-picker';
import React from 'react';
import {Platform} from 'react-native';
import PropTypes from 'prop-types';

const DatePicker = ({date, setDate, mode}) => {
  // Detecting OS
  const isAndroid = Platform.OS === 'android';

  // Template
  return (
    <RNDatePicker
      date={date}
      onDateChange={setDate}
      mode={mode}
      androidVariant={isAndroid ? 'nativeAndroid' : 'iosClone'}
    />
  );
};

DatePicker.propTypes = {
  setDate: PropTypes.func,
  mode: PropTypes.string,
}

export default DatePicker;
