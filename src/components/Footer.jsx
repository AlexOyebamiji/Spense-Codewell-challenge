function Footer() {
  return (
    <div>
      <div className="py-0 px-10 bg-black pb-10">
        <div className="flex gap-9 pt-10 text-white md:flex-wrap">
          <div className="md:basis-2/3">
            <h1 className="font-bold">spense.</h1>
            <p className=" ">
              Spense is an open platform for individuals to share unfiltered
              thoughts. Discuss the topics you love, and get paid for doing just
              that.
            </p>
          </div>

          <div className="md:order-4">
            <h1 className="font-bold">Company</h1>
            <p>About</p>
            <p>Customers</p>
            <p>Blog</p>
          </div>

          <div className="md:order-last ">
            <h1 className="font-bold">Opportunities</h1>
            <p>Jobs</p>
          </div>

          <div className="md:">
            <h1 className="font-bold">Sitemap</h1>
            <p>Homepage</p>
          </div>

          <div>
            <h1 className="font-bold">Resources</h1>
            <p>Support</p>
            <p>Contact</p>
            <p>FAQ</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
