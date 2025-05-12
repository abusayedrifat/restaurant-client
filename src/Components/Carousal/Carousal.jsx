import './carousal.css'
const Carousal = () => {
    return (
      <div className="carousel w-full">
      <div id="slide1" className="carousel-item relative w-full">
        <img
          src="https://i2.wp.com/www.downshiftology.com/wp-content/uploads/2024/01/Meatloaf-main.jpg" className="w-full max-h-screen" />
        <div className="absolute w-full h-full shades">
        </div>
        
        <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
          <a href="#slide4" className="btn btn-circle">❮</a>
          <a href="#slide2" className="btn btn-circle">❯</a>
        </div>
      </div>
      <div id="slide2" className="carousel-item relative w-full">
        <img
          src="https://potatorolls.com/wp-content/uploads/2020/10/Cheeseburger-Hot-Dog2.jpg"
          className="w-full max-h-screen"/>
          <div className="absolute w-full h-full shades">
        </div>
        <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
          <a href="#slide1" className="btn btn-circle">❮</a>
          <a href="#slide3" className="btn btn-circle">❯</a>
        </div>
      </div>
      <div id="slide3" className="carousel-item relative w-full">
        <img
          src="https://cdn.tasteatlas.com/images/dishes/79dceb1607db46a7af6a42e2f84417a9.jpg?m=facebook"
          className="w-full max-h-screen" />
          <div className="absolute w-full h-full shades">
        </div>
        <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
          <a href="#slide2" className="btn btn-circle">❮</a>
          <a href="#slide4" className="btn btn-circle">❯</a>
        </div>
      </div>
      <div id="slide4" className="carousel-item relative w-full">
        <img
          src="https://www.errenskitchen.com/wp-content/uploads/2018/08/couscous-c.jpg"
          className="w-full max-h-screen" />
          <div className="absolute w-full h-full shades">
        </div>
        <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
          <a href="#slide3" className="btn btn-circle">❮</a>
          <a href="#slide1" className="btn btn-circle">❯</a>
        </div>
      </div>
    </div>
    );
};

export default Carousal;