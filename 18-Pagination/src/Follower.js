import React from "react";

const Follower = ({ loading, followers }) => {
  if (loading) {
    return <h2 className="loading">Loading...</h2>;
  }

  return (
    <section className="followers">
      <div className="container">
        {followers.map((follower) => {
          return (
            <article className="card">
              <img src={follower.avatar_url} alt={follower.login} />
              <h4>{follower.login}</h4>
              <a href={follower.html_url} className="btn">
                view profile
              </a>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Follower;
