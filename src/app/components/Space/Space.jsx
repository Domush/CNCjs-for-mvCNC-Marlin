import React from 'react';
import PropTypes from 'prop-types';

const Space = ({ tag: Component, width, height, ...props }) => {
  if (isString(width) && width.match(/^\d+$/)) {
    width += 'px';
  }
  if (typeof height === 'string' && height.match(/^\d+$/)) {
    height += 'px';
  }

  props.style = {
    display: 'inline-block',
    ...props.style,
  };

  if (width !== undefined) {
    props.style.width = width;
  }

  if (height !== undefined) {
    props.style.height = height;
  }

  return <Component {...props} />;
};

const isString = (a) => typeof a === 'string';

Space.propTypes = {
  tag: PropTypes.oneOfType([PropTypes.node, PropTypes.string]),
  width: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  height: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
};

Space.defaultProps = {
  tag: 'div',
  width: 0,
  height: 0,
};

export default Space;
