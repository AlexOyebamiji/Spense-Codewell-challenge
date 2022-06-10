function Footer() {
  return (
    <div>
      <div className="py-0 px-5 bg-black pb-10">
        <div className=" text-white pt-16 pb-6">
          <h1 className="font-bold">spense.</h1>
          <p>
            Spense is an open platform for individuals to share unfiltered
            thoughts. Discuss the topics you love, and get paid for doing just
            that.
          </p>
        </div>

        <div className="grid gap-4 grid-cols-2 text-white">
          <div>
            <h1 className="font-bold">Company</h1>
            <p>About</p>
            <p>Customers</p>
            <p>Blog</p>
          </div>

          <div>
            <h1 className="font-bold">Opportunities</h1>
            <p>Jobs</p>
          </div>

          <div>
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
