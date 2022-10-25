import "./Button.css";

const Button = (props: any) => {
  const { title, onClick } = props;

  return (
    <div onClick={onClick} className="button">
      {title}
    </div>
  );
};

export default Button;
