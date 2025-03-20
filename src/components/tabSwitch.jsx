import "./../index.css";
export default function TabSwitch(props){
	
	return <li>
		<button className={props.isSelected?"active":null} onClick={props.onSelect}>
	{props.children}
		</button>
		</li>
}