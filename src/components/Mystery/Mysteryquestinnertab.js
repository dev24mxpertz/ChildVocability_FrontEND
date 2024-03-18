import React from 'react';
import '../../components/css/Quest.css';
import { useSelector } from 'react-redux';

const Mysteryquestinnertab = () => {
  const data = useSelector((state) => state.Story.DetailData);
  // console.log(data);
  return (
    <div className="d-flex flex-column justify-content-center align-items-center">
      <h2>{data?.Storyadvenure?.Storytitle}</h2>
      {data?.Storyadvenure?.content?.map((val, index) => (
        <div className="w-50 mt-2" key={index}>
          {val?.Paragraph?.map((p, i) => (
            <p key={i} className="mt-4 text-start fs-5">
              {p}
            </p>
          ))}
          <div className="image_storyadvenure_div">
            {val?.Storyimage?.map((image, i) => (
              <img
                className="mt-2 mx-2"
                width={750}
                src={`https://ik.imagekit.io/dev24/${image}`}
                alt={image}
              />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default Mysteryquestinnertab