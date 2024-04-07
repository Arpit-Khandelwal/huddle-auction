import { WorkSpaceType } from "../Enums/WorkSpaceType";
import React from "react";

const WorkSpace = ({worskSpaceType}) => {
    const setWorkSpace = () =>{
        switch(worskSpaceType){
            case WorkSpaceType.Profile:
                return < Profile />
            case WorkSpaceType.Auction:
                return < Auction />
            case WorkSpaceType.SetTransaction:
                return < SetTransaction />
            case WorkSpaceType.StartAuction:
                return < StartAuction />
            case WorkSpaceType.ViewTransaction:
                return < ViewTransaction />
            default:
                return < Profile />
        }
    }
    return (<div>
        {setWorkSpace()}
    </div>)
}
export default WorkSpace;