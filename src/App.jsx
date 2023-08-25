import { useAppContext } from "./context/AppContext";
import Follower from "./components/Follower";
import {
  FiChevronRight,
  FiChevronLeft,
  FiChevronsRight,
  FiChevronsLeft,
} from "react-icons/fi";

function App() {
  const {
    loading,
    error,
    followers,
    data,
    page,
    handlePageChange,
    handlePrevPage,
    handleNextPage,
    handlePageStart,
    handlePageEnd,
  } = useAppContext();

  console.log(followers);
  if (loading) {
    return (
      <div className="full-page loading-container">
        <div className="loading">
          <div className="dot"></div>
          <div className="dot"></div>
          <div className="dot"></div>
        </div>
      </div>
    );
  }
  if (error) {
    return (
      <div className="error">
        <h5 className="error__text">
          something went wrong, try again later :(
        </h5>
      </div>
    );
  }
  return (
    <main className="full-page">
      <div className="card-container center-container">
        {followers.map((follower) => {
          return <Follower key={follower.id} {...follower} />;
        })}
      </div>
      <div className="btn-container">
        <div onClick={handlePageStart} className="prev-btn--start">
          <FiChevronsLeft />
        </div>
        <div onClick={handlePrevPage} className="prev-btn">
          <FiChevronLeft />
        </div>
        {data.slice(0, 7).map((_, index) => {
          return (
            <button
              onClick={() => handlePageChange(index)}
              className={page === index ? "page-btn active" : "page-btn"}
              key={index}
            >
              {index + 1}
            </button>
          );
        })}
        <div onClick={handleNextPage} className="next-btn">
          <FiChevronRight />
        </div>
        <div onClick={handlePageEnd} className="next-btn--end">
          <FiChevronsRight />
        </div>
      </div>
    </main>
  );
}

export default App;
