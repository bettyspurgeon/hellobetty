import "../styles/globals.css";
import Head from "next/head";
import Link from "next/link";
// add bootstrap css
import "bootstrap/dist/css/bootstrap.css";
import { Navbar } from "../components/Navbar";
import { navbarItems } from "../information/navbarItems";
import { iconLinks } from "../information/iconLinks";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/css/bootstrap.min.css"
          rel="stylesheet"
          integrity="sha384-0evHe/X+R7YkIZDRvuzKMRqM+OrBnVFBL6DOitfPri4tjfHxaWutUpFmBp4vmVor"
          crossorigin="anonymous"
        ></link>
      </Head>
      <Navbar
        navIcon={
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            fill="currentColor"
            class="bi bi-code-slash"
            viewBox="0 0 16 16"
          >
            <path d="M10.478 1.647a.5.5 0 1 0-.956-.294l-4 13a.5.5 0 0 0 .956.294l4-13zM4.854 4.146a.5.5 0 0 1 0 .708L1.707 8l3.147 3.146a.5.5 0 0 1-.708.708l-3.5-3.5a.5.5 0 0 1 0-.708l3.5-3.5a.5.5 0 0 1 .708 0zm6.292 0a.5.5 0 0 0 0 .708L14.293 8l-3.147 3.146a.5.5 0 0 0 .708.708l3.5-3.5a.5.5 0 0 0 0-.708l-3.5-3.5a.5.5 0 0 0-.708 0z" />
          </svg>
        }
        navbarContent={navbarItems.map((item) => {
          return (
            <li className="px-2">
              <a className="nav-link" href={item.link}>
                {item.name}
              </a>
            </li>
          );
        })}
        icons={iconLinks.map((icon) => {
          return (
            <a
              className="text-secondary fs-4 px-3"
              target="_blank"
              href={icon.link}
            >
              {icon.icon}
            </a>
          );
        })}
      />

      <Component {...pageProps} />
      <footer className="d-flex flex-row align-items-center justify-content-between p-2 px-lg-4">
        <p className="text-muted m-0"> &copy; Betty Spurgeon 2022</p>
        <div>
          {iconLinks.map((icon) => {
            return (
              <a
                className="text-secondary px-1"
                target="_blank"
                href={icon.link}
              >
                {icon.icon}
              </a>
            );
          })}
        </div>
      </footer>
      <script
        src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-pprn3073KE6tl6bjs2QrFaJGz5/SUsLqktiwsUTF55Jfv3qYSDhgCecCxMW52nD2"
        crossorigin="anonymous"
      ></script>
      <style jsx global>
        {`
          #__next {
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            height: 100vh;
          }
          .offcanvas-end {
            max-width: 70%;
          }
          footer > p {
            font-size: 0.75rem;
          }
        `}
      </style>
    </>
  );
}

export default MyApp;
