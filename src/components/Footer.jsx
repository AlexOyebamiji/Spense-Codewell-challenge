function Footer() {
  return (
    <footer className="py-20 px-10 bg-black">
      <section className="flex flex-wrap gap-9 text-white md:flex-wrap lg:justify-center lg:gap-16">
        <header className="md:basis-2/3 lg:basis-1/3">
          <h1 className="font-bold" data-animation="header">
            spense.
          </h1>
          <p className="lg:w-[20rem]" data-animation="paragraph">
            Spense is an open platform for individuals to share unfiltered
            thoughts. Discuss the topics you love, and get paid for doing just
            that.
          </p>
        </header>

        <section className="md:order-4">
          <h1 className="font-bold" data-animation="paragraph">
            Company
          </h1>
          <p data-animation="paragraph">About</p>
          <p data-animation="paragraph">Customers</p>
          <p data-animation="paragraph">Blog</p>
        </section>

        <section className="md:order-last">
          <h1 className="font-bold" data-animation="paragraph">
            Opportunities
          </h1>
          <p data-animation="paragraph">Jobs</p>
        </section>

        <section>
          <h1 className="font-bold" data-animation="paragraph">
            Sitemap
          </h1>
          <p data-animation="paragraph">Homepage</p>
        </section>

        <section>
          <h1 className="font-bold" data-animation="paragraph">
            Resources
          </h1>
          <p data-animation="paragraph">Support</p>
          <p data-animation="paragraph">Contact</p>
          <p data-animation="paragraph">FAQ</p>
        </section>
      </section>
    </footer>
  );
}

export default Footer;
