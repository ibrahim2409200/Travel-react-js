import React from 'react'
import "./main.css"
import { HiOutlineLocationMarker } from 'react-icons/hi'
import { HiOutlineClipboardCheck } from 'react-icons/hi'
import img1 from "../../Assets/img1.jpg"
import img2 from "../../Assets/img2.jpg"
import img3 from "../../Assets/img3.jpg"
import img4 from "../../Assets/img4.jpg"
import img5 from "../../Assets/img5.jpg"
import img8 from "../../Assets/img8.jpg"
import img9 from "../../Assets/img9.jpg"
import img11 from "../../Assets/img11.jpg"


const Data=[
  {
    id:1,
    imgSrc:img1,
    destTitle:'Island',
    location:'Thailand',
    grade:'Cultural Relax',
    fees:'$800',
    description:'Island is famous for its beauty of nature'
  },
  {
    id:2,
    imgSrc:img2,
    destTitle:'PalmView',
    location:'Maldives',
    grade:'Cultural Relax',
    fees:'$1000',
    description:'Beuatiful sea facing huts and resorts'
  },{
    id:3,
    imgSrc:img3,
    destTitle:"Jumeirah",
    location:'UAE',
    grade:'Cultural Relax',
    fees:'$900',
    description:'Dubai one of the best place for vacation'
  },{
    id:4,
    imgSrc:img4,
    destTitle:"Mountains",
    location:'Switzerland',
    grade:'Cultural Relax',
    fees:'$600',
    description:'Beautiful Mountains'
  },{
    id:5,
    imgSrc:img5,
    destTitle:"EdinBurgh",
    location:"Scotland",
    grade:'Cultural Relax',
    fees:'$1800',
    description:'Island is famous for its beauty of nature'
  },{
    id:6,
    imgSrc:img8,
    destTitle:"Bridge View",
    location:"UK",
    grade:'Cultural Relax',
    fees:'$1200',
    description:'Famous old bridge'
  },{
    id:7,
    imgSrc:img9,
    destTitle:"Sydney",
    location:"Australia",
    grade:'Cultural Relax',
    fees:'$1000',
    description:'Island is famous for its beuaty of nature'
  },{
    id:8,
    imgSrc:img11,
    destTitle:"France",
    location:"Europe",
    grade:'Cultural Relax',
    fees:'$800',
    description:'Island is famous for its beauty of nature'
  },
]

const Main = () => {
  return (
    <section className='main container section'>
      <div className="secTitle">
        <h3 className="title">Most Visited Destinations</h3>
      </div>

      <div className="secContent grid"></div>
        {
          Data.map (({id,imgSrc,destTitle,location,grade,fees,description})=>{
            return(
              <div key={id} className='singleDestination'>
                <div className="imageDiv">
                  <img src={imgSrc} alt={destTitle} />
                </div>

                <div className="cardInfo">
                  <h4 className="destTiltle">
                    {destTitle}
                  </h4>
                  <span className="continent flex">
                    <HiOutlineLocationMarker className='icon'/>
                    <span className="name">{location}</span>
                  </span>
                  <div className="fees flex">
                    <div className="grade">
                      <span>{grade}<small>+1</small></span>
                    </div>
                    <div className="price">
                      <h5>{fees}</h5>
                    </div>
                  </div>
                  <div className="description"><h6>{description}</h6></div>
                  <button className="btn flex">
                    DETAILS <HiOutlineClipboardCheck className='icon'/>
                  </button>
                </div>
              </div>
            )
          }
          
          )
        }

    </section>
    
  )
}

export default Main