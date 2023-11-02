import axios from "axios";
import useSWR from "swr";
const BASE_URL = "https://65116d58829fa0248e400a4e.mockapi.io/form/accounts";

interface AccountDataProp {
  age: string;
  avatar: string;
  email: string;
  id: number;
  name: string;
  role: string;
  status: string;
  team: string;
}
const fetcher = async function (url: string) {
  const response = await axios.get(url);
  return response.data;
};

export const useAccountData = function (url: string) {
  const { data, isLoading, error } = useSWR<AccountDataProp[]>(
    BASE_URL + url,
    fetcher
  );
  return { data, isLoading, error };
};
