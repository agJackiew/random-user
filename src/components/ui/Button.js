import styles from './Button.module.scss';

const Button = (props) => {

  return (
    <button className={styles.button} onClick={props.onClick} disabled={props.disabled}>
      <span className={styles.button__text}>{props.text}</span>
      {props.children}
    </button>
  );
};

export default Button;