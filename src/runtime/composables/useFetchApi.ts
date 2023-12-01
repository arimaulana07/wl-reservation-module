import { useFetch } from "#imports";
import { endpoint } from "../apiCollections";
import type { ApiCallPayload } from "../interface";

export const useFetchApi = ({ action, body = null, params = null }: ApiCallPayload) => {
  const { url, method } = endpoint[action];
  const { data, error } = useFetch(url, {
    method,
    params,
    body,
  });

  return { data, error };
};
