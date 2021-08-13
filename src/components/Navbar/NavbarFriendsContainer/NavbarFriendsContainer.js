import { connect } from "react-redux";
import { NavbarFriends } from "./NavbarFriends/NavbarFriends";

const mapStateToProps = (state) => {
  return { friends: state.navbarPage.friends };
};

export const NavbarFriendsContainer = connect(mapStateToProps)(NavbarFriends);
