import { useState } from "react";
import Header from "./Header";
import NavigationPanel from "./NavigationPanel";
import WorkSpace from "./WorkSpace";
import Footer from "./Footer";
import { WorkSpaceType } from "../Enums/WorkSpaceType";
import React from "react";

const Home = () => {
    const [worskSpaceType,setWorskSpaceType] =  useState(WorkSpaceType.None);
    const logoutPage = () => {
        //logoutSrcipt and router
    }
    return (<div>
        <Header logoutPage={logoutPage} IsLogedIn />
        <div>
            <NavigationPanel setWorskSpaceType={setWorskSpaceType}/>
            <WorkSpace worskSpaceType={worskSpaceType}/>
        </div>
        <Footer />
    </div>)
}
export default Home;