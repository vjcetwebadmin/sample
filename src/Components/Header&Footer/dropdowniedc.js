import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./dropdown.css";

class DropDownAb extends Component {
  constructor() {
    super();

    this.state = {
      showMenu: false
    };

    this.showMenu = this.showMenu.bind(this);
    this.closeMenu = this.closeMenu.bind(this);
  }

  showMenu(event) {
    event.preventDefault();

    this.setState({ showMenu: true }, () => {
      document.addEventListener("click", this.closeMenu);
    });
  }

  closeMenu(event) {
    if (!this.dropdownMenu.contains(event.target)) {
      this.setState({ showMenu: false }, () => {
        document.removeEventListener("click", this.closeMenu);
      });
    }
  }

  render() {
    return (
      <div className="dropdown">
        <span>E&D</span>
        <div className="dropdown-content">
          <p>
            <Link
              to="/about"
              className="patch1"
            >
              IEDC
            </Link>
          </p>
          <p>
            <Link
              to="/about/accreditation"
              className="patch1"
            >
              V-Bic
            </Link>
          </p>
          
        </div>
      </div>
    );
  }
}
export default DropDownAb;