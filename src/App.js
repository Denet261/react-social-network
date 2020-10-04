import React from 'react';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';
import './index.css';
import { Layout, Menu, Breadcrumb } from 'antd';
import { UserOutlined, LaptopOutlined, NotificationOutlined } from '@ant-design/icons';
import s from './App.css';
import Menui from "./components/navbar/nav";
import Headeri from "./components/header/Header";
import Profile from "./components/profile/Profile";
import {Route} from "react-router-dom";
import Dialogs from "./components/Dialogs/Dialogs";



const { Header, Content, Footer, Sider } = Layout;



// import Nav from "./components/navbar/nav";
//
// import Dialogs from "./components/Dialogs/Dialogs";



const App = ({state, addPost}) => {

    return (

        <Layout>
           <Headeri/>
            <Content style={{ padding: '0 35px'}}>
                {/*<Breadcrumb style={{ margin: '16px 0' }}>*/}
                {/*    <Breadcrumb.Item>Home</Breadcrumb.Item>*/}
                {/*    <Breadcrumb.Item>List</Breadcrumb.Item>*/}
                {/*    <Breadcrumb.Item>App</Breadcrumb.Item>*/}
                {/*</Breadcrumb>*/}

                <Layout className="site-layout-background" style={{ padding: '24px 0' }}>
                    <Sider className="site-layout-background" width={200}>
                        <Menui />
                    </Sider>
                    <Content style={{ padding: '0 24px', minHeight: 280 }}><Route path='/profile' render={() =>
                        <Profile state={state.postPage} addPost={addPost}/>}/>

                        <Route path='/dialogs'
                               render={() =>
                                   <Dialogs state={state.dialogsPage}
                                   />}/>


                    </Content>
                </Layout>
            </Content>
            <Footer style={{ textAlign: 'center' }}>2020</Footer>
        </Layout>


    );
}




// app stoc const App = ({state, addPost}) => {
//
//     return (
//
//         <div className='app-wrapper'>
//             <Header/>
//             <Nav/>
//             <div className='app-content'>
//                 <Route path='/profile' render={() =>
//                     <Profile state={state.postPage} addPost={addPost}/>}/>
//
//                 <Route path='/dialogs'
//                        render={() =>
//                            <Dialogs state={state.dialogsPage}
//                            />}/>
//
//             </div>
//         </div>
//
//
//     );
// }
//
export default App;
