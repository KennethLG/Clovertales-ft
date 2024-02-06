import { useState, useEffect } from "react";
import useSWR from "swr";

interface UseApiRequestProps<T> {
  url: string;
  init?: RequestInit;
}

const useApiRequest = <T>({ url, init }: UseApiRequestProps<T>) => {
  const { data, error } = useSWR(url, async (url) => {
    const response = await fetch(url, init);
    const data = await response.json();

    if (response.status === 404) {
      throw new Error(data.message);
    }

    return data as T;
  });

  return { data, error };
};

export default useApiRequest;
