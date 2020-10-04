import React from 'react';
import s from './nav.module.css'
import {NavLink} from "react-router-dom";
import {UserOutlined} from "@ant-design/icons";
import { Layout, Menu, Breadcrumb } from 'antd';
const { SubMenu } = Menu;

// const Nav = () =>{
//     return(
//         <nav className={s.nav}>
//             <div className={`${s.item} ${s.active}`}>
//                 <NavLink to='/profile' activeClassName={s.active}>Profile</NavLink>
//             </div>
//             <div className={s.item}>
//                 <NavLink to='/dialogs' activeClassName={s.active}>Messages</NavLink>
//             </div>
//             <div className={s.item}>
//                 <NavLink to='/News' activeClassName={s.active}>News</NavLink>
//             </div>
//             <div className={s.item}>
//                 <NavLink to='/Music' activeClassName={s.active}>Music</NavLink>
//             </div>
//             <div className={s.item}>
//                 <NavLink to='/Settings' activeClassName={s.active}>Settings</NavLink>
//             </div>
//         </nav>
//     )
// }

const Menui = () => {
    const { SubMenu } = Menu;
    return(
        <Menu
            mode="inline"
            defaultSelectedKeys={['1']}
            defaultOpenKeys={['sub1']}
            style={{ height: '100%' }}
        >
            <SubMenu key="sub1" icon={<UserOutlined />} title="Меню">
                <Menu.Item key="1"><NavLink to='/profile'>Profile</NavLink></Menu.Item>
                <Menu.Item key="2"><NavLink to='/dialogs' activeClassName={s.active}>Messages</NavLink></Menu.Item>
            </SubMenu>
        </Menu>
    )
}

export default Menui;