import React, {useState} from 'react';
import {StyleSheet, TextInput} from 'react-native';
import Item from '../Item';
import {useTheme} from '../../design-system/context'
import { rest } from 'lodash';

// Defaults
const DEFAULT_CORNERS = 'sharp';
const DEFAULT_TYPE = 'borderedBottom';
const DEFAULT_VARIANT = 'grey';
const FOCUS_VARIANT = 'primary';
const ERROR_VARIANT = 'transparentDanger';

const Input = (props) => {
  const {theme} = useTheme()
  // Destructuring props
  const {
    size,
    name,
    initialValue,
    onChange,
    throwOnlyValueOnChange = false,
    placeholder,
    label,
    error,
    icon,
    keyboardType,
    defaultValue,
    variant,
    multiline,
    secureTextEntry = false,
    ...rest
  } = props;

  // Making inner input area full width
  const inputStyles = StyleSheet.create({
    main: {
      flex: 1,
      fontFamily: theme.CORE.FONT_FAMILIES.body
    }
  })

  // Component state
  const [value, setValue] = useState(initialValue);
  const [defaultVariant, setDefaultVariant] = useState(
    error ? ERROR_VARIANT : DEFAULT_VARIANT,
  );

  // Component actions
  const onChangeText = (text) => {
    setValue(text);
    onChange(throwOnlyValueOnChange ? text : {[name]: text});
  };
  const onFocus = () => {
    setDefaultVariant(FOCUS_VARIANT);
  };
  const onBlur = () => {
    setDefaultVariant(error ? ERROR_VARIANT : DEFAULT_VARIANT);
  };

  // Template
  return (
    <Item
      size={size}
      leftIconName={icon}
      rightIconName={defaultVariant === 'transparentDanger' && 'times'}
      primaryInfoText={label}
      secondaryInfoText={error}
      variant={variant || defaultVariant}
      type={DEFAULT_TYPE}
      corners={DEFAULT_CORNERS}>
      <TextInput
        style={inputStyles.main}
        multiline={multiline}
        keyboardType={keyboardType}
        onFocus={onFocus}
        onBlur={onBlur}
        value={value}
        onChangeText={onChangeText}
        placeholder={placeholder}
        defaultValue={defaultValue}
        secureTextEntry={secureTextEntry}
        {...rest}
      />
    </Item>
  );
};

export default Input;
