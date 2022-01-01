import React, { useState, useEffect } from "react";
import Follower from "./Follower";
import Pagination from "./Pagination";

function App() {
  const [followers, setFollowers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [followerPerPage] = useState(10);

  const fetchFollowers = async () => {
    setLoading(true);
    const res = await fetch(
      "https://api.github.com/users/john-smilga/followers?per_page=100"
    );
    const data = await res.json();
    setFollowers(data);
    setLoading(false);
  };

  useEffect(() => {
    fetchFollowers();
  }, []);

  // Get current followers
  const indexOfLastPost = currentPage * followerPerPage;
  const indexOfFirstPost = indexOfLastPost - followerPerPage;
  const currentFollowers = followers.slice(indexOfFirstPost, indexOfLastPost);

  // Change the page
  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <main>
      <div className="section-title">
        <h1>pagination</h1>
        <div className="underline"></div>
      </div>
      <Follower followers={currentFollowers} loading={loading} />
      {!loading && (
        <Pagination
          followerPerPage={followerPerPage}
          totalFollowers={followers.length}
          currentPage={currentPage}
          paginate={paginate}
        />
      )}
    </main>
  );
}

export default App;
