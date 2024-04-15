import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Home.css";

const Home = () => {
  const [input, setInput] = useState("");

  const navigate = useNavigate();

  const submitHandler = () => {
    navigate(`room/${input}`);
  };

  return (
    <div className="home-background">
      <div className="home-content flex gap-6">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Enter your name"
          className="outline-none py-2 rounded-full w-full px-10 text-center "
        />
        <button onClick={submitHandler} className="bg-white w-24 rounded-full">Join</button>
      </div>
    </div>
  );
};

export default Home;
