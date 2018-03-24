import React, { Component } from 'react'
import {Link} from 'react-router-dom'

export default class Header extends Component {
  render() {
    return (
      <div>
        <div class="body">
            <div class="navbar">
            <div class="navbar-inner">
                <div class="container">
                    <li class="brand"><Link to = '/'>
                        <img src="../images/logo.png" width="120" height="40" alt="Logo" />
                        </Link></li>
                    
                    <button type="button" class="btn btn-navbar" data-toggle="collapse" data-target=".nav-collapse">
                        <i class="icon-menu"></i>
                    </button>
                   
                    <div class="nav-collapse collapse pull-right">
                        <ul class="nav" id="top-navigation">
                            <li class="active"><Link to ='/'>Home</Link></li>
                            <li><Link to = 'services'>Services</Link></li>
                            <li><Link to = '/portfolio'>Portfolio</Link></li>
                            <li><Link to = '/about'>About</Link></li>
                            <li><Link to = '/clients'>Clients</Link></li>
                            <li><Link to = '/price'>Price</Link></li>
                            <li><Link to = '/contact'>Contact</Link></li>
                        </ul>
                    </div>
                    
                </div>
            </div>
        </div>
        </div>
      </div>
    )
  }
}
