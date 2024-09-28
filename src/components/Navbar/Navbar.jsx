import "../Navbar/Navbar.css";
import { Link } from "react-router-dom";
import { useAuth } from "../../contexts/authContext";
import { useWishlist } from "../../contexts/wishlistContext";
import { useCart } from "../../contexts/cartContext";
import { SearchBar } from "../SearchBar/SearchBar";

const Navbar = () => {
  const { isAuth, logoutHandler } = useAuth();
  const { wishlistState } = useWishlist();
  const { cartState } = useCart();

  return (
    <nav className="nav-bar sm:flex-row py-3 max-w-screen mb-3 fixed left-0 right-0">
      <Link to="/" className="nav-brand">
      <a class="ml-2" href="/">
      <img class="max-w-25 lg:max-w-30 xl:max-w-40" src="/assets/logo.svg" alt="Parfumdreams" loading="lazy"/>
     </a>
      </Link>

      {/* <Link to="/products" className="nav-primary">
        <span>Shop</span>
      </Link> */}

      {/* <div className="nav-search input input-primary">
        <SearchBar />
      </div> */}

<div className="nav-search relative flex items-center justify-between w-full max-w-md">
  
    <SearchBar />
     
    <button className="absolute right-0 top-0 h-10 w-10 flex items-center justify-center  rounded-full">
      <i className="fa-solid fa-search"></i>
    </button>
  </div>








      <div className="nav-action">
        <Link to="/wishlist" className="icon" title="Wishlist">
        <i class="fa-regular fa-heart"></i>
          {isAuth && wishlistState.length > 0 ? (
            <span className="badge">{wishlistState.length}</span>
          ) : null}
        </Link>

        <Link to="/cart" className="icon" title="Cart">
        <i class="fa-solid fa-bag-shopping"></i>    
              {isAuth && cartState.length > 0 ? (
            <span className="badge">{cartState.length}</span>
          ) : null}
        </Link>

        {isAuth ? (
          <Link to="/profile" className="icon profile" title="Profile">
            <i className="fa-solid fa-user"></i>
          </Link>
        ) : (
          <Link to="/login" className="icon login" title="Login">
          <i class="fa-regular fa-user"></i>
          </Link>
        )}
      </div>
    </nav>
  );
};

export { Navbar };
