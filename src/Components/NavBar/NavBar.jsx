import CartWidget from "./CartWidget/CartWidget";
import { Link } from "react-router-dom";

function NavBar () {
    return (
        <nav class="navbar navbar-expand-lg bg-body-tertiary mx-5">
        <div class="container-fluid">
            <Link class="navbar-brand" to="/">Water in the Shoes</Link>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse justify-content-end" id="navbarNavAltMarkup">
              <div class="navbar-nav">
                <Link class="nav-link active" aria-current="page" to="/">Packages</Link>
                <Link class="nav-link" to="/">Beach</Link>
                <Link class="nav-link" to="/">Camping</Link>
                <Link class="nav-link" to="/"><CartWidget/></Link>
              </div>
          </div>
        </div>
      </nav>
    );
}

export default NavBar; 