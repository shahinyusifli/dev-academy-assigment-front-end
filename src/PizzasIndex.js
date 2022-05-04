import GetPizza from "./Get.js";
import useFetch from "./useFetch.js";


const Home = () => {
    const { error, isPending, data } = useFetch('/messages')

  return (
    <div className="home">
      { error && <div>{ error }</div> }
      { isPending && <div>Loading...</div> }
      { data && <GetPizza pizzas={data} /> } 
    </div>
  );
}

export default Home;