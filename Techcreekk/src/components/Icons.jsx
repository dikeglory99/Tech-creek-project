import Iconslearn from "../components/assests/ic_learn.svg";
import Iconscreate from "../components/assests/ic_create.svg";
import Iconsconnect from "../components/assests/ic_connect.svg";


const Icons = () => {
    return ( 
        <div className="icons__container">
            <a href="#"><img src={Iconslearn} alt/>
            <p className="bold">Learn</p>
            </a>
            <a href="#"><img src={Iconscreate} alt/>
            <p className="bold">Create</p>
            </a>
            <a href="#"><img  className="connect_img" src={Iconsconnect} alt/>
            <p className="bold">Connect</p>
            </a>
        </div>
     );
}
 




export default Icons;




