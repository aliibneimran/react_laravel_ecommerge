import Header from '@/Components/Header'
import Sidebar from '@/Components/Sidebar'
import { useEffect } from 'react';
// import feather from 'feather-icons';

export default function Layout({children}) {
  useEffect(() => {
    feather.replace();
}, []);
  return (
<div id="app">
  <div className="main-wrapper main-wrapper-1">
    <div className="navbar-bg" />
    <Header></Header>
    <Sidebar></Sidebar>
    {/* Main Content */}
    <div className="main-content">
    {children}
    </div>
    <footer className="main-footer">
      <div className="footer-left">
        <a href="templateshub.net">Templateshub</a>
      </div>
      <div className="footer-right">
      </div>
    </footer>
  </div>
</div>

  )
}
