import { useLocation } from "react-router";
import Header from "../../components/header/Header";
import Posts from "../../components/posts/Posts";
import "./homepage.css";

export default function Homepage() {
  return (
    <div className="home">
      <Header />
      <Posts />
    </div>
  );
}
