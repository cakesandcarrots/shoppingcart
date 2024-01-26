import "./Homepage.css";
function Homepage() {
  return (
    <>
      <div className="contentwrapper">
        <div className="top">
          <img
            className="clothes"
            src="https://images.pexels.com/photos/996329/pexels-photo-996329.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="clothes image"
          />
          <img
            className="shoes"
            src="https://images.pexels.com/photos/267320/pexels-photo-267320.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="Shoes image"
          />
        </div>
        <div className="bottom">
          <img
            className="extra"
            src="https://images.pexels.com/photos/264591/pexels-photo-264591.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt=""
          />
        </div>
      </div>
    </>
  );
}

export default Homepage;
