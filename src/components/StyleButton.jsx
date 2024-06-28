import { styled } from "styled-components";

export const Button = styled.button`
	color: ${getColor};
	background-color: ${getBackground};
	padding: ${getPadding};
	border-radius: ${getBorderRadius};
	border: none;
	cursor: pointer;
`;

function getColor({ color }) {
	return color === "delete"
		? "white"
		: color === "complete"
		? "white"
		: color === "uncomplete"
		? "white"
		: "add"
		? "yellow"
		: "";
}

function getBackground({ backgroundColor }) {
	return backgroundColor === "delete"
		? "red"
		: backgroundColor === "complete"
		? "blue"
		: "uncomplete"
		? "aqua"
		: "add"
		? "green"
		: "";
}

function getPadding({ padding }) {
	return padding === "delete"
		? "10px 20px"
		: padding === "complete"
		? "10px 20px"
		: "uncomplete"
		? "10px 20px"
		: "add"
		? "200px 200px"
		: "";
}

function getBorderRadius({ borderRadius }) {
	return borderRadius === "delete"
		? "20px"
		: "complete"
		? "20px"
		: "uncomplete"
		? "20px"
		: "add"
		? "50%"
		: "";
}
