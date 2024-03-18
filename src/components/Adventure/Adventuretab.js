import React, { useEffect, useState } from 'react';
import { Outlet, useLocation, useNavigate, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAdventureDataByID } from '../../store/Actions/storyActions';
import wordlogo from '../../image/wordExplorer-logo.png'
import storylogo from '../../image/story-logo.png'
import brainlogo from '../../image/brainquest-logo.png'
import '../css/Adventuretab.css';
import '../../App.css'; // Create a separate CSS file for styling if needed
import Header from '../Header';

const Tabs = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [activeTab, setActiveTab] = useState('tab1');
  const data = useSelector((state) => state.Story.DetailData);
  // console.log(data)
  useEffect(() => {
    dispatch(fetchAdventureDataByID(id));
    if(activeTab === "tab1"){
      navigate('wordexplore')
    }
  }, [dispatch, id]);

  const handleTabClick = (tabId) => {
    setActiveTab(tabId);
    switch (tabId) {
      case 'tab1':
        navigate('wordexplore');
        break;
      case 'tab2':
        navigate('Questinnertab');
        break;
      // Add more cases if needed
      case 'tab3':
        navigate('wordstoryinnertab')
        break;
      default:
        break;
    }
  };

  const location = useLocation();


  const BackHandler = () => {
    let from = location.pathname;
    var trimmedUrl = from.split('/')[1];

    // Remove the last 3 characters from trimmedUrl
    trimmedUrl = trimmedUrl.slice(0, -3);

    // Navigate without keeping the previous URL in the history
    const navigateUrl = `/${trimmedUrl}`;
    navigate(navigateUrl, { replace: true });
  }

  return (

    <div>

      <div className="tab-container">
      <div className='headerdiv'>
        <Header/>
      </div>
        <div className='topheading'>{data?.Title}</div>
        <div className='tabbutton'>
        <div className={`tab ${activeTab === '' ? 'active' : ''}`} onClick={() =>BackHandler()}>Back</div>
        <div className={`tab ${activeTab === 'tab1' ? 'active' : ''}`} onClick={() => handleTabClick('tab1')}>
            <img style={{marginRight:"20px"}} width={30} src={wordlogo} alt={wordlogo}/>
              Word Explores
        </div>
        <div className={`tab ${activeTab === 'tab2' ? 'active' : ''}`} onClick={() => handleTabClick('tab2')}>
            <img style={{marginRight:"20px"}} width={30} src={storylogo} alt={storylogo}/>
            Story Adventure
        </div>
        <div className={`tab ${activeTab === 'tab3' ? 'active' : ''}`} onClick={() => handleTabClick('tab3')}>
            <img style={{marginRight:"20px"}} width={30} src={brainlogo} alt={brainlogo}/>
              Brain Quest
        </div>
        </div>
        <div className='outlet_div' >
        <Outlet/>
        </div>
      </div>
    </div>
  );
};

export default Tabs;
