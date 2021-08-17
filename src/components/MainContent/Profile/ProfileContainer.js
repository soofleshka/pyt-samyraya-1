import { connect } from "react-redux";
import { setProfile } from "../../../redux/reducers/profile-reducer";
import { useEffect } from "react";
import { getProfileAPI } from "../../../DAL/samuraiAPI/samuraiAPI";
import { Profile } from "./Profile";
import Preloader from "../../common/Preloader/Preloader";

const ProfileContainer = (props) => {
  const { profile, myUserId, isAuth, setProfile } = props;
  useEffect(() => {
    setProfile(null);
    let userId = props.match.params.userId || myUserId;
    if (!userId) return;
    getProfileAPI(userId).then((data) => setProfile(data));
  }, [myUserId]);
  if (!profile) return <Preloader />;
  return <Profile profile={profile} isAuth={isAuth} myUserId={myUserId} />;
};

const mapStateToProps = (state) => {
  return {
    profile: state.profilePage.profile,
    myUserId: state.auth.userId,
    isAuth: state.auth.isAuth,
  };
};

export default connect(mapStateToProps, { setProfile })(ProfileContainer);
