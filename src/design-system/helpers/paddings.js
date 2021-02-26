const PADDINGS = {
  py: (value) => ({
    paddingTop: parseInt(value, 10),
    paddingBottom: parseInt(value, 10),
  }),
  px: (value) => ({
    paddingLeft: parseInt(value, 10),
    paddingRight: parseInt(value, 10),
  }),
  p: (value) => ({
    paddingTop: parseInt(value, 10),
    paddingBottom: parseInt(value, 10),
    paddingLeft: parseInt(value, 10),
    paddingRight: parseInt(value, 10),
  }),
  pt: (value) => ({
    paddingTop: parseInt(value, 10),
  }),
  pr: (value) => ({
    paddingRight: parseInt(value, 10),
  }),
  pb: (value) => ({
    paddingBottom: parseInt(value, 10),
  }),
  pl: (value) => ({
    paddingLeft: parseInt(value, 10),
  }),
};

export default PADDINGS;
