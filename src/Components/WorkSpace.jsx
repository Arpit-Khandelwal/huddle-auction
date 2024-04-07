import { WorkSpaceType } from "../Enums/WorkSpaceType";
import React from "react";
const WorkSpace = ({worskSpaceType}) => {
    const setWorkSpace = () =>{
        switch(worskSpaceType){
            case WorkSpaceType.Profile:
                < Profile />
            case WorkSpaceType.Auction:
                < Auction />
            case WorkSpaceType.SetTransaction:
                < SetTransaction />
            case WorkSpaceType.StartAuction:
                < StartAuction />
            case WorkSpaceType.ViewTransaction:
                < ViewTransaction />
            default:
                < Profile />
        }
    }
    return (<div>
        
    </div>)
}
export default WorkSpace;