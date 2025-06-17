import React from 'react'
export const metadata = {
  title: 'Contact Trimmo.bio Team',
  description:
    "Contact Trimmo.bio to connect with our team. We're here to assist you with innovative solutions and personalized support for your needs."
}
const Page = () => {
  return (
    <div className='container flex flex-col gap-[120px] '>
      <div className='pt-[20px] sm:pt-[70px] md:pt-10 herosection'>
        <div className='pt-10 w-100'>
          <div className='w-full text-center'>
            <h1 className='mb-6'>Contact Us</h1>
            <p className='mb-5 w-full lg:w-1/2 mx-auto text-[18px]'>
              We are excited to hear from you! Whether you have a question,
              require assistance, or simply want to say hello, we are here to
              help.
            </p>
          </div>
          <div className='w-full lg:w-[80%] text-left mt-8 mx-auto'>
            <form className='p-6 md:p-10 bg-white contact-form'>
              <div className='grid grid-cols-1 lg:grid-cols-2 w-full gap-5'>
                <div>
                  <label>
                    Your Name<span className='text-red-500 ms-1'>*</span>
                  </label>
                  <input
                    placeholder='Enter Your Name'
                    required=''
                    name='from_name'
                    className='w-full focus:border-gray-400'
                  />
                </div>
                <div>
                  <label>
                    Your Email<span className='text-red-500 ms-1'>*</span>
                  </label>
                  <input
                    placeholder='Enter Your Email'
                    type='email'
                    required=''
                    name='from_email'
                    className='w-full focus:border-gray-400'
                  />
                </div>
              </div>
              <div className='mt-5'>
                <label>Subject</label>
                <input
                  placeholder='Enter Subject'
                  name='subject'
                  className='w-full focus:border-gray-400'
                />
              </div>
              <div className='my-5'>
                <label>
                  Message<span className='text-red-500 ms-1'>*</span>
                </label>
                <textarea
                  placeholder='Write a Message'
                  required=''
                  name='message'
                  className='w-full focus:border-gray-400 min-h-[150px]'
                  defaultValue={''}
                />
              </div>
              <div className='relative'>
                <button className='btn btn-black' type='submit'>
                  Send Message
                </button>
              </div>
            </form>
          </div>
          <div className='flex flex-wrap xl:flex-nowrap gap-8 mt-20 mb-[80px] lg:mb-[120px]'>
            <div className='w-full xl:w-[70%]'>
              <iframe
                src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3719.5489388697006!2d72.84733897424466!3d21.210070181528494!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be04fa9bfcd7817%3A0xaa9cada4811221!2sShopeasy!5e0!3m2!1sen!2sin!4v1743005594012!5m2!1sen!2sin'
                width='100%'
                height='600'
                allowFullScreen=''
                loading='lazy'
                referrerPolicy='no-referrer-when-downgrade'
              ></iframe>
            </div>
            <div
              style={{ borderRadius: '20px' }}
              className='w-full xl:w-[30%] shadow-xl p-5 h-full bg-white'
            >
              <h3 className='text-xl xl:text-2xl'>Contact Information</h3>
              <ul className='my-8 space-y-8'>
                <li>
                  <p className='font-medium mb-1 text-md'>Address</p>
                  <div className='flex items-start'>
                    <svg
                      version={1}
                      id='Layer_1'
                      xmlns='http://www.w3.org/2000/svg'
                      xmlnsXlink='http://www.w3.org/1999/xlink'
                      width='25px'
                      height='25px'
                      viewBox='0 0 64 64'
                      enableBackground='new 0 0 64 64'
                      xmlSpace='preserve'
                      className='me-2 mt-1 min-w-[20px] sm:min-w-[30px]'
                    >
                      <path
                        fill='#6a6a74'
                        d='M32,0C18.746,0,8,10.746,8,24c0,5.219,1.711,10.008,4.555,13.93c0.051,0.094,0.059,0.199,0.117,0.289l16,24
	C29.414,63.332,30.664,64,32,64s2.586-0.668,3.328-1.781l16-24c0.059-0.09,0.066-0.195,0.117-0.289C54.289,34.008,56,29.219,56,24
	C56,10.746,45.254,0,32,0z M32,32c-4.418,0-8-3.582-8-8s3.582-8,8-8s8,3.582,8,8S36.418,32,32,32z'
                      />
                    </svg>
                    <span className='info-text'>
                      4030, Central Bazzar, opp. Varachha Polica Station,
                      Varachha Main Road, Surat, Gujarat 395006
                    </span>
                  </div>
                </li>
                <li>
                  <p className='font-medium mb-1 text-md'>Email</p>
                  <div className='flex items-start'>
                    <svg
                      width='25px'
                      height='25px'
                      viewBox='0 0 24 24'
                      xmlns='http://www.w3.org/2000/svg'
                      id='mail'
                      className='w-[20px] me-2 sm:w-[30px]'
                    >
                      <path
                        d='M22,8.32V18a2,2,0,0,1-2,2H4a2,2,0,0,1-2-2V8.69L4,9.78l7.52,4.1A1,1,0,0,0,12,14a1,1,0,0,0,.5-.14L20,9.49Z'
                        style={{ fill: 'rgb(106, 106, 116)' }}
                      />
                      <path
                        d='M22,6h0L20,7.18l-8,4.67L4,7.5,2,6.4V6A2,2,0,0,1,4,4H20A2,2,0,0,1,22,6Z'
                        style={{ fill: 'rgb(106, 106, 116)' }}
                      />
                    </svg>
                    <span className='info-text'>support@trimmo.bio</span>
                  </div>
                </li>
                <li>
                  <p className='font-medium mb-1 text-md'>Phone Number</p>
                  <div className='flex items-start'>
                    <svg
                      width='21px'
                      height='21px'
                      viewBox='0 0 15 15'
                      version='1.1'
                      xmlns='http://www.w3.org/2000/svg'
                      xmlnsXlink='http://www.w3.org/1999/xlink'
                      className='me-2 w-[15px] sm:w-[20px]'
                    >
                      <g
                        id='Page-1'
                        stroke='none'
                        strokeWidth={1}
                        fill='none'
                        fillRule='evenodd'
                      >
                        <g
                          id='Dribbble-Light-Preview'
                          transform='translate(-103.000000, -7321.000000)'
                          fill='#6a6a74'
                        >
                          <g
                            id='icons'
                            transform='translate(56.000000, 160.000000)'
                          >
                            <path
                              d='M61.7302966,7173.99596 C61.2672966,7175.40296 59.4532966,7176.10496 58.1572966,7175.98796 C56.3872966,7175.82796 54.4612966,7174.88896 52.9992966,7173.85496 C50.8502966,7172.33496 48.8372966,7169.98396 47.6642966,7167.48896 C46.8352966,7165.72596 46.6492966,7163.55796 47.8822966,7161.95096 C48.3382966,7161.35696 48.8312966,7161.03996 49.5722966,7161.00296 C50.6002966,7160.95296 50.7442966,7161.54096 51.0972966,7162.45696 C51.3602966,7163.14196 51.7112966,7163.84096 51.9072966,7164.55096 C52.2742966,7165.87596 50.9912966,7165.93096 50.8292966,7167.01396 C50.7282966,7167.69696 51.5562966,7168.61296 51.9302966,7169.09996 C52.6632966,7170.05396 53.5442966,7170.87696 54.5382966,7171.50296 C55.1072966,7171.86196 56.0262966,7172.50896 56.6782966,7172.15196 C57.6822966,7171.60196 57.5872966,7169.90896 58.9912966,7170.48196 C59.7182966,7170.77796 60.4222966,7171.20496 61.1162966,7171.57896 C62.1892966,7172.15596 62.1392966,7172.75396 61.7302966,7173.99596 C61.4242966,7174.92396 62.0362966,7173.06796 61.7302966,7173.99596'
                              id='call-[#192]'
                            />
                          </g>
                        </g>
                      </g>
                    </svg>
                    <span className='info-text'>+1 (800) 123-4567</span>
                  </div>
                </li>
              </ul>
              <p>
                Please feel free to contact us at any time, and our team will
                respond as quickly as possible
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Page
