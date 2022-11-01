import classes from "./Button.module.css";

const Button = ({ children, type, onClick }) => {
  return (
    <button
      className={classes.button}
      type={type || "button"} //type bersem propston kelgen type je bolboso type button,birinchi kaysil true bolso oshonu alyp ketet
      onClick={onClick}
    >
      {children}
    </button>
  );
};
export default Button;
