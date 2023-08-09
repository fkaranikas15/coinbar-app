import { useState } from "react";
import { useEffect } from "react";

export const useCoins = function () {
  const [coins, setCoins] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(function () {
    async function fetchCoins() {
      try {
        setIsLoading(true);
        setError("");

        const res = await fetch(
          "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd"
        );

        if (!res.ok)
          throw new Error("Something went wrong with fetching coins");

        const data = await res.json();
        setCoins(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setIsLoading(false);
      }
    }
    fetchCoins();
  }, []);

  return { coins, isLoading, error };
};
