export default function About() {
  return (
    <>
      <main className="text-center py-4">
        <div>
          <h1>Hello, I'm Betty</h1>
          <h2 className="fs-4 text-secondary">
            I'm a Full Stack web developer from Canada living in Luxembourg.
          </h2>
        </div>
        <img src="./about-image.png" alt="" />
        <div className="col-10 mx-auto d-flex flex-column">
          <h3>Education</h3>
          <div>
            <div className="border-start ms-lg-5 ps-2">
              <div>
                <h4 className="fs-5">NumericALL & CNFPC</h4>
                <p>September 2018 - May 2020</p>
                <p className="fs-6">
                  Certification in Full Stack web development
                </p>
              </div>
              <div>
                <h4 className="fs-5">University of Edinburgh</h4>
                <p>September 2018 - May 2020</p>
                <p className="fs-6">
                  Bachellor of Laws - <span>Awarded with Merit</span>
                </p>
              </div>
              <div className="">
                <h4 className="fs-5">McMaster University</h4>
                <p>September 2018 - May 2020</p>
              </div>
              <div className="">
                <h4 className="fs-5">McMaster University</h4>
                <p>September 2018 - May 2020</p>
              </div>
            </div>
          </div>
        </div>
      </main>
      <style jsx>{`
        img {
          width: 15rem;
        }
      `}</style>
    </>
  );
}
