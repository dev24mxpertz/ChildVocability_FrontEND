import React from 'react'
import { useNavigate } from 'react-router-dom'

const Home = () => {
const navigate = useNavigate()
const FantaryHandler = () => {
    navigate('/Fantasy')
}
const AdventureHandler = () => {
    navigate('/Adventure')
}
const MysteryHandler = () => {
    navigate('/Mystery')
}
const ScienceHandler = () => {
    navigate('/Science')
}
const HistoryHandler = () => {
    navigate('/History')
}
const SportHandler = () => {
    navigate('/Sport')
}



  return (
    <div className='Home_style'>
        <div className='button_div'>
            <div className='btn_content_div'>
                <div className='button_section'>
                    <div className='img_div'>
                        <img src='./1d.png' alt=''/>
                    </div>
                    <button onClick={FantaryHandler} className='btn1'></button>
                    {/* <div className='mid_div'>Fantasy</div> */}
                    {/* <button className='btn2'>Sourt</button> */}
                </div>
                <div className='line'></div>
                <div className='button_section'>
                    <div className='img_div'>
                        <img src='./2d.png' alt=''/>
                    </div>
                    <button onClick={AdventureHandler} className='btn3'></button>
                    {/* <div className='mid_div2'>Adventur</div> */}
                    {/* <button className='btn10'>Sloom</button> */}
                </div>
                <div className='line'></div>
                <div className='button_section'>
                    <div className='img_div'>
                        <img src='./3d.png' alt=''/>
                    </div>
                    <button onClick={MysteryHandler} className='btn5'></button>
                    {/* <div className='mid_div2'>Mystry</div> */}
                    {/* <button className='btn10'>Soum</button> */}
                </div>
                <div className='line'></div>
                <div className='button_section'>
                    <div className='img_div'>
                        <img src='./4d.png' alt=''/>
                    </div>
                    <button onClick={ScienceHandler} className='btn7'></button>
                    {/* <div className='mid_div2'>Scientific</div> */}
                    {/* <button className='btn8'>Spom</button> */}
                </div>
                <div className='line'></div>
                <div className='button_section'>
                    <div className='img_div'>
                        <img src='./5d.png' alt=''/>
                    </div>
                    <button onClick={HistoryHandler} className='btn9'></button>
                    {/* <div className='mid_div2'>Historific</div> */}
                    {/* <button className='btn10'>Soont</button> */}
                </div>
                <div className='line'></div>
                <div className='button_section'>
                    <div className='img_div'>
                        <img src='./6d.png' alt=''/>
                    </div>
                    <button onClick={SportHandler} className='btn11'></button>
                    {/* <div className='mid_div2'>Sportific</div> */}
                    {/* <button className='btn10'>Soun</button> */}
                </div>
            </div>
        </div>
        {/* <button className='btn13'>Megame</button>     */}
    </div>
  )
}

export default Home