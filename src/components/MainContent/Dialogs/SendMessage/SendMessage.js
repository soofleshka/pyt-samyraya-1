import React from "react";
import { Field, Form } from "react-final-form";
import { defaultRequired } from "../../../../utils/validators";
import styles from "./SendMessage.module.css";

const SendMessageForm = (props) => {
  return (
    <div className={styles.sendMessage}>
      <Form
        onSubmit={props.sendMessage}
        initialValues={{ newMessageText: "" }}
        render={({ handleSubmit, form }) => (
          <form
            onSubmit={(event) => {
              handleSubmit(event);
              form.restart();
            }}
          >
            <Field
              name="newMessageText"
              component="textarea"
              validate={defaultRequired}
            />
            <button className={styles.sendMessage__button}>Send Message</button>
          </form>
        )}
      />
    </div>
  );
};
export default SendMessageForm;

// export const SendMessage = ({
//   newMessageText,
//   sendMessage,
//   changeNewMessage,
// }) => {
//   let sendMessageHandler = () => {
//     sendMessage();
//   };
//
//   let changeNewMessageHandler = (e) => {
//     changeNewMessage(e.target.value);
//   };
//
//   return (
//     <div className={styles.sendMessage}>
//       <textarea onChange={changeNewMessageHandler} value={newMessageText} />
//       <button
//         onClick={sendMessageHandler}
//         className={styles.sendMessage__button}
//       >
//         Send Message
//       </button>
//     </div>
//   );
// };
