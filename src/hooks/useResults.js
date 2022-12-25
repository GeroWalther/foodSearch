import { useEffect, useState } from "react";
import yelp from "../api/yelp";
function useResults() {
  const [results, setResults] = useState([]);
  const [errMsg, setErrMsg] = useState("");
  const searchApi = async (searchTerm) => {
    console.log("hi there");
    try {
      const response = await yelp.get("/search", {
        params: {
          limit: 50,
          term: searchTerm,
          location: "san jose",
        },
      });
      setResults(response.data.businesses);
    } catch (e) {
      setErrMsg("Smth went wrong");
    }
  };
  useEffect(() => {
    searchApi("pasta");
  }, []);

  return [searchApi, results, errMsg];
}
export default useResults;
