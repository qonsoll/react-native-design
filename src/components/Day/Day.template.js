import React from 'react';
import {useTheme} from '../../design-system/context';
import Col from '../Containers/Col';
import Text from '../Text';

const DEFAULT_VARIANT = 'default'

const Day = (props) => {
  const {text, variant} = props;
  const {theme} = useTheme();
  const {DAYS} = theme.components;
  return (
    <Col
      v="center"
      h="center"
      bg={DAYS.variants[variant || DEFAULT_VARIANT].bg}
      borderRadius="sm"
      py={12}
      mr={4}>
      <Text
        variant="h5"
        textAlign="center"
        color={DAYS.variants[variant || DEFAULT_VARIANT].color}>
        {text}
      </Text>
    </Col>
  );
};

export default Day;
