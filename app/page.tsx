import React from "react";

const Home = () => {
  return (
    <div>
      {/* Hero */}
      <div
        className="bg-cover bg-center flex flex-col items-center justify-center"
        style={{
          backgroundImage: "url('/hero-bg.avif')",
          minHeight: "500px",
        }}
      >
        <div>SmartABI</div>
        <div>React Library for Dynamic dApp UIs</div>
      </div>
      {/* article */}
      <div className="flex flex-col scroll-container">
        <div className=" flex flex-col scroll-item justify-center items-center h-screen">
          snap1
        </div>
        <div className=" flex flex-col scroll-item justify-center items-center h-screen">
          snap2
        </div>
      </div>
    </div>
  );
};

export default Home;
