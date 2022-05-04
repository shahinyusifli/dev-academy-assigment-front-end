import { Link, Outlet } from 'react-router-dom';

const GetPizza = ({pizzas}) => {
    return (
      <div>
      {pizzas.map((item) => (
      <div key={item.messageId}>
      <Link to={`/message/${item.messageId}`}>
        <h5>{item.topicName}</h5>
        </Link>
        <p>{item.messageContent}</p>
        <p>{item.date}</p>
      </div>
      ))}
      <Outlet />
    </div>
  );
}
    


export default GetPizza;