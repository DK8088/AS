import { useEffect, useState } from "react";

function UseJsonData(path) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:5001/${path}/`)
      .then((res) => {
        if (!res.ok) throw new Error("Failed to load JSON file");
        return res.json();
      })
      .then((json) => setData(json))
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  }, [path]);

  return { data, loading, error };
}

export default UseJsonData;
