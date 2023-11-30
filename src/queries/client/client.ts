import { QueryClient } from 'react-query';

const defaultOptions = {
  queries: {
    refetchOnWindowFocus: false,
    staleTime: 5000,
    retry: 1,
  },
};

const queryClient = new QueryClient({ defaultOptions });

export default queryClient;
