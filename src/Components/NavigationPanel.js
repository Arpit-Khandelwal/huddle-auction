import { useState } from "react";
import { WorkSpaceType } from "../Enums/WorkSpaceType";
const NavigationPanel = ({setWorskSpaceType}) => {
    const [selectedPanel,setselectedPanel] = useState(WorkSpaceType.Profile);
    return (<div>
        <button onClick={() => {setWorskSpaceType(WorkSpaceType.Profile);setselectedPanel(WorkSpaceType.Profile)}} disabled={selectedPanel === WorkSpaceType.Profile}>Profile</button>
        <button onClick={() => {setWorskSpaceType(WorkSpaceType.StartAuction);setselectedPanel(WorkSpaceType.StartAuction)}} disabled={selectedPanel === WorkSpaceType.StartAuction}>Start an Auction</button>
        <button onClick={() => {setWorskSpaceType(WorkSpaceType.Auction);setselectedPanel(WorkSpaceType.Auction)}} disabled={selectedPanel === WorkSpaceType.Auction}>Enter an Auction</button>
        <button onClick={() => {setWorskSpaceType(WorkSpaceType.SetTransaction);setselectedPanel(WorkSpaceType.SetTransaction)}} disabled={selectedPanel === WorkSpaceType.SetTransaction}>Create a Transaction</button>
        <button onClick={() => {setWorskSpaceType(WorkSpaceType.ViewTransaction);setselectedPanel(WorkSpaceType.ViewTransaction)}} disabled={selectedPanel === WorkSpaceType.ViewTransaction}>See Your Transactions</button>
    </div>)
}
export default NavigationPanel;