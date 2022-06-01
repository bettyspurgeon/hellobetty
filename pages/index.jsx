import { MiniNavbar } from "../components/MiniNavbar";
import { navbarItems } from "../information/navbarItems";
import { iconLinks } from "../information/iconLinks";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <main className="mx-auto col-lg-8">
        <div
          className="d-flex flex-column align-items-center flex-lg-row jusitfy-content-center"
          id="content"
        >
          <div className="container-xxl bd-gutter">
            <div className="text-center col-lg-12">
              <h1 className="">Hi, I'm Betty!</h1>
              <p>
                I am a Full Stack Web Developer living in Luxembourg. I have a
                background in history, classics, and law.
              </p>
              <p>
                Thank you for checking out my page - please have a look around!
              </p>
              <MiniNavbar
                buttonContent={iconLinks.map((icon) => {
                  return (
                    <>
                      <a
                        className="text-dark px-2 fs-2"
                        target="_blank"
                        rel="noreferrer"
                        href={icon.link}
                      >
                        {icon.icon}
                      </a>
                    </>
                  );
                })}
              />
            </div>
          </div>
          <Image
            src="/computer-memoji.png"
            width={300 + "px"}
            height={300 + "px"}
            alt=""
            srcSet=""
          />
        </div>
      </main>

      <style jsx>{`
      `}</style>
    </>
  );
}
