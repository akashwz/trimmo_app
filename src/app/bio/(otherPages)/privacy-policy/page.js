import React from 'react'
export const metadata = {
  title: 'Privacy Policy & Terms',
  description:
    "Review our Privacy Policy and Terms to understand how we protect your data and your rights when using our services. Stay informed and secure."
}
const Page = () => {
  return (
    <>
      <div className='container flex flex-col gap-[120px]'>
        <div className='py-[40px] sm:pt-[80px] herosection'>
          <h2 className='mb-5'>Privacy Policy & Terms of Service</h2>
          <p className='mb-8 text-base lg:text-[18px]'>
            Welcome back to Trimmo! Your trust is our highest priority. To
            promote openness and your confidence in using our Platform, we have
            outlined our Privacy Policy and Terms of Use below.
          </p>
          <h3 className='text-2xl lg:text-4xl mb-3'>Privacy Policy</h3>
          <p className='mb-8 text-base lg:text-[18px]'>
            Trimmo.bio values your privacy and is committed to protecting your
            personal information
          </p>
          <h4 className='text-xl xl:text-2xl mb-3'>
            What Information We Collect
          </h4>
          <ul className='pl-8 lg:pl-16 list-disc mb-8'>
            <li className='mb-3'>
              <b>Personal Information : </b>Name, email address, and other
              details you provide during registration.
            </li>
            <li>
              <b>Usage Data : </b>Read about how you use our platform to improve
              your experience.
            </li>
          </ul>
          <h4 className='text-xl xl:text-2xl mb-3'>
            How We Use Your Information
          </h4>
          <ul className='pl-8 lg:pl-16 list-disc mb-8'>
            <li className='mb-3'>
              We want to supply and improve our services.
            </li>
            <li className='mb-3'>For improved payment processing.</li>
            <li>To provide information, deals, and support.</li>
          </ul>
          <h4 className='text-xl xl:text-2xl mb-3'>Data Security</h4>
          <p className='mb-16 text-base lg:text-[18px]'>
            Your information is encrypted and stored securely. We do not
            disclose or sell your personal information to third parties without
            your permission.
          </p>
          <h3 className='text-2xl lg:text-4xl mb-8'>Terms of Service</h3>
          <h3 className='text-xl lg:text-2xl mb-3'>Acceptance of Terms</h3>
          <p className='mb-8 text-base lg:text-[18px]'>
            By accessing or using Trimmo.bio, you agree to comply with these
            Terms of Service.
          </p>
          <h4 className='text-xl xl:text-2xl mb-3'>User Responsibilities</h4>
          <ul className='pl-8 lg:pl-16 list-disc mb-8'>
            <li className='mb-3'>
              You are responsible for safeguarding your account credentials.
            </li>
            <li className='mb-3'>
              All postings must follow applicable laws and not violate the
              rights of third parties.
            </li>
          </ul>
          <h4 className='text-xl xl:text-2xl mb-3'>Prohibited Activities</h4>
          <ul className='pl-8 lg:pl-16 list-disc mb-8'>
            <li className='mb-3'>
              Using the Forum to conduct illegal or harmful acts.
            </li>
            <li className='mb-3'>Installing harmful software or material.</li>
          </ul>
          <h4 className='text-xl xl:text-2xl mb-3'>Limitation of Liability</h4>
          <p className='mb-8'>
            Trimmo.bio will not be liable for any indirect, incidental, or
            consequential damages resulting from the use of our Platform.
          </p>
          <h4 className='text-xl xl:text-2xl mb-3'>Changes to Terms</h4>
          <p className='mb-4'>
            We reserve the right to update these Terms of Service at any time.
            Significant changes will be communicated to you via email or
            platform notification.
          </p>
          <p className='mb-4'>
            If you have any questions or concerns about our Privacy Policy or
            Terms of Service, please contact us at:
          </p>
          <p className='mb-4'>
            <b>Email :</b>
            <a
              className='text-blue-600 hover:underline ms-2'
              href='mailto:support@trimmo.bio'
            >
              support@trimmo.bio
            </a>
          </p>
          <p>
            Thank you for choosing Trimmo.bio, where we’re committed to
            providing a safe and seamless experience for all users.
          </p>
        </div>
      </div>
    </>
  )
}

export default Page
