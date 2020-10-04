import React from 'react'
import s from './Header.module.css'
import {Layout, Menu} from "antd";

const { Header } = Layout;


const Headeri = ()=>{
    return(
    <Header className="header">
        <div className='logo'>

        </div>
        <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
            <Menu.Item key="1">nav 1</Menu.Item>
            <Menu.Item key="2">nav 2</Menu.Item>
            <Menu.Item key="3">nav 3</Menu.Item>
        </Menu>
    </Header>)
}


// const Header =()=> {
//     return(
// <header className={s.header}>
//     <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Apple_logo_black.svg/863px-Apple_logo_black.svg.png' />
// </header>
// )
// }


export default Headeri;





