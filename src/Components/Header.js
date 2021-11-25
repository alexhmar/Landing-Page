const Header = () => {
  return (
    <div className="Container-fluid" id="navbar">
      <header id="header">
        <img src="images/book.png" alt="book" width="40px" height="40px" />
        <h1>Landing Page</h1>
        <p className="nav-text" id="about-text">
          <a className="nav-a" href="/about">
            About
          </a>
        </p>
        <p className="nav-text" id="home">
          <a className="nav-a" href="/">
            Home
          </a>
        </p>
      </header>
    </div>
  );
};

export default Header;
