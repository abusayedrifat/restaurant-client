import { useLoaderData } from "react-router-dom";
import "./gallary.css";
import { Tooltip } from "react-tooltip";

const Gallery = () => {
  const dbData = useLoaderData();
  console.log(dbData.length);

  return (
    <div className="container h-full ">
      <div className="foreground flex justify-center items-center">
        <h2 className="text-6xl text-[#2e2e2e2c] font-extrabold  background-text ">
          Food Gallary
        </h2>

        <div className="images space-y-4">
          {dbData.map((loadImages) => (
            <div className="images">
              <a
                data-tooltip-id="my-tooltip-data-html"
                className="text-"
                data-tooltip-html={` <div>
            <ul className="text-lg">
              <li className='font-bold'>${loadImages.foodName} </li>
              <li> ${loadImages.description}  </li>
            </ul>
          </div>`}
              >
                <img src={loadImages.imgURL} alt="" />
              </a>
              <Tooltip id="my-tooltip-data-html" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Gallery;

{
  /* <div>
              <div class="card">
                <div class="card-inner">
                  <div class="card-front">
                    <img src={loadImages.imgURL} alt="" />
                  </div>
                  <div class="card-back">
                    <h3>{loadImages.foodName}</h3>
                    <p>{loadImages.description}</p>
                  </div>
                </div>
              </div>
            </div> */
}
{/* <div className="images">
  <a
    data-tooltip-id="my-tooltip-data-html"
    className="text-"
    data-tooltip-html={` <div>
            <ul className="text-lg">
              <li className='font-bold'>${loadImages.foodName} </li>
              <li> ${loadImages.description}  </li>
            </ul>
          </div>`}
  >
    <img src={loadImages.imgURL} alt="" />
  </a>
  <Tooltip id="my-tooltip-data-html" />
</div>; */}

{
  /* <div>
              <div class="card">
                <div class="card-inner">
                  <div class="card-front">
                    <img src={loadImages.imgURL} alt="" />
                  </div>
                  <div class="card-back">
                    <h3 className="font-bold">{loadImages.foodName}</h3>
                    <p>{loadImages.description}</p>
                    <p> {loadImages.imgURL} </p>
                  </div>
                </div>
              </div>
            </div> */
}
