import React, { useCallback, useRef } from "react";

const Photos = ({ loading, photos, setPage, hasMorePhotos }) => {
  const observer = useRef();
  const lastPhotoElementRef = useCallback(
    (node) => {
      if (loading) return;
      if (observer.current) observer.current.disconnect();
      observer.current = new IntersectionObserver(
        (entries) => {
          if (entries[0].isIntersecting && hasMorePhotos) {
            setPage((prevPage) => prevPage + 1);
          }
        },
        { threshold: 1 }
      );
      if (node) observer.current.observe(node);
    },
    [loading, hasMorePhotos, setPage]
  );
  return (
    <section className="photos">
      <div className="photos-center">
        {photos.map((image, index) => {
          const {
            urls: { regular },
            alt_description,
            likes,
            user: {
              name,
              portfolio_url,
              profile_image: { medium },
            },
            id,
          } = image;
          if (photos.length === index + 1) {
            return (
              <article
                ref={lastPhotoElementRef}
                className="photo"
                key={id}
                tabIndex="0"
              >
                <img src={regular} alt={alt_description} />
                <div className="photo-info">
                  <div>
                    <h4>{name}</h4>
                    <p>{likes} likes</p>
                  </div>
                  <a href={portfolio_url}>
                    <img src={medium} alt="" className="user-img" />
                  </a>
                </div>
              </article>
            );
          } else {
            return (
              <article className="photo" key={id} tabIndex="0">
                <img src={regular} alt={alt_description} />
                <div className="photo-info">
                  <div>
                    <h4>{name}</h4>
                    <p>{likes} likes</p>
                  </div>
                  <a href={portfolio_url}>
                    <img src={medium} alt="" className="user-img" />
                  </a>
                </div>
              </article>
            );
          }
        })}
      </div>
      {loading && <h2 className="loading">Loading...</h2>}
    </section>
  );
};

export default Photos;
