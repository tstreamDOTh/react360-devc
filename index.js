import React from "react";
import { AppRegistry, StyleSheet, Text, View, VrButton } from "react-360";

import FBDevCirclesView from "./entities/FBDevCirclesView";
import Doggo from "./entities/Doggo";
import Pupper from "./entities/Pupper";

const slidesText = [
	"Virtual Reality on the Web with React 360",
	"What is React 360?",
	"open source web VR library managed by Facebook and Oculus",
	"the library formerly known as react-vr (RIP) in early 2017",
	"rebuilt from first principles in 2018",
	"How does it work?",
	"It's built on React Native to work on mobile, web, and VR devices...",
	"including the Oculus VR UI...",
	"and Three.js for lower level 3D rendering in the browser...",
	"and WebVR for browser APIs.",
	"What's great about it?",
	"It's pretty easy!",
	"`npm i -g react-360-cli`",
	"`react-360 init projectName`",
	"`yarn start`",
	"let's see some code!",
	"Thank you!!!"
];

export default class React360Demo extends React.Component {
	state = { slide: 0, totalSlides: slidesText.length };

	nextSlide = () => {
		const { totalSlides } = this.state;

		const nextIndex = this.state.slide + 1;
		const slide = nextIndex < totalSlides ? nextIndex : totalSlides - 1;
		this.setState({ slide });
	};

	prevSlide = () => {
		const previousIndex = this.state.slide - 1;
		const slide = previousIndex >= 0 ? previousIndex : 0;
		this.setState({ slide });
	};

	render() {
		return (
			<View style={styles.panel}>
				<View style={styles.greetingBox}>
					<VrButton onClick={this.prevSlide} style={styles.button}>
						<Text style={styles.buttonText}>{"<"}</Text>
					</VrButton>

					<View style={styles.titleView}>
						<Text style={styles.title}>{slidesText[this.state.slide]}</Text>
					</View>

					<VrButton onClick={this.nextSlide} style={styles.button}>
						<Text style={styles.buttonText}>{">"}</Text>
					</VrButton>
				</View>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	button: {
		backgroundColor: "#3c72b5",
		width: 40,
		height: "100%",
		display: "flex",
		justifyContent: "center"
	},
	buttonText: {
		textAlign: "center",
		color: "white",
		fontSize: 30,
		fontWeight: "bold"
	},
	panel: {
		// Fill the entire surface
		width: 900,
		height: 600,
		backgroundColor: "#3b5998",
		justifyContent: "center",
		alignItems: "center"
	},
	greetingBox: {
		height: "100%",
		width: "100%",
		display: "flex",
		flexDirection: "row",
		justifyContent: "space-between"
	},
	title: {
		color: "white",
		fontSize: 50
	},
	titleView: {
		height: "100%",
		display: "flex",
		justifyContent: "center",
		maxWidth: "80%"
	}
});
React360Demo;
AppRegistry.registerComponent("React360Demo", () => React360Demo);
AppRegistry.registerComponent("Pupper", () => Pupper);
AppRegistry.registerComponent("Doggo", () => Doggo);
AppRegistry.registerComponent("FBDevCirclesView", () => FBDevCirclesView);
