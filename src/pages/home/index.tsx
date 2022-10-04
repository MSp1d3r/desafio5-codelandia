/* eslint-disable max-len */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';

export default function HomePage() {
  return (

    <div className="flex flex-row w-screen h-screen bg-gradient-to-r from-[#628E75] to-[#1A4855] justify-center items-center">
      <div className=" flex flex-col w-[1110px] p-4 m-4">
        <div className="flex flex-row w-full justify-between">
          <img src="./src/assets/logo.fw.png" alt="" className="flex w-[120px]" />
          <div className="flex items-center gap-5">
            <img src="./src/assets/facebook.fw.png" alt="" className="flex w-[11px] h-[20px]" />
            <img src="./src/assets/instagram.fw.png" alt="" className="flex w-[20px] h-[20px]" />
            <img src="./src/assets/twitter.fw.png" alt="" className="flex w-[22px] h-[18px]" />
            <img src="./src/assets/youtube.fw.png" alt="" className="flex w-[22px] h-[15,46px]" />
          </div>
        </div>
        <div className="flex w-full">
          <div className="flex flex-col w-[50%]">
            <div className="flex flex-col w-full gap-3">
              <span className="flex text-[20px] font-bold text-[#F9F9F9] font3 mt-[61px]">
                HAYAO MIYAZAKI
              </span>
              <span className="flex text-[68px] font-bold text-[#F9F9F9] font3 mt-[-21px]">
                A VIAGEM
              </span>
              <span className="flex text-[68px] font-bold text-[#F9F9F9] font3 mt-[-50px]">
                DE CHIHIRO
              </span>
              <span className="flex text-[16px]w-[645px] h-[87px] text-[#F9F9F9] font3 justify-center text-align:justify">
                Chihiro chega a um mundo mágico dominado por uma bruxa. Aqueles que a desobedecem são transformados em animas.
              </span>
            </div>
            <div className="flex w-full flex-row gap-3 mt-5">
              <div className="flex flex-col">
                <button type="submit" className="flex flex-row bg-[url(./src/assets/buttom1.fw.png)] hover:bg-[url(./src/assets/buttom2.fw.png)] bg-no-repeat bg-center px-[50px] bg-cover py-3 gap-3 justify-center items-center text-white text-[16px]">
                  <img src="./src/assets/seta-button.fw.png" alt="Assita Agora" className="w-[11.67px] h-[15px]" />
                  ASSISTA AGORA
                </button>
              </div>
              <div className="flex flex-col">
                <button type="submit" className="flex flex-row bg-[url(./src/assets/buttom2.fw.png)] hover:bg-[url(./src/assets/buttom1.fw.png)] bg-no-repeat bg-center px-[50px] bg-cover py-3 gap-3 justify-center items-center text-white text-[16px]">
                  ASSISTA O TRAILER
                </button>
              </div>
            </div>
          </div>
          <div className="flex w-[50%] justify-right items-center">
            <img src="./src/assets/bonecos.fw.png" alt="" />
          </div>
        </div>
      </div>
    </div>

  );
}
