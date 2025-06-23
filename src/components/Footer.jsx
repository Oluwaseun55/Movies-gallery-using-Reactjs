import "../css/Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>&copy; {new Date().getFullYear()} MovieHub. All rights reserved.</p>
        <div className="footer-links">
          <a href="/about">About</a>
          <a
            href="https://github.com/Oluwaseun55"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>
          <a href="mailto:oluyinkaoluwaseun6@gmail.com">Contact</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
