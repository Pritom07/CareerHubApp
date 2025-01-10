const Footer = () => {
  return (
    <div className="mt-10">
      <footer className="footer bg-black p-10 text-white rounded-md">
        <aside>
          <p>
            <span className="text-2xl font-extrabold pb-10">CareerHubApp</span>
            <br />
            <span className="mt-10">
              There are many variations of passages <br />
              of lorem ipsum, but the majority have
              <br />
              suffered alternation in some form
            </span>
            <img src="images/social.png" className="mt-2"></img>
          </p>
        </aside>
        <nav>
          <h6 className=" text-white font-bold text-xl">Services</h6>
          <a className="link link-hover text-slate-500 font-medium">Branding</a>
          <a className="link link-hover text-slate-500 font-medium">Design</a>
          <a className="link link-hover text-slate-500 font-medium">
            Marketing
          </a>
          <a className="link link-hover text-slate-500 font-medium">
            Advertisement
          </a>
        </nav>
        <nav>
          <h6 className="text-white font-bold text-xl">Company</h6>
          <a className="link link-hover text-slate-500 font-semibold">
            About us
          </a>
          <a className="link link-hover text-slate-500 font-semibold">
            Contact
          </a>
          <a className="link link-hover text-slate-500 font-semibold">Jobs</a>
          <a className="link link-hover text-slate-500 font-semibold">
            Press kit
          </a>
        </nav>
        <nav>
          <h6 className="text-white font-bold text-xl">Legal</h6>
          <a className="link link-hover text-slate-500 font-medium">
            Terms of use
          </a>
          <a className="link link-hover text-slate-500 font-medium">
            Privacy policy
          </a>
          <a className="link link-hover text-slate-500 font-medium">
            Cookie policy
          </a>
        </nav>
      </footer>
    </div>
  );
};

export default Footer;
