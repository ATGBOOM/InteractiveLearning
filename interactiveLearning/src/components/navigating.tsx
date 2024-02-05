import screen from "../assets/googlescreen.jpg";
import "../index.css";

function Navigating() {
  return (
    <>
      <h1>
        We will learn one of the most important techniques: Searching on the
        internet
      </h1>
      <br />
      <img className="screenIMG" src={screen}></img>
      <br />
      <p>
        A domain name is a unique address on the internet that helps people find
        a specific website. It typically consists of two parts: the actual name
        (like "example") and the domain extension (like ".com"). To search for a
        domain, type the desired name in your browser's search bar and add
        ".com" or another extension. If the domain is available, you can
        register it to create your own website.
      </p>
      <p>
        Now search the domain name "bingbong.com" on your search bar to reach
        the next section of your course{" "}
      </p>
    </>
  );
}

export default Navigating;
