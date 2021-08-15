import React, { useEffect, useState } from "react";
import UserItem from "./UserItem/UserItem";
import styles from "./Users.module.css";
import axios from "axios";

const Users = ({
  users,
  currentPage,
  totalUsers,
  usersCount,
  follow,
  unfollow,
  setUsers,
  addUsers,
  setTotalUsers,
  setCurrentPage,
  doubleUsersCount,
}) => {
  const [loading, setLoading] = useState(false);
  const [pageLinks, setPageLinks] = useState([]);

  useEffect(() => {
    setLoading(true);
    axios
      .get(
        `https://social-network.samuraijs.com/api/1.0/users?count=${usersCount}&page=${currentPage}`,
        {
          headers: {
            "API-KEY": "cfb3f52a-7e3d-4920-95ca-8ceabe83e146",
          },
        }
      )
      .then((response) => {
        if (response.status === 200) {
          if (response.data.error) {
            console.log(response.data.error);
            return;
          }
          setLoading(false);
          setUsers(response.data.items);
          setTotalUsers(response.data.totalCount);
        }
      });
    return () => {
      setUsers([]);
      setTotalUsers(0);
    };
  }, [currentPage]);

  useEffect(() => {
    let pagesCount = Math.ceil(totalUsers / usersCount);
    let tempPageLinks = [];
    for (let i = 1; i <= pagesCount; i++) {
      tempPageLinks.push(i);
    }
    setPageLinks(tempPageLinks);
  }, [totalUsers, usersCount]);

  let showMoreUsersButtonHandler = () => {
    setLoading(true);
    axios
      .get(
        `https://social-network.samuraijs.com/api/1.0/users?count=${usersCount}&page=${
          currentPage + 1
        }`,
        {
          headers: {
            "API-KEY": "cfb3f52a-7e3d-4920-95ca-8ceabe83e146",
          },
        }
      )
      .then((response) => {
        if (response.status === 200) {
          if (response.data.error) {
            console.log(response.data.error);
            return;
          }
          setLoading(false);
          addUsers(response.data.items);
          doubleUsersCount();
        }
      });
  };
  let pageLinkClickHandler = (p) => {
    setCurrentPage(p);
  };

  return (
    <div className={styles.users}>
      <h4>TotalUsers: {totalUsers}</h4>
      <p>links:</p>
      {pageLinks.map((p, index) => {
        return (
          <span
            key={index}
            className={currentPage === p ? styles.activePage : undefined}
            onClick={pageLinkClickHandler.bind(this, p)}
          >
            {p}
          </span>
        );
      })}
      {users.map((u) => (
        <UserItem key={u.id} user={u} follow={follow} unfollow={unfollow} />
      ))}
      {loading ? <div>Loading...</div> : null}
      {currentPage === 1 && (
        <button
          onClick={showMoreUsersButtonHandler}
          className={styles.showMore_Button}
          disabled={loading}
        >
          Show more
        </button>
      )}
    </div>
  );
};

export default Users;
