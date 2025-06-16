"use client"
import React, { useState } from 'react'

const FaqSection = ({ faqData }) => {
  const [expandedIndex, setExpandedIndex] = useState(null)

  const toggleAccordion = index => {
    setExpandedIndex(prevIndex => (prevIndex === index ? null : index))
  }
  return (
    <section className='work overflow-hidden'>
      <div className='grid wow fadeInUp grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 container'>
        <div className='box1 flex flex-col justify-between'>
          <div>
            <h2 className='primary-font title'>Question ? We have answers </h2>
            <p className='info-text mt-2'>
              Follow these 3 simple steps to create a website today
            </p>
          </div>
          <div className='mt-5 '>
            <button className='btn btn-black' tabIndex={0} type='button'>
              Explore All
            </button>
          </div>
        </div>
        <div className='divide-y divide-slate-200 mt-8 space-y-2'>
          <div className='accordion'>
            {faqData.map((item, index) => (
              <div className='accordion-item' key={index}>
                <button
                  className='accordion-button'
                  aria-expanded={expandedIndex === index ? 'true' : 'false'}
                  onClick={() => toggleAccordion(index)}
                >
                  <p className={`accordion-title text-base font-semibold`}>
                    {item.question}
                  </p>
                  <span
                    aria-hidden='true'
                    className={`icon transition-all duration-200 ${
                      expandedIndex === index ? 'rotate-180' : ''
                    }`}
                  >
                    <svg
                      width='23px'
                      height='23px'
                      viewBox='0 0 24 24'
                      fill='none'
                      xmlns='http://www.w3.org/2000/svg'
                    >
                      <path
                        d='M7 10L12 15L17 10'
                        stroke={'#222222'}
                        strokeWidth='1.5'
                        strokeLinecap='round'
                        strokeLinejoin='round'
                      />
                    </svg>
                  </span>
                </button>
                <div
                  className={`accordion-content ${
                    expandedIndex === index ? 'expanded' : ''
                  }`}
                >
                  <p className='info-text'>{item.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default FaqSection
