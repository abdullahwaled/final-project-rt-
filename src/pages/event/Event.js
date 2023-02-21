import React, { useEffect, useState } from 'react';
import './event.css'
import { Link } from 'react-router-dom';
import Eventcard from 'components/eventcard/Eventcard';
import img2 from '../../asset/image/23.jpg';
import img3 from '../../asset/image/22.jpg';
import img1 from '../../asset/image/11.jpg';

import Box from 'components/box/Box';

function Event(){

  const eventdata=[
    { id:"1",image:img3 , date:"5 May 2023" , name:"Gardening" , time:"08:00-12:00"},
    { id:"2",image:img2 , date:"7 May 2023" , name:"Math Lessons" , time:"08:00-12:00"},
    { id:"3",image:img1 , date:"23 May 2023" , name:"Gardening" , time:"08:00-12:00"},
    { id:"4",image:img3 , date:"25 May 2023" , name:"Music lessons" , time:"08:00-12:00"},
    { id:"5",image:img2 , date:"9 May 2023" , name:"Gardening" , time:"08:00-12:00"},
    { id:"6",image:img1 , date:"10 May 2023" , name:"Math Lessons" , time:"08:00-12:00"},
    { id:"7",image:img1 , date:"2 May 2023" , name:"Gardening" , time:"08:00-12:00"},
    { id:"8",image:img3 , date:"8 May 2023" , name:"Music lessons" , time:"08:00-12:00"},
  ];

  const eventcard= eventdata.map(card => 
     <Eventcard key={card.id} img={card.image} date={card.date} name={card.name} time={card.time}/>
    )


    const [expiryTime, setExpiryTime] = useState("may 31, 2023 23:59:59");
    const [countdownTime, setCountdownTime] = useState({
      countdownDays: 0,
      countdownHours: 0,
      countdownlMinutes: 0,
      countdownSeconds: 0,
    });
    
    const countdownTimer = () => {
      const timeInterval = setInterval(() => {
        const countdownDateTime = new Date(expiryTime).getTime();
        const currentTime = new Date().getTime();
        const remainingDayTime = countdownDateTime - currentTime;
        const totalDays = Math.floor(remainingDayTime / (1000 * 60 * 60 * 24));
        const totalHours = Math.floor(
          (remainingDayTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        );
        const totalMinutes = Math.floor(
          (remainingDayTime % (1000 * 60 * 60)) / (1000 * 60)
        );
        const totalSeconds = Math.floor(
          (remainingDayTime % (1000 * 60)) / 1000
        );
  
        setCountdownTime(
          {
            countdownDays: totalDays,
            countdownHours: totalHours,
            countdownlMinutes: totalMinutes,
            countdownSeconds: totalSeconds,
          }
        );
    
        if (remainingDayTime < 0) {
          clearInterval(timeInterval);
          setExpiryTime('false');
        }
      }, 1000);
    };
    
    useEffect(() => {
      countdownTimer();
    });

  return (
    <div className='event'>
        <section className="top">
        <div>
          <h1> Event</h1>
          <Link to="/">Home &gt;</Link>
          <span> event </span>
        </div>
        </section>

        <section  className='body d-sm-flex d-md-flex align-items-center justify-content-center flex-wrap py-5 px-5 row w-100 m-auto'>
            {eventcard}
        </section>

        <section className='date text-center'>
          <div className='info'>
           <h4>18 Jan 2023</h4>
           <Box>
              <h1>Drawing Event </h1>
              <p>Lorem Ipsum is simply dummy text<br/>
                 of the printing and typesetting<br/> industry.
                 Lorem Ipsum has been<br/>
                 the industry's standard dummy text <br/>
                 ever since the 1500s.</p>
                
            </Box>
                  <div className="time">
                      <div className="unit">
                        <span id='days'> {countdownTime.countdownDays}</span>
                        <span>Days</span>
                      </div>
                      <div className="unit">
                        <span id='hours'>{countdownTime.countdownHours}</span>
                        <span>Hours</span>
                      </div>
                      <div className="unit">
                        <span id='minutes'>{countdownTime.countdownlMinutes}</span>
                        <span>Minutes</span>
                      </div>
                      <div className="unit">
                        <span id='seconds'>{countdownTime.countdownSeconds}</span>
                        <span>Seconds</span>
                      </div>
                  </div>
          </div>
        </section>
      
    </div>
  );
}

export default Event;
