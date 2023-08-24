import { useState, useEffect } from "react";
import axios from "axios";
import paginate from "./paginate";

const url = "https://api.github.com/users/john-smilga/followers?per_page=100";
export const useFetch = () => {
  const [state, setState] = useState({
    isLoading: true,
    error: false,
    data: [],
  });

  const fetchData = async () => {
    try {
      const { data } = await axios(url);
      setState((prevState) => {
        return { ...prevState, isLoading: false, data: paginate(data) };
      });
    } catch (error) {
      setState((prevState) => {
        return { ...prevState, error: true };
      });
      console.log(error);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);
  return state;
};
