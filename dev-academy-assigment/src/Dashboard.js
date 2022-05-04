import DashboardIndex from "./DashboardIndex.js";
import useFetch from "./useFetch.js";

const Dashboard = () => {
    const { data, isPending, err } = useFetch('/pizzas')

  return (
    <div className="home">
        { err && <div>There is some error ....</div>}
    { isPending && <div>is loeading ....</div>}
      { data && <DashboardIndex messages={data} /> } 
    </div>
  );
}

export default Dashboard;