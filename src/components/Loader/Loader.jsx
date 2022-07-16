import { Circles } from 'react-loader-spinner';
import { LoaderContainer } from './Loader.styled';

export const Loader = () => {
  return (
    <LoaderContainer>
      <Circles
        color="#000"
        height={100}
        width={100}
        timeout={3000}
      />
    </LoaderContainer>
  );
};