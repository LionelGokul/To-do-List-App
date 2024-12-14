import { useState, useCallback, useRef, useEffect } from "react";

interface FetchError extends Error {
  message: string;
}

export const useFetch = () => {
  // is loading could be used for a ui spinner to let the user know that the application is loading
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const activeHttpRequests = useRef<AbortController[]>([]);

  const sendRequest = useCallback(
    async (
      url: string,
      method: string = "GET",
      body: BodyInit | null = null,
      headers: Record<string, string> = {}
    ) => {
      setIsLoading(true);

      const httpAbortCtrl = new AbortController();
      activeHttpRequests.current.push(httpAbortCtrl);

      try {
        const response = await fetch(
          `${process.env.NEXT_PUBLIC_API_URL}/${url}`,
          {
            method,
            body,
            headers,
            signal: httpAbortCtrl.signal,
          }
        );

        const responseData = await response.json();

        // Remove the abort controller from the active list
        activeHttpRequests.current = activeHttpRequests.current.filter(
          (reqCtrl) => reqCtrl !== httpAbortCtrl
        );

        if (!response.ok) {
          setError(responseData.message || "Something went wrong!");
          throw new Error(responseData.message || "Something went wrong!");
        }

        return responseData;
      } catch (err: unknown) {
        if ((err as DOMException).name === "AbortError") {
          return;
        }
        const error = err as FetchError;
        setError(error.message);
        throw error;
      } finally {
        setIsLoading(false);
      }
    },
    []
  );

  const clearError = () => {
    setError(null);
  };

  useEffect(() => {
    return () => {
      activeHttpRequests.current.forEach((abortCtrl) => abortCtrl.abort());
    };
  }, []);

  return { isLoading, error, sendRequest, clearError };
};
