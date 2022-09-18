import Nav from "./Nav";
import "./style.css";
import { Link } from "react-router-dom";
const Home = () => {
  return (
    <div className="home">
      <div className="first">
        <Nav></Nav>
        <div className="homeContent">
          <video autoPlay muted loop id="myVideo">
            <source src="video-1.mp4" type="video/mp4" />
          </video>

          <h1>ADVENTURE AWAITS</h1>

          <h3>WHAT ARE YOU WAITING FOR</h3>
          <button className="homeBtn"> GET STARTED</button>
        </div>
      </div>
      <div className="second">
        <h1>check our EPIC Destinatons!</h1>
        <div className="ImagesOfDestinations">
          <div className="imgfirsrow">
            <div className="img">
              {" "}
              <img src="img-9.jpg" alt="" />
            </div>
            <strong>
              Lorem quia velit autem vel aperiam pariatur dolores ipsam dolorem.
            </strong>
          </div>
          <div className="imgfirsrow">
            <div className="img">
              <img src="img-2.jpg" alt="" />
            </div>
            <strong>
              Lorem quia velit autem vel aperiam pariatur dolores ipsam dolorem.
            </strong>
          </div>
          <div className="imgsecondrow">
            <div className="img2">
              <img src="img-3.jpg" alt="" />
            </div>
            <strong>
              Lorem quia velit autem vel aperiam pariatur dolores ipsam dolorem.
            </strong>
          </div>
          <div className="imgsecondrow">
            <div className="img2">
              <img src="img-4.jpg" alt="" />
            </div>
            <strong>
              Lorem quia velit autem vel aperiam pariatur dolores ipsam dolorem.
            </strong>
          </div>
          <div className="imgsecondrow">
            <div className="img2">
              <img src="img-8.jpg" alt="" />
            </div>
            <strong>
              Lorem quia velit autem vel aperiam pariatur dolores ipsam dolorem.
            </strong>
          </div>
        </div>
      </div>
      <div className="thirt">
        <div className="firstOfFooter">
          <h2>Lorem ipsum dolor fuga aliquid vero accusantium voluptas.</h2>
          <h4>Lorem ipsum dolor fuga aliquid.</h4>
          <div>
            <input
              className="footerInput"
              type="text"
              placeholder="Your Email"
            />
            <button className="footerBtn">Subsctibe</button>
          </div>
        </div>
        <div className="secondOfFutter">
          <div>
            <h2>About us</h2>
            <p>mirzasss</p>
            <p>mirzasss</p>
            <p>mirzasss</p>
            <p>mirzasss</p>
            <p>mirzasss</p>
          </div>

          <div>
            <h2>About us</h2>
            <p>mirzasss</p>
            <p>mirzasss</p>
            <p>mirzasss</p>
            <p>mirzasss</p>
            <p>mirzasss</p>
          </div>
          <div>
            <h2>About us</h2>
            <p>mirzasss</p>
            <p>mirzasss</p>
            <p>mirzasss</p>
            <p>mirzasss</p>
            <p>mirzasss</p>
          </div>
          <div>
            <h2>About us</h2>
            <p>mirzasss</p>
            <p>mirzasss</p>
            <p>mirzasss</p>
            <p>mirzasss</p>
            <p>mirzasss</p>
          </div>
        </div>
        <div className="footerLastDiv">
          <h1>TRVL</h1>
          <p>trvl 2020 </p>
          <div>
            <img src="facebook.png" alt="fb" />
            <img src="twitter.png" alt="tt" />
            <img src="instagram.png" alt="insta" />
            <img src="youtube.png" alt="yt" />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Home;
