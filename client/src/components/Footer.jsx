import { FaGithub, FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa';

const Footer = () => (
    <footer className="pb-5">
        <div className="flex text-white justify-between items-center flex-col md:flex-row">
            <div className=''>
                <p className='mb-5 md:mb-0'>
                    Copyright © 2023 Luka Vashakmadze. All Rights Reserved.
                </p>
            </div>
            <div>
                <p>Public Beta v1.0</p>
            </div>
            <div className='flex'>
                <a href='https://github.com/Vashakmadze' target={"_blank"}>
                    <FaGithub className='text-[2rem] cursor-pointer hover:text-teal-300 transition duration-300 ease-in-out ml-4'/>
                </a>
                <a href='https://www.facebook.com/luka.vashakmadze.1' target={"_blank"}>
                    <FaFacebook className='text-[2rem] cursor-pointer hover:text-teal-300 transition duration-300 ease-in-out ml-4'/>
                </a>
                <a href='https://www.instagram.com/lukavasha/' target={"_blank"}>
                    <FaInstagram className='text-[2rem] cursor-pointer hover:text-teal-300 transition duration-300 ease-in-out ml-4'/>
                </a>
                <a href='https://www.linkedin.com/in/luka-vashakmadze-6690311b7/' target={"_blank"}>
                    <FaLinkedin className='text-[2rem] cursor-pointer hover:text-teal-300 transition duration-300 ease-in-out ml-4'/>
                </a>
            </div>
        </div>
    </footer>
)

export default Footer;