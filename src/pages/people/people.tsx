import Typography from '@mui/material/Typography';
import PeopleList from './components/people-list';

const People = () => {
  return (
    <>
      <Typography fontWeight={500} variant="h4" gutterBottom>
        People
      </Typography>
      <PeopleList />
    </>
  );
};

export default People;
