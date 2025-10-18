import React from 'react';
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';

const FindUs = () => {
    return (
      <div>
        <h1 className="font-bold">Fins us On</h1>
        <div>
          <div class="join join-vertical w-full">
            <button class="btn bg-base-100 join-item justify-start"> <FaFacebook></FaFacebook> Facebook</button>
            <button class="btn bg-base-100 join-item justify-start"><FaTwitter></FaTwitter> Twitter</button>
            <button class="btn bg-base-100 join-item justify-start"><FaInstagram></FaInstagram> Instagram</button>
          </div>
        </div>
      </div>
    );
};

export default FindUs;