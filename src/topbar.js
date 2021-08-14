import React from 'react';
export default function Topbar ()
{
    return(
        <nav class="navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow">

                   
                    <button id="sidebarToggleTop" class="btn btn-link d-md-none rounded-circle mr-3">
                        <i class="fa fa-bars"></i>
                    </button>                   
                    <form
                        class="d-none d-sm-inline-block form-inline mr-auto ml-md-3 my-2 my-md-0 mw-100 navbar-search">
                        <div class="input-group">
                            <input type="text" class="form-control bg-light border-0 small" placeholder="Search for..."
                                aria-label="Search" aria-describedby="basic-addon2" style={{pointerEvents: 'none'}}/>
                            <div class="input-group-append">
                                <button class="btn btn-primary" type="button" style={{pointerEvents: 'none'}}>
                                    <i class="fas fa-search fa-sm"></i>
                                </button>
                            </div>
                        </div>
                    </form>                   
                    <ul class="navbar-nav ml-auto">                                             
                        <li class="nav-item dropdown no-arrow mx-1" style={{pointerEvents: 'none'}}>
                            <a class="nav-link dropdown-toggle" href="#" id="alertsDropdown" role="button"
                                data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                <i class="fas fa-bell fa-fw"></i>                               
                                <span class="badge badge-danger badge-counter">3+</span>
                            </a>                           
                        </li>
                        <li class="nav-item dropdown no-arrow mx-1" style={{pointerEvents: 'none'}}>
                            <a class="nav-link dropdown-toggle" href="#" id="messagesDropdown" role="button"
                                data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                <i class="fas fa-envelope fa-fw"></i>
                               
                                <span class="badge badge-danger badge-counter">7</span>
                            </a>
                        </li>
                    </ul>
                </nav>
    )
}