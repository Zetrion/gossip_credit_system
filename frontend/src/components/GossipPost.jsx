import "./GossipPost.css";

const GossipPost = () => {
  return (
    <div className="post">
      <div className="post-header">
        <span className="user">Anonymous</span>
        <span className="time">2h ago</span>
      </div>

      <div className="post-content">
        Heard a rumour about a startup acquisition 👀
      </div>

      <div className="post-actions">
        <button>⬆ Boost</button>
        <button>💬 Discuss</button>
        <button>🔁 Share</button>
        <button>🧠 Analyze</button>
      </div>
    </div>
  );
};

export default GossipPost;
