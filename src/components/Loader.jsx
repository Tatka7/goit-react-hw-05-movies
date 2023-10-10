import { Dna } from 'react-loader-spinner';

export const Loader = ({ pending }) => {
  return (
    <Dna
      visible={true}
      height="500"
      width="700"
      ariaLabel="dna-loading"
      wrapperStyle={{}}
      wrapperClass="dna-wrapper"
    />
  );
};
