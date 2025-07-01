'use client';

import React, { useState } from 'react';
import Image from 'next/image';

const ExpandableList = ({ 
  items = [],
  className = '',
  ...props
}) => {
  const [expandedItems, setExpandedItems] = useState({ 0: true });

  const toggleExpand = (index) => {
    setExpandedItems(prev => ({
      ...prev,
      [index]: !prev[index]
    }));
  };

  const defaultItems = [
    {
      id: '01',
      title: 'Mini Site - Lorem Ipsum is simply',
      content: 'Lorem Ipsum is simply dummy text of the printing and typesetting\nindustry. Lorem Ipsum has been the industry standard dummy text ever.',
      expanded: true
    },
    {
      id: '02',
      title: 'Shorten Links & Customized QR',
      content: '',
      expanded: false
    },
    {
      id: '03',
      title: 'All-in-One Social Media Chat',
      content: '',
      expanded: false
    },
    {
      id: '04',
      title: 'Social Media Posting & Scheduling',
      content: '',
      expanded: false
    },
    {
      id: '05',
      title: 'Just everything you need in one place',
      content: '',
      expanded: false
    }
  ];

  const listItems = items.length > 0 ? items : defaultItems;

  return (
    <div className={`flex flex-col w-full max-w-[620px] ${className}`} {...props}>
      {listItems.map((item, index) => (
        <div key={index} className={`flex flex-col animate-fade-in-up animation-delay-${index * 100}`}>
          {/* First Item - Always Expanded */}
          {index === 0 && (
            <>
              <div className="flex flex-row w-full items-start">
                <span className="text-xl sm:text-2xl font-polysans font-semibold leading-[29px] text-left text-global-6 w-6 h-[29px] flex-shrink-0">
                  {item.id}
                </span>
                <span className="text-xl sm:text-2xl font-polysans font-semibold leading-[29px] text-left text-global-6 flex-1 ml-4 sm:ml-[27px]">
                  {item.title}
                </span>
                <div className="flex flex-row w-[15px] h-[7px] mt-[10px] ml-4">
                  <Image
                    src="/images/img_vector_white_a700_7x7.svg"
                    alt="expand"
                    width={7}
                    height={7}
                    className="w-[7px] h-[7px]"
                  />
                </div>
              </div>
              <div className="mt-4 ml-8 sm:ml-12">
                <span className="text-sm sm:text-base font-inter font-normal leading-6 text-left text-expandable-1 whitespace-pre-line block">
                  {item.content}
                </span>
              </div>
            </>
          )}

          {/* Other Items - Expandable */}
          {index > 0 && (
            <div className="flex flex-col">
              <div className="w-full h-0.5 bg-global-9 my-6 sm:my-8"></div>
              <div 
                className="flex flex-row w-full items-center cursor-pointer group transition-all duration-300 hover:bg-global-16 rounded-lg p-2 -m-2"
                onClick={() => toggleExpand(index)}
              >
                <span className="text-xl sm:text-2xl font-polysans font-semibold leading-[29px] text-left text-global-6 w-8 h-[29px] flex-shrink-0">
                  {item.id}
                </span>
                <span className="text-xl sm:text-2xl font-polysans font-semibold leading-[29px] text-left text-global-6 flex-1 ml-4 sm:ml-[19px] group-hover:text-global-7 transition-colors duration-300">
                  {item.title}
                </span>
                <Image
                  src="/images/img_frame_white_a700_30x30.svg"
                  alt="toggle"
                  width={30}
                  height={30}
                  className={`w-[24px] sm:w-[30px] h-[24px] sm:h-[30px] transition-transform duration-300 ${expandedItems[index] ? 'rotate-180' : ''}`}
                />
              </div>
              {expandedItems[index] && item.content && (
                <div className="mt-4 ml-8 sm:ml-12 animate-fade-in-up">
                  <span className="text-sm sm:text-base font-inter font-normal leading-6 text-left text-expandable-1 whitespace-pre-line block">
                    {item.content}
                  </span>
                </div>
              )}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default ExpandableList;