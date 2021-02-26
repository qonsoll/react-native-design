const MARGINS = {
  my: (value) => ({
    marginTop: parseInt(value, 10),
    marginBottom: parseInt(value, 10),
  }),
  mx: (value) => ({
    marginLeft: parseInt(value, 10),
    marginRight: parseInt(value, 10),
  }),
  m: (value) => ({
    marginTop: parseInt(value, 10),
    marginBottom: parseInt(value, 10),
    marginLeft: parseInt(value, 10),
    marginRight: parseInt(value, 10),
  }),
  mt: (value) => ({
    marginTop: parseInt(value, 10),
  }),
  mr: (value) => ({
    marginRight: parseInt(value, 10),
  }),
  mb: (value) => ({
    marginBottom: parseInt(value, 10),
  }),
  ml: (value) => ({
    marginLeft: parseInt(value, 10),
  }),
};

export default MARGINS;
