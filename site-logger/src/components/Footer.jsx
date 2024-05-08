import React from 'react';
import {
    FaLinkedin,
  FaGithubSquare
} from 'react-icons/fa';

const Footer = () => {
  return (
    <div className='max-w-[1240px] mx-auto py-16 px-4 grid gap-8 text-gray-300'>
      <div>
        <h1 className='w-full text-3xl font-bold text-[#00df9a]'>ACTIO</h1>
        <p className='py-4'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Id odit ullam iste repellat consequatur libero reiciendis, blanditiis accusantium.</p>
        <div className='flex gap-8 px-8 my-6'>
            <FaLinkedin size= {30} />
            <FaGithubSquare size={30} />
        </div>
      </div>

    </div>
  );
};

export default Footer;