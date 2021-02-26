/**
 * Core method which connects style tokens and component properties
 * 
 * @param {object} tokens 
 * @param {array} props 
 */

const useBuildStyles = (tokens, props) => {
  const styles = {};
  if (props && props.length) {
    props.forEach((prop) => {
      if (tokens && tokens[prop]) {
        styles[prop] = tokens[prop];
      }
    });
    return styles;
  }
};

export default useBuildStyles;
