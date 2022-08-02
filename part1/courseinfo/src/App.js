const course = "Half Stack application development";
const part1 = "Fundamentals of React";
const exercises1 = 10;
const part2 = "Using props to pass data";
const exercises2 = 7;
const part3 = "State of a component";
const exercises3 = 14;

const Header = (props) => {
	return <h1>{props.course}</h1>;
};

const Part = (props) => {
	return (
		<p>
			{props.text} {props.number}
		</p>
	);
};

const Content = () => {
	return (
		<div>
			<Part text={part1} number={exercises1} />
			<Part text={part2} number={exercises2} />
			<Part text={part3} number={exercises3} />
		</div>
	);
};

const Total = (props) => {
	return <p>Number of exercises {props.number}</p>;
};

const App = () => {
	return (
		<div>
			<Header course={course} />
			<Content />
			<Total number={exercises1 + exercises2 + exercises3} />
		</div>
	);
};

export default App;
