const Hero = () => {
  return (
    <section className="scaffold hero">
      <div>
        <p className="text-base text-blue-400 text-opacity-70">
          Hey there, my name is
        </p>
        <div>
          <h1 className="text-7xl font-medium">Antonio Maina</h1>
        </div>
        <h2 className="text-6xl">I build digital products</h2>
      </div>

      <div>
        <p className="text-base text-white text-opacity-50;">
          I'm a software engineer based in Nairobi, Kenya. I build and help
          build digital products that make a difference.
        </p>
        <p className="text-base text-white text-opacity-50;">
          I design, code and manage scalable websites, web applications, mobile
          applications and services.
        </p>
      </div>

      <div>
        <button className="btn">Get in Touch</button>
      </div>
    </section>
  );
};

export default Hero;
