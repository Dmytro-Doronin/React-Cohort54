import { useState, useCallback } from "react";
import { getErrorMessage } from "../utils/get-error.ts";
import { useNotification } from "./useNotification.tsx";

export const useFetch = <T, A extends unknown[] = unknown[]>(
  callback: (...args: A) => Promise<T>,
) => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState<T | null>(null);
  const [error, setError] = useState<string | null>(null);
  const { notify } = useNotification();
  const request = useCallback(
    async (...args: A): Promise<T | null> => {
      setLoading(true);
      setError(null);
      setData(null);

      try {
        const result = await callback(...args);
        setData(result);
        return result;
      } catch (err: unknown) {
        const message = getErrorMessage(err);
        setError(message);
        notify({ variant: "error", message: message || "Unknown error" });
        return null;
      } finally {
        setLoading(false);
      }
    },
    [callback],
  );
  return { loading, error, data, request, setData };
};
