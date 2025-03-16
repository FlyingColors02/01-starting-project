import React from "react";
import CORE_CONCEPT from "./data";
import CoreConcept from "./components/CoreConcepts";
import Header from "./components/Header/Header";
import TabSwitch from "./components/tabSwitch";



 
const roleDescription =["Fundamental", "Crucial", "Core"];
function getRandomInt(max){
  return Math.floor(Math.random()* (max+1))
}

function Header() {
  return (
    <header>
      <img src="src/assets/react-core-concepts.png" alt="Stylized atom" />
      <h1>React Essentials</h1>
      <p>
        {roleDescription[2]} React concepts you will need for almost any app you are
        going to build!
      </p>
    </header>
  );
}

function App() {
	
  return (
    <div>
			<Header/>
      <main>
				<section id="core-concepts">
					<h2>Core Concept</h2>
					<ul>
						{
							CORE_CONCEPT.map((data)=>
								<CoreConcept title={data.title} description={data.description} imageSrc={data.imageSrc}/>
							)
						}
					</ul> 
				</section>
				<section id="examples">
						<h2>Examples</h2>
						<menu>
							<TabSwitch>Components</TabSwitch>
							<TabSwitch>Props</TabSwitch>
							<TabSwitch>JSX</TabSwitch>
							<TabSwitch>State</TabSwitch>
						</menu>
				</section>
        <h2>Time to get started!</h2>
      </main>
    </div>
  );
}

export default App;
