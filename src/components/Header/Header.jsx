import "./Header";
import headerImg from "./../../assets/react-core-concepts.png";
const roleDescription =["Fundamental", "Crucial", "Core"];
function getRandomInt(max){
  return Math.floor(Math.random()* (max+1))
}

export default function Header() {
  return (
    <header style={{textAlign:"center"}}>
      <img src={headerImg} alt="Stylized atom" />
      <h1>React Essentials</h1>
      <p>
        {roleDescription[getRandomInt(2)]} React concepts you will need for almost any app you are
        going to build!
      </p>
    </header>
  );
}