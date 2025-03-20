
const CORE_CONCEPT = [
{
	title:"Components", 
	description:"The core UI building block", 
	imageSrc:"/src/assets/components.png"
},
{
	title:"Props", 
	description:"The core UI building block", 
	imageSrc:"/src/assets/config.png"
},
{
	title:"JXS", 
	description:"The core UI building block", 
	imageSrc:"/src/assets/jsx-ui.png"
	},
	{
		title:"state", 
		description:"The core UI building block", 
		imageSrc:"/src/assets/state-mgmt.png"
	}
]

const EXAMPLES = {
	components:{
		title: 'components',
		description: "Components Description",
		code: `function welcome(){ return <h1> Hello Components! </h1>}`
	},
	jsx:{
		title: 'JSX',
		description: "JSX Description",
		code: `function welcome(){ return <div>
		<h1> Hello, {userName}! </h1>
		<p>Time to learn react!</p>
		</div>
		}`
	},
	props:{
		title: 'props',
		description: "props Description",
		code: `function welcome(){ 
		return <div>
		<h1> Hello, {props.name}! </h1>
		</div>
		}`
	},
	state:{
		title: 'state',
		description: "state Description",
		code: `function welcome(){ 
		const [price, setPrice]= useState(100);

		const applyDiscount =()=>{
			setPrice(75);
			}

		return <div>
		<h1> Price: {price} </h1>
		<button onClick={applyDiscount}>Apply Discount</button>
		</div>
		}`
	}
}
export {CORE_CONCEPT, EXAMPLES};