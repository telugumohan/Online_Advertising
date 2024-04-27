import React from 'react';
import { Sidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
import './style.css';
import { Link, Outlet } from 'react-router-dom';
import Deluxe from './rooms/Deluxe';
import NonDeluxe from './rooms/NonDeluxe';
import FarmHouse from './rooms/FarmHouse';
import Resorts from './rooms/Resorts';
import ClientPending from './ClientPending';
import ClientCurrent from './ClientCurrent';
import ClientPast from './ClientPast';

export default function Client() {
  return (
    <span>
    <div style={{width:'100%', display: 'flex'}}>
        {/* <nav > */}
            <Sidebar style={{position: 'fixed'}}>
                <Menu>
                <SubMenu label="All Ad Campaigns" style={{ color: 'black' }}>
                    <Link to="/client/adTypes" element={<Deluxe/>}><MenuItem style={{ color: 'black' }}>Explore Ad Campaigns</MenuItem></Link>
                    {/* <Link to="/client/nondeluxe" element={<NonDeluxe/>}><MenuItem style={{ color: 'black' }}> Non Deluxe Rooms </MenuItem></Link> */}
                </SubMenu>
                <SubMenu label="My Campaigns" style={{ color: 'black' }}>
                    <Link to="/client/clientCurrent" element={<ClientCurrent/>}><MenuItem style={{ color: 'black' }}> My Current Campaigns</MenuItem></Link>
                    <Link to="/client/approvalPending" element={<ClientPending/>}><MenuItem style={{ color: 'black' }}>Approval/Pending</MenuItem></Link>
                    <Link to="/client/clientPast" element={<ClientPast/>}><MenuItem style={{ color: 'black' }}>Past Campaigns</MenuItem></Link>
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
