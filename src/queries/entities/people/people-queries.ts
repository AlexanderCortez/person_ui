import { UseQueryResult, useQuery } from 'react-query';
import * as api from './people-api';
import { IPerson, IPersonQueryParams } from 'types';

const getQueryId = (...ids: (string | number)[]): (string | number)[] => [
  'people',
  ...ids,
];

export const usePeople = (
  params: IPersonQueryParams,
): UseQueryResult<IPerson[]> =>
  useQuery(getQueryId('list'), () => api.getPeople(params));
