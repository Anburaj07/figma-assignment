import React from "react";
import { styled } from "styled-components";
import homePic from "../images/homePic.png";
import l1 from "../images/l1.svg";
import l2 from "../images/l2.svg";
import l3 from "../images/l3.svg";
import l4 from "../images/l4.svg";
import l5 from "../images/l5.svg";
import l6 from "../images/l6.svg";
import icon1 from "../images/Icon1.svg";
import icon2 from "../images/Icon2.svg";
import icon3 from "../images/Icon3.svg";
import banner from "../images/banner.png";
const Home = () => {
  return (
    <div>
      <DIV>
        <LEFT>
          <h1 className="md:text-6xl sm:text-3xl text-2xl font-medium p-2 text-[#415057]">
            Lessons and insights
          </h1>
          <h1 className="md:text-6xl sm:text-3xl text-2xl font-medium p-2 text-[#43A046]">
            from 8 years
          </h1>
          <p className="text-[#7e7e7e] text-lg mt-4 ">
            Where to grow business as a photographer: site or social media?
          </p>
          <button className="bg-[#43A046] text-[#ffffff] p-3 mt-4  rounded-lg w-[120px]">
            Register
          </button>
        </LEFT>
        <RIGHT>
          <div>
            <img src={homePic} alt="" />
          </div>
        </RIGHT>
      </DIV>
      <div className="text-center">
        <h1 className="md:text-4xl sm:text-3xl text-2xl font-medium  text-[#415057]">
          Our Clients
        </h1>
        <p className="text-[#7e7e7e] text-lg mt-1 p-3">
          We have been working with some Fortune 500+ clients
        </p>
        <div className="grid grid-cols-3 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-6 gap-4 w-[90%] p-4 m-auto">
          <div>
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
      <div className="text-center mt-5">
        <h1 className="md:text-4xl sm:text-3xl text-2xl  m-auto font-medium p-2 text-[#415057]">
          Manage your entire community in a single system
        </h1>
        <p className="text-[#7e7e7e] text-lg  p-3">
          Who is Nextcent suitable for?
        </p>
      </div>
      <div className="text-center mt-5 flex flex-wrap justify-around w-full m-auto">
        <div className="flex flex-col justify-center items-center w-full sm:w-1/2 md:w-1/3 lg:w-1/3 xl:w-1/3 p-2">
          <div>
            <img src={icon1} alt="" />
          </div>
          <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-4xl m-auto font-medium p-2 text-[#415057]">
            Membership Organisations
          </h1>
          <p className="text-[#7e7e7e] text-base sm:text-lg md:text-lg lg:text-lg xl:text-lg p-3">
            Our membership management software provides full automation of
            membership renewals and payments
          </p>
        </div>
        <div className="flex flex-col justify-center items-center w-full sm:w-1/2 md:w-1/3 lg:w-1/3 xl:w-1/3 p-2">
          <div>
            <img src={icon2} alt="" />
          </div>
          <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-4xl m-auto font-medium p-2 text-[#415057]">
            National Associations
          </h1>
          <p className="text-[#7e7e7e] text-base sm:text-lg md:text-lg lg:text-lg xl:text-lg p-3">
            Our membership management software provides full automation of
            membership renewals and payments
          </p>
        </div>
        <div className="flex flex-col justify-center items-center w-full sm:w-1/2 md:w-1/3 lg:w-1/3 xl:w-1/3 p-2">
          <div>
            <img src={icon3} alt="" />
          </div>
          <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-4xl m-auto font-medium p-2 text-[#415057]">
            Clubs And Groups
          </h1>
          <p className="text-[#7e7e7e] text-base sm:text-lg md:text-lg lg:text-lg xl:text-lg p-3">
            Our membership management software provides full automation of
            membership renewals and payments
          </p>
        </div>
      </div>
      <div className="mt-5 flex w-[80%] m-auto justify-around text-left w-full m-auto ">
        <div className="w-[28%]">
            <img className="w-[100%] " src={banner} alt="" />
        </div>
        <div className="w-[50%] ">
            <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-4xl m-auto font-medium p-2 text-[#415057]">
            The unseen of spending three years at Pixelgrade
            </h1>
            <p className="text-[#7e7e7e] text-base sm:text-base md:text-base lg:text-base xl:text-base p-3">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet justo ipsum. Sed accumsan quam vitae est varius fringilla. Pellentesque placerat vestibulum lorem sed porta. Nullam mattis tristique iaculis. Nullam pulvinar sit amet risus pretium auctor. Etiam quis massa pulvinar, aliquam quam vitae, tempus sem. Donec elementum pulvinar odio.
            </p>
        <button className="bg-[#43A046] p-4 rounded-xl text-[#fdf8f8]">Learn More</button>
        </div>
      </div>
    </div>
  );
};

export default Home;

const DIV = styled.div`
  width: 100%;
  margin: auto;
  padding-top: 30px;
  padding-bottom: 30px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  /* border: 1px solid red; */
  background-color: #f5f7fa;
  box-sizing: border-box;

  @media (max-width: 768px) {
    flex-direction: column-reverse;
    text-align: center;
  }
`;
const LEFT = styled.div`
  width: 55%;
  margin: auto;
  /* border: 1px solid red; */
  padding: 4%;
  text-align: left;

  button {
    @media (max-width: 768px) {
      text-align: center;
      margin-left: 60px;
    }
  }
  @media (max-width: 768px) {
    width: 90%;
    margin: auto;
    padding: 2%;
  }
`;
const RIGHT = styled.div`
  margin: auto;
  /* border: 1px solid red; */
  width: 40%;
  @media (max-width: 768px) {
    width: 100%;
    margin-top: 20px;
  }
  img {
    width: 100%;
  }
`;
