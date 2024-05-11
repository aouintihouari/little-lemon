import logo from "../images/small_logo.png";

function Footer() {
  return (
    <footer>
      <section>
        <div className="company-info">
          <img src={logo} alt="logo" />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur
            blanditiis itaque pariatur dolores delectus sed soluta, nemo debitis
            asperiores aperiam eaque! Blanditiis quis omnis pariatur sapiente
            minima vitae excepturi saepe?
          </p>
        </div>
        <div>
          <h3>Sessions</h3>
          <ul>
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/">About</a>
            </li>
            <li>
              <a href="/">Menu</a>
            </li>
            <li>
              <a href="/">Reservations</a>
            </li>
            <li>
              <a href="/">Order Online</a>
            </li>
            <li>
              <a href="/">Login</a>
            </li>
          </ul>
        </div>
        <div>
          <h3>Contact</h3>
          <ul>
            <li>Address: 123 Towncity, USA</li>
            <li>Phone: ++ 0123 458 789</li>
            <li>Email: littlelemon.com</li>
          </ul>
        </div>
        <div>
          <h3>Social Media Links</h3>
          <ul>
            <li>
              <a href="/">Facebook</a>
            </li>
            <li>
              <a href="/">Instagram</a>
            </li>
            <li>
              <a href="/">Twitter</a>
            </li>
          </ul>
        </div>
      </section>
    </footer>
  );
}

export default Footer;
