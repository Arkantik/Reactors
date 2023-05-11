import { useEffect, useState } from "react";
import axios from "axios";

function useFetch(url) {
  const [data, setData] = useState();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const controller = new AbortController();
  const { signal } = controller;

  useEffect(() => {
    axios
      .get(url, { signal })
      .then((res) => setData(res.data))
      .catch((err) => {
        console.error(`Error when retrieving data from API: ${err.message}`);
        setError(
          `An error has occured when retrieving data from API: ${err.message}`
        );
      })
      .finally(() => setLoading(false));

    return function cleanUp() {
      controller.abort();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return { data, error, loading };
}

export default useFetch;
