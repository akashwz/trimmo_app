import React from "react";

const Aboutus = () => {
  return (
    <div className="container">
      <button disabled className="btn-outline mx-auto">
        About Us
      </button>
      <h3 className="sec-title">About Us: Improving Your Online Presence</h3>
      <div className="flex flex-wrap lg:flex-nowrap gap-5">
        <div className="w-full lg:w-[50%] h-auto flex items-end">
          <button className="btn">Use this trimmo</button>
        </div>
        <div className="w-full flex flex-col gap-4 lg:w-[50%]">
          <p className="info-text">
            At Trimmo App, we’re dedicated to helping individuals and businesses streamline their
            online identities. Our flagship tool, Trimmo, enables users to create a single,
            shareable link that consolidates all their social media profiles, websites, and other
            digital touchpoints. Whether you're an influencer, entrepreneur, or organization, Trimmo
            App empowers you to connect with your audience effortlessly.
          </p>
          <p className="info-text">
            We pride ourselves on providing a customizable and user-friendly platform. With features
            like advanced analytics, custom domain integration, and mobile-responsive designs,
            Trimmo App allows you to create a page that reflects your personal or brand identity.
            Our tools are designed to help you track engagement, optimize performance, and showcase
            everything you do in one convenient link.
          </p>
          <p className="info-text">
            At Trimmo App, innovation and accessibility are at the heart of what we do. We aim to
            bridge the gap between creativity and functionality, making it easier for everyone to
            share their story and grow their digital presence.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Aboutus;
