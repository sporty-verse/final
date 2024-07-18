import React from "react";
import "./JoinUs.scss";

const JoinUs = () => {
  return (
    <div className="mb-10">
      <span className="text-2xl">Bize Katıl</span>
      <div className="image-wrapper mt-4">
        <div className="relative">
          <img
            className="hidden  lg:block"
            src="/images/one.jpg"
            alt="Üyelik"
          />
          <img
            className="lg:hidden block"
            src="/images/one.jpg"
            alt="üyelik"
          />
          <span className="text-in-photo">NIKE Üyeliğin</span>
          <span className="text-in-photo-desc">
            Üye ol ve Nike By You ile sevgini göster.
          </span>
          <button className="button-in-photo">Bize Katıl</button>
        </div>
      </div>
    </div>
  );
};

export default JoinUs;
