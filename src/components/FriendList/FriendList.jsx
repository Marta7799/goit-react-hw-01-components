import PropTypes from 'prop-types';
import css from './FriendList.module.css';

export const FriendList = ({ friends }) => {
  const friendsRender = friends.map(friend => {
    return (
      <li key={friend.id} className={css.item}>
        <span
          className={friend.isOnline ? css.statusActive : css.statusInactive}
        ></span>

        <img
          className={css.avatar}
          src={friend.avatar}
          alt="User avatar"
          width="48"
        />
        <p className={css.name}>{friend.name}</p>
      </li>
    );
  });
  return <ul className={css.friendList}>{friendsRender}</ul>;
};

FriendList.propTypes = {
  friends: PropTypes.array.isRequired,
};
