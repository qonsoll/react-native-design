const CORNER_PROPS = {
  sharp: ['borderRadius'],
  smooth: ['borderRadius'],
  rounded: ['borderRadius'],
  round: ['borderRadius'],
  sharpTop: ['borderTopLeftRadius', 'borderTopRightRadius'],
  sharpBottom: ['borderBottomLeftRadius', 'borderBottomRightRadius'],
  sharpLeft: ['borderTopLeftRadius', 'borderBottomLeftRadius'],
  sharpRight: ['borderTopRightRadius', 'borderBottomRightRadius'],
  smoothTop: ['borderTopLeftRadius', 'borderTopRightRadius'],
  smoothBottom: ['borderBottomLeftRadius', 'borderBottomRightRadius'],
  smoothLeft: ['borderTopLeftRadius', 'borderBottomLeftRadius'],
  smoothRight: ['borderTopRightRadius', 'borderBottomRightRadius'],
  roundedTop: ['borderTopLeftRadius', 'borderTopRightRadius'],
  roundedBottom: ['borderBottomLeftRadius', 'borderBottomRightRadius'],
  roundedLeft: ['borderTopLeftRadius', 'borderBottomLeftRadius'],
  roundedRight: ['borderTopRightRadius', 'borderBottomRightRadius'],
};

export default CORNER_PROPS;
