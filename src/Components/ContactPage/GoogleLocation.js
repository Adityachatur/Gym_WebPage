import React from 'react';

const GoogleLocation = () => {
    return (
        <div className="flex justify-center items-center my-12">
            <div className="w-full lg:w-10/12 lg:h-10/12 mx-2">
                <iframe
                    title="Google Maps"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15111.257364061557!2d73.85543404002314!3d18.761828185707557!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c9f585ac70d1%3A0x7269f7854109659!2sChakan%2C%20Maharashtra%20410501!5e0!3m2!1sen!2sin!4v1703411007191!5m2!1sen!2sin"
                    width="100%"
                    height="450"
                   alt="Google map"
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
            </div>
        </div>
    );
};

export default GoogleLocation;
