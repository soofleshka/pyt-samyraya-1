import React from "react";
import { NavbarFriends } from "./NavbarFriends/NavbarFriends";

export const NavbarFriendsContainer = ({ store }) => {
  let state = store.getState();
  return <NavbarFriends friends={state.navbarPage.friends} />;
};
