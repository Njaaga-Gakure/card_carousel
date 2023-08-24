const Follower = ({
  avatar_url: profile_pic,
  html_url: github,
  login: username,
}) => {
  return (
    <article className="card">
      <div className="img-container">
        <img className="card__img" src={profile_pic} alt=" profile picture" />
      </div>
      <div className="card__info">
        <h5 className="card__username">{username}</h5>
      </div>
      <div className="card__footer">
        <a
          className="card__link"
          href={github}
          target="_blank"
          rel="noreferrer"
        >
          view profile
        </a>
      </div>
    </article>
  );
};

export default Follower;
