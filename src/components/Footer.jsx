
import React from 'react';
import {Link} from 'react-router-dom';

const Footer = () => {
  return (
    
<footer className="bg-white dark:bg-gray-900 w-[50rem] md:w-auto overflow-hidden">
    <div className="mx-auto md:w-full w-[52rem] max-w-screen-xl">
      <div className="grid grid-cols-2 gap-8 md:px-4 px-20 md:py-6 py-20 lg:py-8 md:grid-cols-4">
        <div>
            <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Company</h2>
            <ul className="text-gray-500 dark:text-gray-400 font-medium">
                <li className="mb-4">
                    <Link to="#" className=" hover:underline">About</Link>
                </li>
                <li className="mb-4">
                    <Link to="#" className="hover:underline">Careers</Link>
                </li>
                <li className="mb-4">
                    <Link to="#" className="hover:underline">Brand Center</Link>
                </li>
                <li className="mb-4">
                    <Link to="#" className="hover:underline">Blog</Link>
                </li>
            </ul>
        </div>
        <div>
            <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Help center</h2>
            <ul className="text-gray-500 dark:text-gray-400 font-medium">
                <li className="mb-4">
                    <Link to="#" className="hover:underline">Discord Server</Link>
                </li>
                <li className="mb-4">
                    <Link to="#" className="hover:underline">Twitter</Link>
                </li>
                <li className="mb-4">
                    <Link to="#" className="hover:underline">Facebook</Link>
                </li>
                <li className="mb-4">
                    <Link to="#" className="hover:underline">Contact Us</Link>
                </li>
            </ul>
        </div>
        <div>
            <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Legal</h2>
            <ul className="text-gray-500 dark:text-gray-400 font-medium">
                <li className="mb-4">
                    <Link to="#" className="hover:underline">Privacy Policy</Link>
                </li>
                <li className="mb-4">
                    <Link to="#" className="hover:underline">Licensing</Link>
                </li>
                <li className="mb-4">
                    <Link to="#" className="hover:underline">Terms &amp; Conditions</Link>
                </li>
            </ul>
        </div>
        <div>
            <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Download</h2>
            <ul className="text-gray-500 dark:text-gray-400 font-medium">
                <li className="mb-4">
                    <Link to="#" className="hover:underline">iOS</Link>
                </li>
                <li className="mb-4">
                    <Link to="#" className="hover:underline">Android</Link>
                </li>
                <li className="mb-4">
                    <Link to="#" className="hover:underline">Windows</Link>
                </li>
                <li className="mb-4">
                    <Link to="#" className="hover:underline">MacOS</Link>
                </li>
            </ul>
        </div>
    </div>
    <div className="md:px-4 px-5 md:py-6 bg-gray-100 dark:bg-gray-700 md:flex md:items-center md:justify-between">
        <span className="text-sm text-gray-500 dark:text-gray-300 text-center">© 2023 Flipkart Clone For Grid 5.0 All Rights Reserved.
        </span>
        
      </div>
    </div>
</footer>

  );
};

export default Footer;
