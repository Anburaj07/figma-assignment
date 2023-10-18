import React from 'react'
import {styled} from 'styled-components'
import homePic from "../images/homePic.png"
import l1 from "../images/l1.svg";
import l2 from "../images/l2.svg";
import l3 from "../images/l3.svg";
import l4 from "../images/l4.svg";
import l5 from "../images/l5.svg";
import l6 from "../images/l6.svg";

const Home = () => {
  return (
    <div>
        <DIV>
            <LEFT>
                <h1 className="md:text-6xl sm:text-3xl text-2xl font-medium p-2 text-[#415057]">Lessons and insights</h1>
                <h1 className="md:text-6xl sm:text-3xl text-2xl font-medium p-2 text-[#43A046]">from 8 years</h1>
                <p className='text-[#7e7e7e] text-lg mt-4 '>Where to grow business as a photographer: site or social media?</p>
                <button className='bg-[#43A046] text-[#ffffff] p-3 mt-4 rounded-lg w-[120px]'>Register</button>
            </LEFT>
            <RIGHT>
                <div><img src={homePic} alt="" /></div>
            </RIGHT>
        </DIV>
        <div className='text-center'>
            <h1 className="md:text-4xl sm:text-3xl text-2xl font-medium  text-[#415057]">Our Clients</h1>
            <p className='text-[#7e7e7e] text-lg mt-1 p-3'>We have been working with some Fortune 500+ clients</p>
            <div className='flex max-w-[90%] p-4 m-auto items-center justify-around'>
                <div >
                    <img src={l1} alt="" />
                </div>
                <div>
                    <img src={l2} alt="" />
                </div>
                <div>
                    <img src={l3} alt="" />
                </div>
                <div>
                    <img src={l4} alt="" />
                </div>
                <div>
                    <img src={l5} alt="" />
                </div>
                <div>
                    <img src={l6} alt="" />
                </div>
            </div>
        </div>
        <div className='text-center mt-5'>
            <h1 className="md:text-4xl sm:text-3xl text-2xl w-[37%] m-auto font-medium p-2 text-[#415057]">Manage your entire community in a single system</h1>
            <p className='text-[#7e7e7e] text-lg  p-3'>Who is Nextcent suitable for?</p>
        </div>
    </div>
  )
}

export default Home

const DIV=styled.div`
    width: 100%;
    margin: auto;
    padding-top: 30px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    /* border: 1px solid red; */
    background-color: #f5f7fa;
    box-sizing: border-box;
`
const LEFT=styled.div`
    width: 55%;
    margin: auto;
    /* border: 1px solid red; */
    padding: 4%;
    text-align: left;
`
const RIGHT=styled.div`
    margin: auto;
    /* border: 1px solid red; */
    width: 40%;
    img{
        width: 100%;
    }
`