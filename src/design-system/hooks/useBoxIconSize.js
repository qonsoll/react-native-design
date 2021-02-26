const useBoxIconSize = ({boxSizeProps}) => {
  const styles = {
    size: boxSizeProps.iconSize,
  };

  const style = {
    main: styles,
  };

  return style.main;
};

export default useBoxIconSize;
