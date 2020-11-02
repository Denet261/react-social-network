import React from 'react';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';
import './index.css';
import { Layout, Menu, Breadcrumb } from 'antd';
import s from './App.css';
import Menui from "./components/navbar/nav";
import Headeri from "./components/header/Header";
import Profile from "./components/profile/Profile";
import {Route} from "react-router-dom";
import Dialogs from "./components/Dialogs/Dialogs";




const { Header, Content, Footer, Sider } = Layout;



const App = ({state, dispatch,store, updateNewPostText}) => {

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
                        <Profile profilePage={state.profilePage}
                                 dispatch={dispatch}/>}/>



                        <Route path='/dialogs'
                               render={() =>
                                   <Dialogs  store={store}
                                   />}/>


                    </Content>
                </Layout>
            </Content>
            <Footer style={{ textAlign: 'center' }}>2020</Footer>
        </Layout>


    );
}

export default App;