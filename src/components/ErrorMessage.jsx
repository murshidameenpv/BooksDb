/* eslint-disable react/prop-types */
const ErrorMessage = ({ message }) => {
  if (!message) return null;
  return (
    <div className="text-center text-sm font-medium italic my-5 text-red-900">
      {message}
    </div>
  );
};


export default ErrorMessage;
