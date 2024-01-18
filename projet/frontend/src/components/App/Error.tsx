const Error = ({ message }: { message: string }) => {
  return (
    <div className="error">
      <h2>Veuillez nous excuser, une erreur est survenue !</h2>
      <br />
      <p>{message}</p>
    </div>
  );
};

export default Error;
