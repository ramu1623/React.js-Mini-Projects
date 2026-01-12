function Card({ children }) {
  return (
    <div
      style={{
        border: "2px solid #ccc",
        padding: "20px",
        borderRadius: "10px",
        width: "300px",
        margin: "20px auto",
      }}
    >
      {children}
    </div>
  );
}

function App() {
  return (
    <div>
      <h2 style={{ textAlign: "center" }}>Containment Example</h2>

      <Card>
        <h3>User Profile</h3>
        <p>Name: Ramu</p>
        <p>Role: Frontend Developer</p>
      </Card>

      <Card>
        <h3>Notification</h3>
        <p>You have 3 new messages.</p>
        <button>View</button>
      </Card>
    </div>
  );
}

export default App;
