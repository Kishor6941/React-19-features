import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'
import "./ParentHook.css"

const ParentHook = () => {
  return (
    <div>
        <nav>
            <ul>
                <li> <NavLink to="/hooks/useState">useState </NavLink></li>
                <li> <NavLink to="/hooks/useEffect">useEffect </NavLink></li>
                <li> <NavLink to="/hooks/useReducer">useReducer </NavLink></li>
                <li> <NavLink to="/hooks/useMemo">useMemo </NavLink></li>
                <li> <NavLink to="/hooks/useCallback">useCallback </NavLink></li>
                <li> <NavLink to="/hooks/useRef">useRef </NavLink></li>
                <li> <NavLink  to="/hooks/useTransition">useTransition </NavLink></li>
                <li> <NavLink to="/hooks/useDefferedValue">useDefferedValue </NavLink></li>
                <li> <NavLink to="/hooks/useParams">useParams </NavLink></li>
                <li> <NavLink to="/hooks/useLocation">useLocation</NavLink></li>
                <li> <NavLink to="/hooks/use">use</NavLink></li>
                <li> <NavLink to="/hooks/CustomHook">Custom Hook </NavLink></li>
            </ul>
        </nav>
        <Outlet />
    </div>
  )
}

export default ParentHook