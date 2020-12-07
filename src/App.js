import './App.css';
import { Button, ContentWrapper, Navbar, NavbarBrand, NavbarContent, PageWrapper, Sidebar, SidebarBrand, SidebarDivider, SidebarItem, SidebarMenu, SidebarTitle } from 'reacthalfmoon';
import { useState } from 'react';
import {BrowserRouter as Router, Link} from 'react-router-dom';
import TaskManger from './components/TaskManager/TaskManager';
function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <PageWrapper withNavbar withSidebar sidebarType="overlayed-sm-and-down" isSidebarOpen={isSidebarOpen} toggle={() => {setIsSidebarOpen(!isSidebarOpen)}} withTransitions>
      <Router basename="/bettertodos">
      <div className="sidebar-overlay" onClick={()=>{setIsSidebarOpen(!isSidebarOpen)}}></div>
      <Navbar>
        <NavbarContent>
          <Button onClick={()=>{setIsSidebarOpen(!isSidebarOpen)}}>Menu</Button>
          <NavbarBrand>
            Better To-dos
          </NavbarBrand>
        </NavbarContent>
      </Navbar>
      <Sidebar>
        <SidebarMenu>
          <SidebarBrand>
          </SidebarBrand>
        </SidebarMenu>
        <SidebarTitle style={{fontWeight: 'bold', fontSize: '1.4em'}}>Tasks</SidebarTitle>
        <SidebarDivider />
        <SidebarItem><Link to="/" onClick={()=>{setIsSidebarOpen(false)}}>Due Tasks</Link></SidebarItem>
        <SidebarItem><Link to="/done" onClick={()=>{setIsSidebarOpen(false)}}>Completed Tasks</Link></SidebarItem>
      </Sidebar>
      <ContentWrapper>
        <TaskManger />
      </ContentWrapper>
      </Router>
    </PageWrapper>
  );
}

export default App;
