import React, { useState } from "react";

const Home = (): JSX.Element => {
  const [test, setTest] = useState(true);

  return (
    <div className="container">
      <h1 className="title">Home</h1>
      <p>
        Это домашняя страница.
      </p>
    </div>
  );
};

export default Home;
