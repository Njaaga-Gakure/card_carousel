import { createContext, useContext, useState, useEffect } from "react";
import { useFetch } from "../useFetch";
const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const { isLoading: loading, data, error } = useFetch();
  const [page, setPage] = useState(0);
  const [followers, setFollowers] = useState([]);

  useEffect(() => {
    if (loading) return;
    setFollowers(data[page]);
  }, [loading, page]);
  const handlePageChange = (index) => {
    setPage(index);
  };
  const handlePrevPage = () => {
    setPage((prevPage) => {
      const newPage = prevPage - 1;
      if (newPage < 0) {
        setPage(0);
      } else {
        setPage(newPage);
      }
    });
  };
  const handleNextPage = () => {
    setPage((prevPage) => {
      const newPage = prevPage + 1;
      if (newPage > 6) {
        setPage(6);
      } else {
        setPage(newPage);
      }
    });
  };
  const handlePageStart = () => {
    setPage(0);
  };
  const handlePageEnd = () => {
    setPage(6);
  };
  return (
    <AppContext.Provider
      value={{
        loading,
        data,
        followers,
        error,
        page,
        handlePageChange,
        handlePrevPage,
        handleNextPage,
        handlePageStart,
        handlePageEnd,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => {
  return useContext(AppContext);
};
