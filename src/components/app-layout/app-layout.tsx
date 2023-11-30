import Box from '@mui/material/Box';
import { styled } from '@mui/material';

const Container = styled(Box)(() => ({
  display: 'flex',
}));

const Content = styled(Box)(({ theme }) => ({
  flexGrow: 1,
  padding: theme.spacing(3),
  minHeight: '100vh',
}));

const AppLayout: React.FC<React.PropsWithChildren> = ({ children }) => {
  return (
    <Container>
      <Content>{children}</Content>
    </Container>
  );
};

export default AppLayout;
