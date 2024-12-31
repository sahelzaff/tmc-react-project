import React from 'react';

const GoogleMapFooter = () => {
  return (
    <div className="w-full h-[200px] md:h-[200px] relative">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15541.325056165337!2d80.2240392!3d13.1414925!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5265aa6a9c1217%3A0xc8e3844e601b0131!2sRadiance%20Suprema!5e0!3m2!1sen!2sin!4v1725341358616!5m2!1sen!2sin"
        className="w-full h-full rounded-lg"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
};

export default GoogleMapFooter;
