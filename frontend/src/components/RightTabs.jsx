import { useState } from "react";
import "./RightTabs.css";

const RightTabs = () => {
  const [active, setActive] = useState("trending");

  return (
    <>
      <div className="tabs">
        <button onClick={() => setActive("trending")}>Trending</button>
        <button onClick={() => setActive("inverted")}>
          Inverted Popularity
        </button>
        <button onClick={() => setActive("related")}>Related</button>
      </div>

      <div className="tab-content">
        {active === "trending" && <p>🔥 High engagement gossips</p>}
        {active === "inverted" && <p>🧠 Underrated but accurate</p>}
        {active === "related" && <p>🔗 Similar discussions</p>}
      </div>
    </>
  );
};

export default RightTabs;
