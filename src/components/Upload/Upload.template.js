import React from 'react';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import Button from '../ButtonItem';
import Row from '../Containers/Row';
import Col from '../Containers/Col';
import Box from '../Containers/Box';
import Avatar from '../Avatar';
import PropTypes from 'prop-types';

// Defaults
const DEFAULT_AVATAR_SIZE = 'xxl';
const DEFAULT_BUTTON_SIZE = 'sm';
const DEFAULT_BUTTON_VARIANT = 'secondary';
const DEFAULT_BUTTON_LEFT_ICON = 'photo';

const Upload = (props) => {
  // Destructuring props
  const {
    fullName,
    allowTakePhoto,
    allowUploadPhoto,
    takePhotoText,
    uploadPhotoText,
    onUpload,
    avatarSize,
    buttonSize,
    buttonVariant,
    buttonLeftIcon,
    uri,
    ...rest
  } = props;

  // Template
  return (
    <Box {...rest}>
      <Row h="center" mb={16}>
        <Col auto>
          <Avatar fullName={fullName} uri={uri} size={avatarSize || DEFAULT_AVATAR_SIZE} />
        </Col>
      </Row>
      <Row h="space-around">
        {allowTakePhoto && (
          <Col auto>
            <Button
              size={buttonSize || DEFAULT_BUTTON_SIZE}
              variant={buttonVariant || DEFAULT_BUTTON_VARIANT}
              leftIcon={buttonLeftIcon || DEFAULT_BUTTON_LEFT_ICON}
              onPress={() => launchCamera({}, onUpload)}
              text={takePhotoText || 'Take photo'}
            />
          </Col>
        )}
        {allowUploadPhoto && (
          <Col auto>
            <Button
              size={buttonSize || DEFAULT_BUTTON_SIZE}
              variant={buttonVariant || DEFAULT_BUTTON_VARIANT}
              leftIcon={buttonLeftIcon || DEFAULT_BUTTON_LEFT_ICON}
              onPress={() => launchImageLibrary({}, onUpload)}
              text={uploadPhotoText || 'Upload photo'}
            />
          </Col>
        )}
      </Row>
    </Box>
  );
};

// PropTypes
Upload.propTypes = {
  fullName: PropTypes.string,
  allowTakePhoto: PropTypes.bool,
  allowUploadPhoto: PropTypes.bool,
  takePhotoText: PropTypes.string,
  uploadPhotoText: PropTypes.string,
  onUpload: PropTypes.func,
  avatarSize: PropTypes.string,
  buttonSize: PropTypes.string,
  buttonVariant: PropTypes.string,
  buttonLeftIcon: PropTypes.string,
}

export default Upload;
