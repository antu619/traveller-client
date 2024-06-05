import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import { FaUser } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, PieChart, Pie, Legend } from 'recharts';
const colors = ['#0088FE', '#00C49F', '#FFBB28'];

const Dashboard = () => {
  const { user } = useContext(AuthContext);

  const [dbUser, setDbUserInfo] = useState();
  const [posts, setPosts] = useState([]);
  const [allUsers, setAllUsers] = useState([]);
  const [subscribers, setSubscribers] = useState([]);

  // all posts
  useEffect(() => {
    fetch("https://traveller-server-ten.vercel.app/posts")
      .then((res) => res.json())
      .then((data) => setPosts(data));
  }, []);

  // all users
  useEffect(() => {
    fetch("https://traveller-server-ten.vercel.app/users")
      .then((res) => res.json())
      .then((data) => setAllUsers(data));
  }, []);

  // all subscribers
  useEffect(() => {
    fetch("https://traveller-server-ten.vercel.app/subscribers")
      .then((res) => res.json())
      .then((data) => setSubscribers(data));
  }, []);

  console.log(subscribers)

  const chartData = [
     {
      name: "users",
      volume: allUsers.length
     },
     {
      name: "posts",
      volume: posts.length
     },
     {
      name: "subscribers",
      volume: subscribers.length
     }
  ];

  console.log(allUsers)
 
  
  // My Posts
  const usersPosts = posts.filter((post) => post.email === user.email);
  console.log(usersPosts);

  useEffect(() => {
    fetch(`https://traveller-server-ten.vercel.app/users/${user?.email}`, {
      headers: {
        authorization: `Bearer ${localStorage.getItem('token')}`
      }
    })
      .then((res) => res.json())
      .then((data) => setDbUserInfo(data));
  }, [user?.email]);

  // custon function for bar chart
  const getPath = (x, y, width, height) => {
    return `M${x},${y + height}C${x + width / 3},${y + height} ${x + width / 2},${y + height / 3}
    ${x + width / 2}, ${y}
    C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${x + width}, ${y + height}
    Z`;
  };
  
  const TriangleBar = (props) => {
    const { fill, x, y, width, height } = props;
  
    return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
  };

  // Custom function for pie chart
  const RADIAN = Math.PI / 180;
const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent }) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  );
};
  return (
    <div className="p-5 md:p-10 lg:p-20">
      <Helmet>
        <title>Dashboard - traveLLer</title>
      </Helmet>
      <h2 className="text-3xl text-center font-semibold text-secondary mb-10">
        Overview
      </h2>
      <div className="flex flex-col lg:flex-row justify-center items-center lg:items-start gap-10">
        {/* User Ingo */}
        <div className="flex justify-center mt-10">
          <div>
            <h3 className="text-secondary text-center text-xl mb-10 font-semibold">
              User Info
            </h3>
            <div className="card w-96 bg-base-100 shadow-xl">
              {user?.photoURL || dbUser?.photoURL ? (
                <div className="avatar flex justify-center">
                  <div className="w-48 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                    <img src={user?.photoURL || dbUser?.photoURL} />
                  </div>
                </div>
              ) : (
                <div className="avatar flex justify-center">
                  <div className="w-48 h-48 rounded-full ring ring-primary bg-base-200 ring-offset-base-100 ring-offset-2">
                    <FaUser className="text-[192px]" />
                  </div>
                </div>
              )}
              <div className="card-body text-center">
                <h2 className="text-xl">
                  <span className="font-semibold">Name:</span>{" "}
                  {dbUser?.name ? dbUser.name : "Not Found"}
                </h2>
                <p>
                  <span className="font-semibold">Email:</span>{" "}
                  {dbUser?.email ? dbUser.email : "Not Found"}
                </p>
                <p>
                  <span className="font-semibold">Phone:</span>{" "}
                  {dbUser?.phone ? dbUser.phone : "Not Found"}
                </p>
                <p>
                  <span className="font-semibold">Address:</span>{" "}
                  {dbUser?.address ? dbUser.address : "Not Found"}
                </p>
                <Link
                  to={`/dashboard/profile/update/${dbUser?._id}`}
                  className="btn btn-primary text-white mt-3"
                >
                  Update Profile
                </Link>
              </div>
            </div>
          </div>
        </div>
        {/* User Activites */}
        <div className="mt-10">
          <h3 className="text-secondary text-center text-xl font-semibold mb-10">
            My Posts
          </h3>
          <div className="card w-72 h-52 bg-neutral text-neutral-content">
            <div className="card-body justify-center text-center">
              <h2 className="text-2xl font-semibold">{usersPosts?.length}</h2>
              <h2 className="text-2xl font-semibold">Posts</h2>
            </div>
          </div>
        </div>
      </div>
      {/* Chart Container for only Admin */}
      <h3 className="text-secondary text-center text-xl font-semibold mt-20">
            Users Activites
          </h3>
      <div className="flex flex-col lg:flex-row items-center">
          {/* Bar chart */}
      <div>
      <BarChart
      width={500}
      height={300}
      data={chartData}
      margin={{
        top: 20,
        right: 30,
        left: 20,
        bottom: 5,
      }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <YAxis />
      <Bar dataKey="volume" fill="#8884d8" shape={<TriangleBar />} label={{ position: 'top' }}>
        {chartData.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={colors[index % colors.length]} />
        ))}
      </Bar>
    </BarChart>
      </div>
      {/* pie chart */}
      <div>
      <PieChart width={400} height={400}>
          <Pie
            data={chartData}
            cx="50%"
            cy="50%"
            labelLine={false}
            label={renderCustomizedLabel}
            outerRadius={80}
            fill="#8884d8"
            dataKey="volume"
          >
            {chartData.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={colors[index % colors.length]} />
            ))}
          </Pie>
          <Legend />
        </PieChart>
      </div>
      </div>
    </div>
  );
};

export default Dashboard;
