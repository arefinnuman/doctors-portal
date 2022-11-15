import React, { useContext } from "react";
import { AuthContext } from "../../Context/AuthProvider";

const Dashboard = () => {
  const { user } = useContext(AuthContext);
  console.log(user);
  return (
    <div>
      <h1 className="text-center min-h-screen ">Dashboard</h1>
    </div>
  );
};

export default Dashboard;
