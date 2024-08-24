import React from 'react';

const SolutionChart2 = () => {
  return (
    <div className="w-[270px] h-[130px] bg-white rounded-xl absolute z-10 left-[40%] px-6 py-6 flex items-center justify-between">
      <div className="">
        <div className="w-8 h-1 bg-myaccent/80 rounded-full mb-2"></div>
        <div className="text-mytext text-3xl font-heading font-semibold mb-2">
          7892
        </div>
        <p className="text-mytextgray text-base font-heading font-semibold">
          Opened
        </p>
      </div>
      <div className="w-[2px] h-full bg-mycardBg rounded-full"></div>
      <div className="">
        <div className="w-8 h-1 bg-myaccent/80 rounded-full mb-2"></div>
        <div className="text-mytext text-3xl font-heading font-semibold mb-2">
          10.8%
        </div>
        <p className="text-mytextgray text-base font-heading font-semibold">
          Clickthrough
        </p>
      </div>
    </div>
  );
};

export default SolutionChart2;
