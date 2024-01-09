import React from 'react'

const Mobile_Navigation = () => {
  return (
    <div>
      <nav class="navbar navbar-expand-lg navbar-light d-block d-lg-none mb-5">
        <div class="container">
          <a class="navbar-brand" href="/home"><h1 class="logo">Tarafiki.</h1></a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#mobileNav">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="mobileNav">
                <ul class="navbar-nav ml-auto">
                    <li class="nav-item">
                        <a class="nav-link" href="/">Home</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="/Solutions">Packages</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="/Contact">Contact Us</a>
                    </li>
                </ul>
            </div>
        </div>
      </nav>
    </div>
  )
}

export default Mobile_Navigation
