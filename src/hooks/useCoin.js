import { useEffect, useState } from "react";

export const useCoin = function (id) {
  const [coin, setCoin] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(
    function () {
      async function fetchCoin() {
        try {
          setIsLoading(true);
          setError("");

          const res = await fetch(
            `https://api.coingecko.com/api/v3/coins/${id}`
          );

          if (!res.ok) throw new Error("Something went wrong with fetching");

          const data = await res.json();
          setCoin(data);
        } catch (err) {
          setError(err);
        } finally {
          setIsLoading(false);
        }
      }
      fetchCoin();
    },
    [id]
  );

  return { coin, isLoading, error };
};
