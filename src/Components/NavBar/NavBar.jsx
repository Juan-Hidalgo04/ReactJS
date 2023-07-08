import CartWidget from "../CartWidget/CartWidget";

function NavBar () {
    return (
        <nav class="navbar navbar-expand-lg bg-body-tertiary mx-5">
        <div class="container-fluid">
            <a class="navbar-brand" href="#">Water in the Shoes</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse justify-content-end" id="navbarNavAltMarkup">
              <div class="navbar-nav">
                <a class="nav-link active" aria-current="page" href="">Packages</a>
                <a class="nav-link" href="">Beach</a>
                <a class="nav-link" href="">Camping</a>
                <a class="nav-link" href=""><CartWidget/></a>
              </div>
          </div>
        </div>
      </nav>
    );
}

export default NavBar; 