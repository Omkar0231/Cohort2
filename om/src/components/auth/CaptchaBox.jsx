import React from 'react';
import ReCAPTCHA from 'react-google-recaptcha';

const CaptchaBox = ({ onVerified }) => {
    const handleChange = (token) => {
        if (token) {
            // Only verify if token is valid (not null or undefined)
            onVerified(true);
        }
    };

    return (
        <div className="my-4 flex justify-center">
            <ReCAPTCHA
                sitekey="6Lfr-BsrAAAAAHfbaJKqsmriComi_ylrO3pJMBoy" // Your real site key
                onChange={handleChange}
            />
        </div>
    );
};

export default CaptchaBox;
