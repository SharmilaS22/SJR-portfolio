import React from "react";

const Navbar = () => { 
    return (
      <nav class='navbar navbar-expand-lg navbar-dark bg-dark-theme text-light'>
        <a class='navbar-brand' href='#'>
          Sharon JR
        </a>
        <button
          class='navbar-toggler'
          type='button'
          style={{ backgroundColor: "#333" }}
          data-toggle='collapse'
          data-target='#navbarTogglerDemo'
          aria-controls='navbarTogglerDemo'
          aria-expanded='false'
          aria-label='Toggle navigation'>
          <span class='navbar-toggler-icon'></span>
        </button>
        <div class='collapse navbar-collapse' id='navbarTogglerDemo'>
          <ul class='navbar-nav ml-auto'>
            <li class='nav-item mx-1'>
              <a class='nav-link' href='#'>
                Home
              </a>
            </li>

            <li class='nav-item mx-1'>
              <a class='nav-link' href='#'>
                Blog
              </a>
            </li>

            <li class='nav-item mx-1'>
              <a class='nav-link' href='#'>
                Contact
              </a>
            </li>
          </ul>
        </div>
      </nav>
    );
};

export default Navbar;
