import React, { Component } from 'react'
// import { Navbar, Nav, MenuItem, NavDropdown, NavItem } from 'react-bootstrap'
import './styles.css'
import { Link } from 'react-router-dom'

class NavBar extends Component {
  render () {
    return (
      <nav className="navbar navbar-default" role="navigation">
        <div className="container">
          <div className="row">
            <div className="site-navigation-inner col-sm-12">
              <div className="navbar-header">
                <button
                  type="button"
                  className="btn navbar-toggle"
                  data-toggle="collapse"
                  data-target=".navbar-ex1-collapse"
                >
                  <span className="">Toggle navigation</span>
                  <span className="icon-bar" />
                  <span className="icon-bar" />
                  <span className="icon-bar" />
                </button>
              </div>
              <div className="collapse navbar-collapse navbar-ex1-collapse">
                <ul id="menu-all-pages" className="nav navbar-nav">
                  <li
                    id="menu-item-1696"
                    className="menu-item menu-item-type-custom menu-item-object-custom current-menu-item current_page_item menu-item-home menu-item-1696 active"
                  >
                    <a title="Home" href="https://colorlib.com/activello/">
                      Home
                    </a>
                  </li>
                  <li
                    id="menu-item-1639"
                    className="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children menu-item-1639"
                  >
                    <a title="About The Tests" href="">
                      About The Tests
                    </a>
                    <span className="activello-dropdown" />
                    <ul role="menu" className=" dropdown-menu">
                      <li
                        id="menu-item-1803"
                        className="menu-item menu-item-type-post_type menu-item-object-page menu-item-1803"
                      >
                        <a title="Page Markup And Formatting" href="">
                          Page Markup And Formatting
                        </a>
                      </li>
                      <li
                        id="menu-item-1640"
                        className="menu-item menu-item-type-post_type menu-item-object-page menu-item-1640"
                      >
                        <a title="Clearing Floats" href="">
                          Clearing Floats
                        </a>
                      </li>
                      <li
                        id="menu-item-1641"
                        className="menu-item menu-item-type-post_type menu-item-object-page menu-item-1641"
                      >
                        <a title="Page with comments" href="">
                          Page with comments
                        </a>
                      </li>
                      <li
                        id="menu-item-1642"
                        className="menu-item menu-item-type-post_type menu-item-object-page menu-item-1642"
                      >
                        <a title="Page with comments disabled" href="">
                          Page with comments disabled
                        </a>
                      </li>
                      <li
                        id="menu-item-1646"
                        className="menu-item menu-item-type-post_type menu-item-object-page menu-item-1646"
                      >
                        <a title="Lorem Ipsum" href="">
                          Lorem Ipsum
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li
                    id="menu-item-1643"
                    className="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children menu-item-1643"
                  >
                    <a title="Level 1" href="">
                      Level 1{' '}
                    </a>
                    <span className="activello-dropdown" />
                    <ul role="menu" className=" dropdown-menu">
                      <li
                        id="menu-item-1644"
                        className="menu-item menu-item-type-post_type menu-item-object-page menu-item-1644"
                      >
                        <a title="Level 2" href="">
                          Level 2
                        </a>
                      </li>
                      <li
                        id="menu-item-1645"
                        className="menu-item menu-item-type-post_type menu-item-object-page menu-item-1645"
                      >
                        <a title="Level 3" href="">
                          Level 3
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li
                    id="menu-item-1813"
                    className="menu-item menu-item-type-post_type menu-item-object-page menu-item-1813"
                  >
                    <Link to={'./create-post'}>
                      <a title="Shop" href="/create-post">
                        Shop
                      </a>
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="nav-search">
                <form action="" method="get">
                  <input type="text" name="s" value="" placeholder="Search" />
                  <button
                    type="submit"
                    className="header-search-icon"
                    name="submit"
                    id="searchsubmit"
                    value="Search"
                  >
                    <i className="fa fa-search" />
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </nav>
    )
  }
}

export default NavBar
