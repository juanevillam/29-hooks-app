import React from 'react';
import { Link, NavLink } from 'react-router-dom';

import './index.css';

export const NavBar = () => {

    return ( 
    <nav className="navbar navbar-expand-lg navbar-info bg-info">
        <div className="container-fluid">
          <img src="favicon.ico" className="d-inline-block align-top" width="30" height="24"></img>
          <a className="navbar-brand ml-1">Hooks App</a>
        <div className="collapse navbar-collapse">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" role="button" data-bs-toggle="dropdown" aria-expanded="false">Examples</a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li className="nav-item"><NavLink exact activeClassName="active" to="/multiple-custom-hooks" className="dropdown-item nav-link">MultipleCustomHooks</NavLink></li>
                </ul>
            </li>
            <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" role="button" data-bs-toggle="dropdown" aria-expanded="false">Memos</a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li className="nav-item"><NavLink exact activeClassName="active" to="/father" className="dropdown-item nav-link">Father</NavLink></li>
                  <li className="nav-item"><NavLink exact activeClassName="active" to="/memorize" className="dropdown-item nav-link">Memorize</NavLink></li>
                  <li className="nav-item"><NavLink exact activeClassName="active" to="/memo-hook" className="dropdown-item nav-link">MemoHook</NavLink></li>
                  <li className="nav-item"><NavLink exact activeClassName="active" to="/callback-hook" className="dropdown-item nav-link">CallbackHook</NavLink></li>
                </ul>
             </li>
            <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" role="button" data-bs-toggle="dropdown" aria-expanded="false">useEffect</a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li className="nav-item"><NavLink exact activeClassName="active" to="/message" className="dropdown-item nav-link">Message</NavLink></li>
                  <li className="nav-item"><NavLink exact activeClassName="active" to="/simple-form" className="dropdown-item nav-link">SimpleForm</NavLink></li>
                  <li className="nav-item"><NavLink exact activeClassName="active" to="/form-with-custom-hook" className="dropdown-item nav-link">FormWithCustomHook</NavLink></li>
                </ul>
             </li>
             <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" role="button" data-bs-toggle="dropdown" aria-expanded="false">useLayoutEffect</a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li className="nav-item"><NavLink exact activeClassName="active" to="/layout" className="dropdown-item nav-link">Layout</NavLink></li>
                </ul>
             </li>
             <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" role="button" data-bs-toggle="dropdown" aria-expanded="false">useReducer</a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li className="nav-item"><NavLink exact activeClassName="active" to="/to-do-app" className="dropdown-item nav-link">To-do App</NavLink></li>
                </ul>
             </li>
             <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" role="button" data-bs-toggle="dropdown" aria-expanded="false">useRef</a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li className="nav-item"><NavLink exact activeClassName="active" to="/focus-screen" className="dropdown-item nav-link">FocusScreen</NavLink></li>
                  <li className="nav-item"><NavLink exact activeClassName="active" to="/ref-example" className="dropdown-item nav-link">RefExample</NavLink></li>
                </ul>
             </li>
             <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" role="button" data-bs-toggle="dropdown" aria-expanded="false">useState</a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li className="nav-item"><NavLink exact activeClassName="active" to="/counter-app" className="dropdown-item nav-link">CounterApp</NavLink></li>
                </ul>
             </li>
          </ul>
        </div>
        </div>
    </nav>
    );

};

     