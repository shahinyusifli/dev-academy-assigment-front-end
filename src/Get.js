import { Link, Outlet } from 'react-router-dom';

const GetPizza = ({pizzas}) => {
    return (
      <div>
      {pizzas.map((item) => (
      <div key={item.topicName}>
      <Link to={`/message/${item.topicName}`}>
        <h5>{item.topicName}</h5>
        </Link>
        <p>{item.totalMessages}</p>
        <p>{item.timeOfLastMessage}</p>
      </div>
      ))}
      <Outlet />
    </div>
  );
}
    



 
export default GetPizza;