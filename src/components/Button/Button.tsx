import "./Button.css";

const Button = (props: any) => {
  const { title } = props;

  return <div className="button">{title}</div>;
};

export default Button;
