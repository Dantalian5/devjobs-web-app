const Error404 = () => {
  return (
    <div className='error-msj'>
      <h2 className='f-h1 error-msj__title'>
        404 ... Unable to load the content
      </h2>
      <p className='f-h4 error-msj__body'>
        Ups...there was an error loading the data, please, try again later or
        cantact us
        <span>
          {' '}
          <a href='https://marcosvalenzuela.netlify.app'>MValenzuela</a>
        </span>
      </p>
    </div>
  );
};

export default Error404;
