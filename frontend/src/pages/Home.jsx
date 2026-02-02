import GossipPost from "../components/GossipPost";
import RightTabs from "../components/RightTabs";
import ChatColumn from "../components/ChatColumn";
import "./Home.css";

const Home = () => {
  return (
    <div className="layout">
      {/* Center Content */}
      <div className="center">
        <GossipPost />
      </div>

      {/* Right Sidebar */}
      <div className="right">
        <RightTabs />
      </div>

      {/* Chat Column */}
      <div className="chat">
        <ChatColumn />
      </div>
    </div>
  );
};

export default Home;
