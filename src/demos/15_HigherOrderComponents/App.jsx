import React from "react";

// 1️⃣ Higher-Order Component with props
const withAuth = (WrappedComponent) => { // ignore eslint error
  return function AuthComponent(props) {
    const { isLoggedIn } = props; // getting prop from App

    if (!isLoggedIn) {
      return <h2>Please login to continue</h2>;
    }

    // Pass all props to wrapped component
    return <WrappedComponent {...props} />;
  };
};

// 2️⃣ Normal Components
const Dashboard = ({ username }) => {
  return <h2>Welcome {username} to Dashboard</h2>;
};

const Profile = ({ username, age }) => {
  return (
    <h2>
      {username}'s Profile, Age: {age}
    </h2>
  );
};

// 3️⃣ Enhanced Components using HOC
const ProtectedDashboard = withAuth(Dashboard);
const ProtectedProfile = withAuth(Profile);

// 4️⃣ App Component
export default function App() {
  return (
    <div>
      <h1>HOC Example with Props</h1>

      {/* Pass props from App */}
      <ProtectedDashboard isLoggedIn={true} username="Ramu" />
      <ProtectedProfile isLoggedIn={true} username="Ramu" age={25} />

      {/* Example with not logged in */}
      <ProtectedDashboard isLoggedIn={false} username="Guest" />
    </div>
  );
}
