import axios from 'lib/services-gateway-axios';
import { IApiResponse, IPerson, IPersonQueryParams } from 'types';

export const getPeople = async (
  params: IPersonQueryParams,
): Promise<IPerson[]> => {
  const { data: response } = await axios.get<IApiResponse<IPerson[]>>(
    '/people',
    { params },
  );

  return response.data;
};
