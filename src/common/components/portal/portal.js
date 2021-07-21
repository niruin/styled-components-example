import { createPortal } from 'react-dom';
import PropTypes from 'prop-types';

Portal.propTypes = {
  root: PropTypes.string,
  children: PropTypes.node
};

export function Portal ({ root, children }) {
  const rootElement = document.getElementById(root);

  return rootElement ? createPortal(children, rootElement) : null;
}
