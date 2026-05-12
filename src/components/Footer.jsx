import twitterImg from '../assets/twitter.png';
import fbImg from '../assets/fb.png';
import inImg from '../assets/linkedin.png';
import mailImg from '../assets/mail.png';

const Footer = () => {
    return (
        <footer className="bg-black text-white px-8 pt-12">
  <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-13  ">

    <div className="md:col-span-4">
      <h2 className="text-2xl font-bold  mb-3">
        CS — Ticket System
      </h2>

      <p className="text-gray-400 ">
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
      </p>
    </div>

    <nav className="md:col-span-2 md:pl-10">
      <h6 className="text-xl font-semibold mb-3">Company</h6>

      <ul className="space-y-4 text-gray-300">
        <li><a href="#">About Us</a></li>
        <li><a href="#">Our Mission</a></li>
        <li><a href="#">Contact Sales</a></li>
      </ul>
    </nav>

    <nav className="md:col-span-2">
      <h6 className="text-xl font-semibold mb-3">Services</h6>

      <ul className="space-y-4 text-gray-300">
        <li><a href="#">Products & Services</a></li>
        <li><a href="#">Customer Stories</a></li>
        <li><a href="#">Download Apps</a></li>
      </ul>
    </nav>
    <nav className="md:col-span-2">
      <h6 className="text-xl font-semibold mb-3">Information</h6>

      <ul className="space-y-4 text-gray-300">
        <li><a href="#">Privacy Policy</a></li>
        <li><a href="#">Terms & Conditions</a></li>
        <li><a href="#">Join Us</a></li>
      </ul>
    </nav>
    <nav className="md:col-span-3">
      <h6 className="text-xl font-semibold mb-3">
        Social Links
      </h6>

      <ul className="space-y-4 text-gray-300">
        <li>
          <div className='flex gap-2 items-center'>
            <img className="w-5 h-5" src={twitterImg} alt="" />
          <a href="#">@CS — Ticket System</a></div>
        </li>
        <li>
          <div className='flex gap-2 items-center'>
            <img className="w-5 h-5" src={inImg} alt="" />
          <a href="#">@CS — Ticket System</a></div>
        </li>
        <li>
          <div className='flex gap-2 items-center'>
            <img className="w-5 h-5" src={fbImg} alt="" />
          <a href="#">@CS — Ticket System</a></div>
        </li>
        <li>
          <div className='flex gap-2 items-center'>
            <img className="w-5 h-5" src={mailImg} alt="" />
          <a href="#">support@cst.com</a></div>
        </li>
      </ul>
    </nav>
  </div>

  {/* Bottom */}
  <div className="border-t border-gray-800 mt-12 py-6 text-center text-white">
    © 2025 CS — Ticket System. All rights reserved.
  </div>
</footer>
    );
};

export default Footer;