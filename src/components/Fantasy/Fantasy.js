import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
// import Button from 'react-bootstrap/Button';
import { fetchAllFantary, fetchCompletedFantasy, fetchInProgressFantasy, fetchNewFantasy } from '../../store/Actions/storyActions';
import { useNavigate } from 'react-router-dom';
import Header from '../Header';

const Stories = () => {

    const dispatch = useDispatch()
   const fantasys =  useSelector((state) => state.Story.AllFantary)

useEffect(() => {
dispatch(fetchAllFantary())
}, [dispatch])

const navigate = useNavigate()

const Fantasytab = (id) => {
    navigate(`/Fantasytab/${id}`)
}

const getStatusButtonColor = (status) => {
    switch (status) {
      case 'New':
        return '#87CEEB';
      case 'Completed':
        return '#28a745';
      case 'In Progress':
        return '#ffc107';
        case 'Not Completed':
            return '#87CEEB';
        case 'Not completed':
            return '#87CEEB';
      default:
        return '#007bff'; // Default button color
    }
  };

  const All_Story_Handler = () => {
    dispatch(fetchAllFantary())
  }

  const Completed_Story_Handler = () => {
    dispatch(fetchCompletedFantasy())
  }

  const InProgress_Story_Handler = () => {
    dispatch(fetchInProgressFantasy())
  }

  const NotStarted_Story_Handler = () => {
    dispatch(fetchNewFantasy())
  }
  
    return (
        <div className='mainbox'>
        <div className='headerdiv'>
          <Header/>
        </div>
              <div className='Stories-body'>
                  <div className='storiesnadbutton'>
                    <div>
                    <h4 style={{ fontWeight: 800 }}>Fantasy Stories</h4>
                    </div>
                    
                    <div className='status_button_div'>
                        <button onClick={All_Story_Handler} className='All_btn'>Clear All</button>
                        <button onClick={Completed_Story_Handler} className='Complete_btn'>Completed</button>
                        <button onClick={InProgress_Story_Handler} className='Pending_btn'>In Progress</button>
                        <button onClick={NotStarted_Story_Handler} className='Incomplete_btn'>New</button>
                    </div>
                  </div>
                 
                  <div className='container'> 
                  {fantasys?.length > 0 ? (
                      fantasys?.map((data) => (
                        <div className='card-style' key={data._id}>
                        <div>
                            <div className='card-upper'>
                              <img src={` https://ik.imagekit.io/dev24/${data?.Image}`} className='card-image' alt={`${data.Title}`} />
                            </div>
                            <h6 onClick={()=> Fantasytab(data?._id)} className='tab-h6-style'>{data?.Title}</h6>
                        </div>
                          <button className='card-btn-lower' style={{ backgroundColor: getStatusButtonColor(data?.Status) }}>{data?.Status}</button>
                  </div>
                      ))
                  ) : (<p>No  Fantsy are available right now !</p>)}             
                  </div>
              </div>
          </div>
    )
}
// https://ik.imagekit.io/dev24/api/images/${data.Image}
//second tab     background: linear-gradient(135deg, #32b8d7, #32b8d7, #7e71e4, #ef9d64);
//third tab     background: #f84e73;
export default Stories
