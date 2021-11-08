import Loader from 'react-loader-spinner';
export default function Loading() {
  return (
    <Loader
      type="Bars"
      color="#C9ADA7"
      height={200}
      width={300}
      timeout={3000} //3 secs
    />
  );
}
