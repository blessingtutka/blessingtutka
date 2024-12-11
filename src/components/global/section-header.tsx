import React from 'react';

type SectionHeaderProps = {
    image: string;
    title: string;
};

const SectionHeader: React.FC<SectionHeaderProps> = ({ image, title }) => {
    return (
        <div className='flex m-2 justify-start w-full'>
            <div className='w-full md:w-4/5 mlg:w-1/2'>
                <div className='section-header flex justify-center items-center mb-4'>
                    <div className='section-header-img'>
                        <div className='diamond'>
                            <img src={image} alt={title} className='w-full h-full object-cover' />
                        </div>
                    </div>
                    <h2 className='text-[#5F91FF] text-4xl font-semibold ml-8'>{title}</h2>
                </div>
            </div>
        </div>
    );
};

export default SectionHeader;
