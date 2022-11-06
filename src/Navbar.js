import { Link, useMatch, useResolvedPath } from "react-router-dom"
export default function Navbar() {
  return (
<header>

<div id="menu-bar" class="fas fa-bars"></div>

<a href="#" class="logo"><span>E</span>lectric era</a>

<nav class="navbar">
 <CustomLink to="/" className="site-title">
        Home
      </CustomLink>
  <CustomLink to="/book">Book</CustomLink>
  <CustomLink to="/booklet">Book Let</CustomLink>
  <CustomLink to="/service">Service</CustomLink>
  <CustomLink to="/gallery">Gallery</CustomLink>
  <CustomLink to="/review">Review</CustomLink>
  <CustomLink to="/contact">Contact</CustomLink>
</nav>

<div class="icons">
    <i class="fas fa-search" id="search-btn"></i>
    <i class="fas fa-user" id="login-btn"></i>
</div>

<form action="" class="search-bar-container">
    <input type="search" id="search-bar" placeholder="search here..."/>
    <label for="search-bar" class="fas fa-search"></label>
</form>

</header>


  )
}

function CustomLink({ to, children, ...props }) {
  const resolvedPath = useResolvedPath(to)
  const isActive = useMatch({ path: resolvedPath.pathname, end: true })

  return (
    <li className={isActive ? "active" : ""}>
      <Link to={to} {...props}>
        {children}
      </Link>
    </li>
  )
}