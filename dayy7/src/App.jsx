import { useState } from 'react';
import './App.css'
import NotificationItem from './assets/components/NotificationItem/NotificationItem';
import Avatar1 from './assets/images/Avatar1.webp';
import Avatar2 from './assets/images/Avatar2.webp';
import Avatar3 from'./assets/images/Avatar3.webp';
import Avatar4 from './assets/images/Avatar4.webp';
import Avatar5 from './assets/images/Avatar5.webp';
import Avatar6 from './assets/images/Avatar6.webp';
import Avatar7 from './assets/images/Avatar7.webp';
function App() {
  const [ArrayOfObjects,setArrayOfObjects]  = useState([
      {
          id: 1,
          name: "Mark Webber",
          action: "reacted to your recent post",
          post: "My first tournament today!",
          time: "1m ago",
          image:Avatar1,
          isNew: true,

      },
      {
          id: 2,
          name: "Angela Gray",
          action: "followed you",
          post: "",
          time: "5m ago",
          image:Avatar2,
          isNew: true,
      },
      {
          id: 3,
          name: "Jacob Thompson",
          action: "has joined your group",
          post: "Cheese club",
          time: "1 day ago",
          image:Avatar3,
          isNew: true,
      },
      {
          id: 4,
          name: "Rizky Hasanuddin",
          action: "sent you private message",
          post:"",
          message: "Hello, thanks for setting up the Chess Club, i have been a member for a few weeks now and im already have fun and improving my game",
          time: "5 days ago",
          image:Avatar4,
          isNew: false,
      },
      {
          id: 5,
          name: "Kimberly Smith",
          action: "commented on your picture",
          post: "",
          time: "1 week ago",
          image:Avatar5,
          isNew: false,
      },
      {
          id: 6,
          name: "Nathan Peterson",
          action: "reacted to your recent post",
          post: "5end-game strategies to increase your win rate",
          time: "2 weeks ago",
          image:Avatar6,
          isNew: false,
      },
      {
          id: 7,
          name: "Anna Kim",
          action: "left the group",
          post: "Chess Club",
          time: "2 weeks ago",
          image:Avatar7,
          isNew: false,
      }
  ]);
  const markAllAsRead = () => {
    setArrayOfObjects(prevState =>
      prevState.map(notification => ({
        ...notification,
        isNew: false,
      }))
    );
  };
  const unreadCount = ArrayOfObjects.filter(notifi => notifi.isNew).length;

  return (
    <div className='notifications'>
        <div className="header">
        <h2 className='head'>Notifications{unreadCount > 0 && 
            <span className="notification-pill">{unreadCount}</span>}</h2>

        <button onClick={markAllAsRead} className="mark-read-button">
          Mark All as Read
        </button>
      </div>
          <div className="notifi">
              {ArrayOfObjects.map((notifi) => (
                  <NotificationItem 
                  key={notifi.id}
                   name={notifi.name} 
                   action={notifi.action}
                   time={notifi.time}
                   image={notifi.image}
                   post={notifi.post}
                   isNew={notifi.isNew}
                   message={notifi.message}
                   />
              ))}
          </div>
          </div>
  );
}

  
export default App;
