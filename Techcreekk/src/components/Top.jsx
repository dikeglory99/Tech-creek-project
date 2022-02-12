import notification from "../components/assests/ic_notification.svg"

const Top = () => {
    return ( 
        <div className="top__container">
            <div className="top__box">
                <p>Ongoing Applications</p>
            </div>
            <a className="notification_box" href="#"><img src={notification} alt=""/></a>
        </div>
     );
}
 
export default Top;