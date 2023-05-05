import PropTypes from 'prop-types';
import css from './Notification.module.css';

function Notification({ message }) {
  return <p className={css.message}>{message}</p>;
}

Notification.propTypes = {
  message: PropTypes.string.isRequired,
};

export default Notification;
