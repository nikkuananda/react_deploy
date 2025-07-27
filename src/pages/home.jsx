import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div style={{ padding: 20 }}>
      <h1>Home Page</h1>
      <p>Welcome to the home page!</p>
      <Link to="/about">Go to About</Link>
    </div>
  );
}
