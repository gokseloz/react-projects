import React, { useState, useEffect } from "react";
import { FaSearch } from "react-icons/fa";
import Photos from "./Photos";

const clientID = `?client_id=${process.env.REACT_APP_ACCESS_KEY}`;
const mainUrl = `https://api.unsplash.com/photos/`;
const searchUrl = `https://api.unsplash.com/search/photos/`;

function App() {
  const [loading, setLoading] = useState(false);
  const [query, setQuery] = useState("");
  const [page, setPage] = useState(1);
  const [photos, setPhotos] = useState([]);
  const [hasMorePhotos, sethasMorePhotos] = useState(false);

  useEffect(() => {
    fetchImages();
  }, [page]);

  const getUrl = (query, urlPage, urlQuery) => {
    if (query) {
      return `${searchUrl}${clientID}${urlPage}${urlQuery}`;
    } else {
      return `${mainUrl}${clientID}${urlPage}`;
    }
  };

  const fetchImages = () => {
    setLoading(true);
    const urlPage = `&page=${page}`;
    const urlQuery = `&query=${query}`;
    const url = getUrl(query, urlPage, urlQuery);
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setPhotos((prevPhotos) => {
          if (query && page === 1) {
            return data.results;
          } else if (query) {
            return [...prevPhotos, ...data.results];
          } else {
            return [...prevPhotos, ...data];
          }
        });
        sethasMorePhotos(data.results.length > 0);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        sethasMorePhotos(false);
        setLoading(false);
      });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!query) return;
    if (page === 1) {
      fetchImages();
    }
    setPage(1);
  };

  return (
    <main>
      <section className="search">
        <form className="search-form">
          <input
            type="text"
            placeholder="search"
            value={query}
            className="form-input"
            onChange={(e) => setQuery(e.target.value)}
          />
          <button type="submit" className="submit-btn" onClick={handleSubmit}>
            <FaSearch />
          </button>
        </form>
      </section>
      <Photos
        hasMorePhotos={hasMorePhotos}
        setPage={setPage}
        loading={loading}
        photos={photos}
      />
    </main>
  );
}

export default App;
