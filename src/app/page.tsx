"use client"

import { useState } from "react";

const Home: React.FC = () => {
  const [count, setCount] = useState<number>(0);
  const Addfn = () => {
    setCount(count + 1);
  }
  const Delefn = () => {
    setCount(count - 1);
  }
  return (
    <>
      <div className="h-screen w-full flex gap-3 flex-col justify-center items-center">
        <h1>{count}</h1>
        <div className="flex gap-5">
          <button onClick={Addfn} className="px-6 py-1 bg-gray-400 text-white  rounded-xl">Add</button>
          <button onClick={Delefn} className="px-6 py-1 bg-gray-400 text-white rounded-xl">sub</button>
        </div>
      </div>
    </>
  );
}

export default Home;