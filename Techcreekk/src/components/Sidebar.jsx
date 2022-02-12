import Location from "./assests/ic_location.svg"
const Sidebar = () => {
    return ( 
    <div className="location__container">
        <div className="location__box">
        <img src={Location} alt="" />
        <p>Rivers State ICT Center Opp. Pleasure Park Aba Road, Port Harcourt. Rivers State, Niger.talk@techcreek.ng</p>
        </div>
        <span>O9030003185, 09030003180</span>
    </div>
     );
}
 
export default Sidebar;