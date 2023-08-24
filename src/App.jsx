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
        {/* <button className="prev-btn--start">
          <FiChevronsLeft />
        </button> */}
        <button onClick={handlePrevPage} className="prev-btn">
          <FiChevronLeft />
        </button>
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
        <button onClick={handleNextPage} className="next-btn">
          <FiChevronRight />
        </button>
        {/* <button className="next-btn--end">
          <FiChevronsRight />
        </button> */}
      </div>
    </main>
  );
}

export default App;
