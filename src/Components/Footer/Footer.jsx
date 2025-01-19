import { CiAt } from "react-icons/ci";
import { ImPower } from "react-icons/im";

const Footer = () => {
  return (
    <div className="mt-10">
      <footer className=" bg-black p-10 text-white rounded-md">
        <div className="footer max-w-[1260px] mx-auto">
          <aside>
            <p>
              <span className="text-2xl font-extrabold pb-10 leading-loose">
                CareerHubApp
              </span>
              <br />
              <span>
                There are many variations of passages <br />
                of lorem ipsum, but the majority have
                <br />
                suffered alternation in some form.
              </span>
              <img src="images/social.png" className="mt-3"></img>
            </p>
          </aside>
          <nav>
            <h6 className=" text-white font-bold text-xl">Company</h6>
            <a className="link link-hover text-slate-500 font-medium">
              About Us
            </a>
            <a className="link link-hover text-slate-500 font-medium">
              Products
            </a>
            <a className="link link-hover text-slate-500 font-medium">
              Latest News
            </a>
            <a className="link link-hover text-slate-500 font-medium">Career</a>
          </nav>
          <nav>
            <h6 className="text-white font-bold text-xl">Product</h6>
            <a className="link link-hover text-slate-500 font-semibold">
              Prototype
            </a>
            <a className="link link-hover text-slate-500 font-semibold">
              Plans and Pricing
            </a>
            <a className="link link-hover text-slate-500 font-semibold">
              Customers
            </a>
            <a className="link link-hover text-slate-500 font-semibold">
              Integrations
            </a>
          </nav>
          <nav>
            <h6 className="text-white font-bold text-xl">Support</h6>
            <a className="link link-hover text-slate-500 font-medium">
              Help Desk
            </a>
            <a className="link link-hover text-slate-500 font-medium">Sales</a>
            <a className="link link-hover text-slate-500 font-medium">
              Become a Partner
            </a>
            <a className="link link-hover text-slate-500 font-medium">
              Developer
            </a>
          </nav>
          <nav>
            <h6 className="text-white font-bold text-xl">Contact</h6>
            <a className="link link-hover text-slate-500 font-medium">
              742 New Bostone, USA
            </a>
            <a className="link link-hover text-slate-500 font-medium">
              +4553-527-866
            </a>
          </nav>
        </div>
        <div className="border-t-2 border-slate-500 max-w-[1260px] mx-auto mt-10 md:mt-7">
          <div className="flex flex-col md:flex-row justify-between items-center text-slate-500 pt-3">
            <h1 className="text-[14px] font-medium">
              <CiAt className="inline text-xl font-extrabold mr-1" />
              2024 <span className="font-extrabold">CareerHubApp</span>. All
              rights reserved
            </h1>
            <h1 className="text-[14px] font-medium mt-1 md:mt-0">
              <ImPower className="inline text-lg font-extrabold mr-1" />
              Powered by <span className="font-extrabold">CareerHubApp</span>
            </h1>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
