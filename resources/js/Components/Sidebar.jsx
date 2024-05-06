import { Link, usePage } from '@inertiajs/react'
import React from 'react'

export default function Sidebar() {
  const{user} = usePage().props
  return (
    <div>
      <div className="main-sidebar sidebar-style-2">

      <aside id="sidebar-wrapper">
        <div className="sidebar-brand">
          <Link href={route('admin')}> <img alt="image" src="assets/img/logo.png" className="header-logo" /> <span className="logo-name">Otika</span>
          </Link>
        </div>
        <ul className="sidebar-menu">
          <li className="menu-header">Main</li>
          <li className="dropdown active">
            <Link href={route('admin')} className="nav-link"><i data-feather="monitor" /><span>Dashboard</span></Link>
          </li>
          <li><Link href={route('users')}><i data-feather="users" /><span>User</span></Link></li>
          <li className="dropdown">
            <Link href="#" className="menu-toggle nav-link has-dropdown"><i data-feather="briefcase" /><span>Sales</span></Link>
            <ul className="dropdown-menu">
              <li><Link className="nav-link" href="widget-chart.html">Add Sale</Link></li>
              <li><Link className="nav-link" href="widget-data.html">Total Sales</Link></li>
            </ul>
          </li>

          <li className="menu-header">Pages</li>
          <li className="dropdown">
            <Link className="menu-toggle nav-link has-dropdown"><i data-feather="user-check" /><span>Auth</span></Link>
            <ul className="dropdown-menu">
              <li><Link href={route('profile.edit')}>Change Password</Link></li>
              <li><Link href="auth-register.html">Register</Link></li>
              <li><Link href="auth-forgot-password.html">Forgot Password</Link></li>
              <li><Link href="auth-reset-password.html">Reset Password</Link></li>
            </ul>
          </li>
        </ul>
      </aside>

      
      </div>
    </div>
  )
}
