import './NotificationItem.css';
function NotificationItem(props){

    return(
        <div className={`main ${props.isNew ? 'new' : ''}`}>
      <img src={props.image} alt={props.name} className="avatar" />
      <div className="notification-content">
        <div className="notification-text">
          <div className="name-action">
           <strong>{props.name}</strong> {props.action} 
           {props.post && <strong>{props.post}</strong>}
          </div>
          <div className="time">{props.time}</div>
        </div>
        <div className="message">{props.message}</div>
        
      </div>
    </div>

    )
}




export default NotificationItem;