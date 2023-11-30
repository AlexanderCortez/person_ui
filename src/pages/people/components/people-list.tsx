import React from 'react';
import Table, { TableColumns } from 'components/table';
import { usePeople } from 'queries/entities/people';
import { IPerson, IPersonQueryParams } from 'types';

const PeopleList = () => {
  const [queryParams, setQueryParams] = React.useState<IPersonQueryParams>({
    sortBy: 'name',
    sortDir: 'desc',
  });
  const { data = [], isLoading, refetch } = usePeople(queryParams);

  React.useEffect(() => {
    if (!isLoading) {
      refetch();
    }
  }, [queryParams, isLoading, refetch]);

  const columns: TableColumns<IPerson> = [
    {
      title: 'Name',
      dataIndex: 'name',
      sortable: true,
    },
    { title: 'Favorite movie', dataIndex: 'favoriteMovie', sortable: true },
    {
      title: 'Date',
      dataIndex: 'date',
      formatter: (date: Date) => new Date(date).toLocaleString(),
      sortable: true,
    },
  ];

  const onSort = (dataIndex: keyof IPerson, dir: 'asc' | 'desc') => {
    setQueryParams({ sortBy: dataIndex, sortDir: dir });
  };

  return (
    <Table
      columns={columns}
      rows={data}
      sortBy={queryParams.sortBy}
      onSort={onSort}
      sortDir={queryParams.sortDir}
      isLoading={isLoading}
    />
  );
};

export default PeopleList;
