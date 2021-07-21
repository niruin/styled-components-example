import React from 'react';
import PropTypes from 'prop-types';

Layout.propTypes = {
  className: PropTypes.string,
};

export function Layout({className, ...rest}) {
  return <div className={className} {...rest} />;
}
