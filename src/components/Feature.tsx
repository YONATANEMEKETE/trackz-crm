import React from 'react';

interface FeatureProps {
  title: string;
  description: string;
  icon: any;
}

const Feature = ({ title, description, icon }: FeatureProps) => {
  return (
    <div className="bg-white min-w-[250px] w-[350px] px-6 py-8 rounded-2xl shadow-2xl">
      <div className="size-16 bg-white shadow-[0px_5px_15px_rgba(0,0,0,0.1)] rounded-xl grid place-content-center mb-6">
        {icon}
      </div>

      <div className="text-mytext text-2xl font-content font-bold text-start mb-3">
        {title}
      </div>

      <p className=" max-w-[250px] text-base text-mytextgray font-heading font-semibold text-start">
        {description}
      </p>
    </div>
  );
};

export default Feature;
