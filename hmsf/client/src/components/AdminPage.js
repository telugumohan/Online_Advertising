import React from 'react';
import { Sidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
import './style.css';
import { Link, Outlet } from 'react-router-dom';
import Profile from './Profile';
import Entry from './Entry';
import View from './View';
import AddType from './AddType';
import ViewAdTypes from './ViewAdTypes';
import AdminApprovalP from './AdminApprovalP';
import AdminCurrentC from './AdminCurrentC';
import AdminAllC from './AdminAllC';

export default function AdminPage() {
  return (
    <span>
    <div style={{width:'100%', display: 'flex'}}>
        {/* <nav > */}
            <Sidebar style={{position: 'fixed'}}>
                <Menu>
                <SubMenu label="Clients" style={{ color: 'black' }}>
                    <Link to="/admin/profile" element={<Profile/>}><MenuItem style={{ color: 'black' }}> View Client </MenuItem></Link>
                </SubMenu>
                <SubMenu label="Ad Campaign Management" style={{ color: 'black' }}>
                    <Link to="/admin/addtype" element={<AddType/>}><MenuItem style={{ color: 'black' }}> Add new Ad type </MenuItem></Link>
                    <Link to="/admin/adtypes" element={<ViewAdTypes/>}><MenuItem style={{ color: 'black' }}> View Ad types </MenuItem></Link>
                    <Link to="/admin/approval" element={<AdminApprovalP/>}><MenuItem style={{ color: 'black' }}> Pending Approvals </MenuItem></Link>
                    <Link to="/admin/current" element={<AdminCurrentC/>}><MenuItem style={{ color: 'black' }}> Current Campaigns </MenuItem></Link>
                    <Link to="/admin/adminAll" element={<AdminAllC/>}><MenuItem style={{ color: 'black' }}> All Campaigns </MenuItem></Link>

                </SubMenu>
                </Menu>
            </Sidebar>
        {/* </nav> */}
        <div style={{marginLeft: '250px'}}>
            <Outlet/>
        </div>
    </div>
    </span>
  );
}
