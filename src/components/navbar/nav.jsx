import React from 'react';
import s from './nav.module.css'
import {NavLink} from "react-router-dom";
import {UserOutlined, WechatOutlined } from "@ant-design/icons";
import { Layout, Menu, Breadcrumb } from 'antd';
const { SubMenu } = Menu;


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
                <Menu.Item key="1" icon={<WechatOutlined />}><NavLink to='/profile'>Profile</NavLink></Menu.Item>
                <Menu.Item key="2"><NavLink to='/dialogs' activeClassName={s.active}>Messages</NavLink></Menu.Item>
            </SubMenu>
        </Menu>
    )
}

export default Menui;