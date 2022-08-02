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

const Content = (props) => {
	const parts = props.parts;
	return (
		<div>
			<Part text={parts[0].name} number={parts[0].exercises} />
			<Part text={parts[1].name} number={parts[1].exercises} />
			<Part text={parts[2].name} number={parts[2].exercises} />
		</div>
	);
};

const Total = (props) => {
	const parts = props.parts;
	return <p>Number of exercises {parts[0].exercises + parts[1].exercises + parts[2].exercises}</p>;
};

const App = () => {
	const course = {
		name: "Half Stack application development",
		parts: [
			{
				name: "Fundamentals of React",
				exercises: 10,
			},
			{
				name: "Using props to pass data",
				exercises: 7,
			},
			{
				name: "State of a component",
				exercises: 14,
			},
		],
	};

	return (
		<div>
			<Header course={course.name} />
			<Content parts={course.parts} />
			<Total parts={course.parts} />
		</div>
	);
};

export default App;
