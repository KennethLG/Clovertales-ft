import { useState, useEffect } from "react";
import useSWR from "swr";

interface UseApiRequestProps<T> {
  url: string;
  init?: RequestInit;
}

const useApiRequest = <T>({ url, init }: UseApiRequestProps<T>) => {
  const [data, setData] = useState<T | null>(null);
  const [error, setError] = useState<Error | null>(null);
  const { data: responseData, error: responseError } = useSWR(
    url,
    async (url) => {
      const response = await fetch(url, init);
      const data = await response.json();

      if (response.status === 404) {
        throw new Error(data.message);
      }

      return data as T;
    }
  );

  useEffect(() => {
    if (responseData) {
      setData(responseData);
    }
    if (responseError) {
      setError(responseError);
    }
  }, [responseData, responseError]);

  return { data, error };
};

export default useApiRequest;
