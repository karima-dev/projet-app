import { Button, ButtonProps } from "react-bootstrap";
import { defaultProps } from "../../constants";
const index = ({
  name,
  text,
  className,
  id,
  onClick,
  ...buttonProps
}: CustomButtonProps & ButtonProps) => {
  return (
    <Button
      className={className}
      onClick={onClick}
      name={name}
      id={id}
      {...buttonProps}
    >
      {text}
    </Button>
  );
};
index.defaultProps = {
  ...defaultProps.customButton,
};
export default index;
