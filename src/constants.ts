export const IMAGESRC="https://www.letournepage.com/wp-content/uploads/2019/12/2019.11-Lire-Local.arbre2_-1072x536-768x384.png"

export const chatInputProps = {
  id: "outlined-basic-email",
  label: "TypeSomething",
  color: "primary",
  ariaLabel: "add",
  fullWidth: true,
  value: "",
  styles: {
    inputStyle: {
      padding: "20px",
    },
    buttonStyle: {
      textAlign: "right",
    },
  },
};
export const customGridProps = [
  {
    styles: { textAlign: "right" },
    text: "Hey man What's up",
    times: "09:30",
    key: "1",
  },
  {
    styles: { textAlign: "left" },
    text: "Hey Iam Good! What about you ?",
    times: "09:31",
    key: "2",
  },
  {
    styles: { textAlign: "right" },
    text: "Cool. i am good, let's catch up!",
    times: "09:30",
    key: "3",
  },
];
export const styles = {
  messageArea: {
    height: "70vh",
    overflow: "auto",
  },
};

export enum AccountValue {
  signIn = "signIn",
  signUp = "signUp",
}

export const chatCollectionName = "chats";
export const CODE=123;
