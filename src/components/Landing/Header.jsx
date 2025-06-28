import React from "react";

const Header = () => {
  return (
    <header className="p-2 md:p-5">
      <div className="applogo">
        <img src="images/app/logo.svg" className="max-w-[70%] mx-auto lg:max-w-full" />
      </div>
      <div className="flex items-center md:items-start justify-between">
        <div className="responsive-logo logo hidden">
          <img src="images/app/logo.svg" className="max-w-[100px] sm:max-w-[150px] lg:max-w-full" />
        </div>
        <ul className="flex header-links flex-col gap-1">
          <li>
            <a href="/link">Trimmo.short Link</a>
          </li>
          <li>
            <a href="/chat">Trimmo.chat</a>
          </li>
          <li>
            <a href="/bio">Trimmo.bio</a>
          </li>
        </ul>
        <ul className="flex items-center gap-2">
          <li>
            <a href="/login" className="me-2">
              Log in
            </a>
          </li>
          <li className="hidden sm:block">
            <button className="btn-outline">Get a Quote</button>
          </li>
          <li>
            <a href="/register" className="btn">
              Sign up Free
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
