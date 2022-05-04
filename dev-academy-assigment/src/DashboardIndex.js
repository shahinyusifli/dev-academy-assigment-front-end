import { Link, Outlet } from 'react-router-dom';

const DashboardIndex = ({messages}) => {
    return (
      <div>
      {messages.map((item) => (
      <div key={item.messageid}>
      <Link to={`/message/${item.messageid}`}>
        <h5>{item.topicname}</h5>
        </Link>
        <p>{item.MessageContent}</p>
        <p>{item.Date}</p>
      </div>
      ))}
      <Outlet />
    </div>
  );
}
    


export default DashboardIndex;