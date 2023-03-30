import React ,{useEffect} from 'react'
import './main.css'
//import icons
import {HiOutlineLocationMarker} from 'react-icons/hi'
import {HiOutlineClipboardCheck} from 'react-icons/hi'
//import images
import img1 from '../../assets/img1.jpg'
import img2 from '../../assets/img2.jpg'
import img3 from '../../assets/img3.jpg'
import img4 from '../../assets/img4.jpg'
import img5 from '../../assets/img5.jpg'
import img6 from '../../assets/img6.jpg'
import img7 from '../../assets/img7.jpg'
import img8 from '../../assets/img8.jpg'
import img9 from '../../assets/img9.jpg'

import Aos from 'aos'
import 'aos/dist/aos.css'

const Main = () => {

  useEffect(()=>{
    Aos.init({duration:2000})
  },[])

  const Data=[
    {
      id:1,
      imgSrc:img1,
      destTitle:'Taj Mahal',
      location:'India',
      grade:'CULTRAL RELAX',
      fees:'$700',
      description:'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source.'
    },
    {
      id:2,
      imgSrc:img2,
      destTitle:'Bora Bora2',
      location:'New Zealand2',
      grade:'CULTRAL RELAX2',
      fees:'$7002',
      description:'2Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source.'
    },
    {
      id:3,
      imgSrc:img3,
      destTitle:'Bora Bora3',
      location:'New Zealand3',
      grade:'CULTRAL RELAX3',
      fees:'$7003',
      description:'3Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source.'
    },
    {
      id:4,
      imgSrc:img4,
      destTitle:'Bora Bora4',
      location:'New Zealand4',
      grade:'CULTRAL RELAX4',
      fees:'$7004',
      description:'4Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source.'
    },
    {
      id:5,
      imgSrc:img5,
      destTitle:'Bora Bora5',
      location:'New Zealand5',
      grade:'CULTRAL RELAX5',
      fees:'$7005',
      description:'5Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source.'
    },
    {
      id:6,
      imgSrc:img6,
      destTitle:'Bora Bora6',
      location:'New Zealand6',
      grade:'CULTRAL RELAX6',
      fees:'$7006',
      description:'6Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source.'
    },
    {
      id:7,
      imgSrc:img7,
      destTitle:'Bora Bora7',
      location:'New Zealand7',
      grade:'CULTRAL RELAX7',
      fees:'$7007',
      description:'7Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source.'
    },
    {
      id:8,
      imgSrc:img8,
      destTitle:'Bora Bora8',
      location:'New Zealand8',
      grade:'CULTRAL RELAX8',
      fees:'$7008',
      description:'8Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source.'
    },
    {
      id:9,
      imgSrc:img9,
      destTitle:'Bora Bora9',
      location:'New Zealand9',
      grade:'CULTRAL RELAX9',
      fees:'$7009',
      description:'9Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source.'
    }
  ];
  
  return (
    <section className="main container section">
      <div className="secTitle">
        <h3 data-aos="fade-right" className="title">
          Most visited destinations
        </h3>
      </div>
      <div className="secContent grid">
        {
          Data.map(({id,imgSrc,destTitle,location,grade,fees,description})=>{
            return (
              <div key={id} data-aos="fade-up" className="singleDestination">
                <div className="imgDiv">
                  <img src={imgSrc} alt={destTitle} />
                </div>
                <div className="cardInfo">
                  <h4 className="desTitle">{destTitle}</h4>
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
                  <div className="desc">
                    <p>{description}</p>
                  </div>
                  <button className="btn flex">
                    Detail<HiOutlineClipboardCheck/>
                  </button>
                </div>
              </div>
            );

          })
        }
      </div>
    </section>
  )
}
export default Main