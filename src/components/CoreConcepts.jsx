export default function CoreConcept(props){
	return<li>
		<img src={props.imageSrc} alt=""/>
		<h3>{props.title}</h3>
		<p>{props.description}</p>
	</li>
 }