import Nav from "./Nav";
import "./style.css";

const Home = () => {
  return (
    <div>
      <div className="home">
        <Nav></Nav>
        <video autoPlay muted loop id="myVideo">
          <source src="video-1.mp4" type="video/mp4" />
        </video>
        <div className="homeContent">
          <h1>ADVENTURE AWAITS</h1>
          <h3>WHAT ARE YOU WAITING FOR</h3>
          <button className="homeBtn"> GET STARTED</button>
        </div>
      </div>
      <div className="destinations">
        <img className="img9" src="img-9.jpg" alt="" />
      </div>
    </div>
  );
};
export default Home;
