import css from './Profile.module.css';

export default function Profile({
  name,
  tag,
  location,
  image,
  stats: { followers, views, likes },
}) {
  return (
    <div className={css.profile}>
      <div>
        <img src={image} alt="User avatar" className={css.profileImg} />
        <p className={css.name}>{name}</p>
        <p className={css.info}>@{tag}</p>
        <p className={css.info}>{location}</p>
      </div>
      <ul className={css.list}>
        <li>
          <span>Followers</span>
          <span className={css.bold}>{followers}</span>
        </li>
        <li>
          <span>Views</span>
          <span className={css.bold}>{views}</span>
        </li>
        <li>
          <span>Likes</span>
          <span className={css.bold}>{likes}</span>
        </li>
      </ul>
    </div>
  );
}
