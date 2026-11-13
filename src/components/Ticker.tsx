import React from 'react';
import { assets } from '../assets';

interface TickerProps {
  id?: string;
  nodeId?: string;
}

const tickerItems = ["Bellas", "Alisamentos", "Mechas", "Mega hair", "Trabalhos personalizados", "Espaço da Beleza"];

export const Ticker: React.FC<TickerProps> = ({ id, nodeId = "4001:51" }) => {
  return (
    <div 
      id={id}
      className="relative w-full bg-[#e8bf96] h-[71.25px] overflow-hidden flex items-center select-none shadow-md z-20"
      data-node-id={nodeId}
    >
      <div className="animate-marquee flex items-center whitespace-nowrap">
        {/* First repetition */}
        <div className="flex items-center gap-[13.5px] px-[6.75px]" data-node-id="4001:53">
          {tickerItems.map((item, index) => (
            <React.Fragment key={`rep1-${index}`}>
              <span className="font-['Newsreader'] font-light text-[30px] md:text-[36px] text-black leading-[37.5px] tracking-wide">
                {item}
              </span>
              <div className="w-[30.75px] h-[30.75px] shrink-0">
                <img alt="✦" className="w-full h-full object-contain" src={assets.starGold} />
              </div>
            </React.Fragment>
          ))}
        </div>

        {/* Second repetition for seamless loop */}
        <div className="flex items-center gap-[13.5px] px-[6.75px]">
          {tickerItems.map((item, index) => (
            <React.Fragment key={`rep2-${index}`}>
              <span className="font-['Newsreader'] font-light text-[30px] md:text-[36px] text-black leading-[37.5px] tracking-wide">
                {item}
              </span>
              <div className="w-[30.75px] h-[30.75px] shrink-0">
                <img alt="✦" className="w-full h-full object-contain" src={assets.starGold} />
              </div>
            </React.Fragment>
          ))}
        </div>

        {/* Third repetition for extra wide screens */}
        <div className="flex items-center gap-[13.5px] px-[6.75px]">
          {tickerItems.map((item, index) => (
            <React.Fragment key={`rep3-${index}`}>
              <span className="font-['Newsreader'] font-light text-[30px] md:text-[36px] text-black leading-[37.5px] tracking-wide">
                {item}
              </span>
              <div className="w-[30.75px] h-[30.75px] shrink-0">
                <img alt="✦" className="w-full h-full object-contain" src={assets.starGold} />
              </div>
            </React.Fragment>
          ))}
        </div>
      </div>
    </div>
  );
};
