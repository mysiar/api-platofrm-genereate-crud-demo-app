import React, {Component} from 'react';
import { Link } from 'react-router-dom';

class TopBar extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <a className="navbar-brand" href="/">API Platform - client-generator</a>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item"><Link className="nav-link" to="/books/">Books</Link></li>
              <li className="nav-item"><Link className="nav-link" to="/reviews/">Reviews</Link></li>
            </ul>
          </div>
        </nav>
      </div>
    );
  }
}

export default TopBar;
