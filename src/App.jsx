import React, { useState } from "react";
import {CORE_CONCEPT, EXAMPLES} from "./data";
import CoreConcept from "./components/CoreConcepts";
import Header from "./components/Header/Header";
import TabSwitch from "./components/tabSwitch";



function App() {
	const [selectedTopic, setSelectedTopic] = useState(null);
	
	const onSelect=(selectedButton)=>{
		setSelectedTopic(selectedButton);
		console.log("clicked "+ selectedButton);
		
	}

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
							<TabSwitch isSelected={selectedTopic == "components"} onSelect={()=>onSelect("components")}>Components</TabSwitch>
							<TabSwitch isSelected={selectedTopic == "props"} onSelect={()=>onSelect("props")}>Props</TabSwitch>
							<TabSwitch isSelected={selectedTopic == "jsx"} onSelect={()=>onSelect("jsx")}>JSX</TabSwitch>
							<TabSwitch isSelected={selectedTopic == "state"} onSelect={()=>onSelect("state")}>State</TabSwitch>
						</menu>
						<div id="tab-content">
							{!selectedTopic?<p>Please select a topic!</p>:
							<><h3>{EXAMPLES[selectedTopic]?.title}</h3>
							<p>{EXAMPLES[selectedTopic]?.description}</p>
							<pre>
								<code>
									{EXAMPLES[selectedTopic]?.code}
								</code>
							</pre></>}
						</div>
				</section>
      </main>
    </div>
  );
}

export default App;
