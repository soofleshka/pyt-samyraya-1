import React from "react";
import { Field, Form } from "react-final-form";
import styles from "./ProfileInfo.module.css";

class ProfileStatusForm extends React.Component {
  state = { statusEditMode: false };

  toggleStatusEditMode = () => {
    this.setState((state) => ({ statusEditMode: !state.statusEditMode }));
  };

  onSubmit = (values) => {
    if (values.profileStatus !== this.props.profileStatus)
      this.props.updateProfileStatus(values.profileStatus);
    this.toggleStatusEditMode();
  };

  render() {
    const { isMyProfile, profileStatus } = this.props;
    const { statusEditMode } = this.state;

    return (
      <div>
        {isMyProfile() ? (
          <div className={styles.status}>
            {!statusEditMode ? (
              <div
                style={{ display: "inline-block" }}
                onDoubleClick={this.toggleStatusEditMode}
              >
                {profileStatus || "Введите статус"}
              </div>
            ) : (
              <Form
                onSubmit={this.onSubmit}
                initialValues={{ profileStatus: this.props.profileStatus }}
              >
                {({ handleSubmit, form }) => (
                  <form onSubmit={handleSubmit}>
                    <Field
                      name="profileStatus"
                      autoFocus={true}
                      maxlength={300}
                      onBlur={() => form.submit()}
                      component="input"
                    />
                  </form>
                )}
              </Form>
            )}
          </div>
        ) : (
          <div>{profileStatus}</div>
        )}
      </div>
    );
  }
}

export default ProfileStatusForm;

// export class ProfileStatus extends React.Component {
//   state = { profileStatus: this.props.profileStatus, statusEditMode: false };
//
//   componentDidUpdate(prevProps, prevState, snapshot) {
//     if (this.props.profileStatus !== prevProps.profileStatus) {
//       this.setState({ profileStatus: this.props.profileStatus });
//     }
//   }
//
//   profileStatusChangeHandler = (e) => {
//     this.setState({ profileStatus: e.target.value });
//   };
//   profileStatusOnBlurHandler = (e) => {
//     this.updateProfileStatus(e);
//   };
//   profileStatusKeyUpHandler = (e) => {
//     e.keyCode === 13 && this.updateProfileStatus(e);
//   };
//
//   updateProfileStatus = (e) => {
//     this.props.updateProfileStatus(e.target.value);
//     this.toggleStatusEditMode();
//   };
//   toggleStatusEditMode = () => {
//     this.setState((state) => ({ statusEditMode: !state.statusEditMode }));
//   };
//
//   render() {
//     const { isMyProfile, profileStatus } = this.props;
//     const { statusEditMode } = this.state;
//
//     return (
//       <div>
//         {isMyProfile() ? (
//           <div
//             onDoubleClick={this.toggleStatusEditMode}
//             className={styles.status}
//           >
//             {!statusEditMode ? (
//               <div>{<p>{profileStatus || "Введите статус"}</p>}</div>
//             ) : (
//               <div>
//                 <p>
//                   <input
//                     type="text"
//                     autoFocus={true}
//                     onChange={this.profileStatusChangeHandler}
//                     onBlur={this.profileStatusOnBlurHandler}
//                     onKeyUp={this.profileStatusKeyUpHandler}
//                     value={this.state.profileStatus}
//                   />
//                 </p>
//               </div>
//             )}
//           </div>
//         ) : (
//           <div>{profileStatus && <p>{profileStatus}</p>}</div>
//         )}
//       </div>
//     );
//   }
// }
