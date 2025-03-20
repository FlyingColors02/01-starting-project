export default function CoreConcept(props){
	return<li key={props.title}>
		<img src={props.imageSrc} alt=""/>
		<h3>{props.title}</h3>
		<p>{props.description}</p>
	</li>
 }