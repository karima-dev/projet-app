import { Button, ButtonProps } from 'react-bootstrap';
 const index = ({ name,text, className,id, onClick, ...buttonProps }: CustomButtonProps & ButtonProps ) => {

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
}
export default index;
