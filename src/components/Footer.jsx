function Footer() {
  return (
    <footer className="py-10 px-10 bg-black pb-10" data-scroll-section>
      <section className="flex flex-wrap gap-9 text-white md:flex-wrap lg:justify-center lg:gap-16">
        <header className="md:basis-2/3 lg:basis-1/3">
          <h1 className="font-bold">spense.</h1>
          <p className="lg:w-[20rem]">
            Spense is an open platform for individuals to share unfiltered
            thoughts. Discuss the topics you love, and get paid for doing just
            that.
          </p>
        </header>

        <section className="md:order-4">
          <h1 className="font-bold">Company</h1>
          <p>About</p>
          <p>Customers</p>
          <p>Blog</p>
        </section>

        <section className="md:order-last ">
          <h1 className="font-bold">Opportunities</h1>
          <p>Jobs</p>
        </section>

        <section className="md:">
          <h1 className="font-bold">Sitemap</h1>
          <p>Homepage</p>
        </section>

        <section>
          <h1 className="font-bold">Resources</h1>
          <p>Support</p>
          <p>Contact</p>
          <p>FAQ</p>
        </section>
      </section>
    </footer>
  );
}

export default Footer;
