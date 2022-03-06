import React, { useState, useEffect } from "react";
import { BrowserRouter, Link, Routes, Route } from "react-router-dom";

// stateless component
/**
 *  Khong dung set useState truc tiep o trong Function Component
 *  Luon truyen dependency array vao useEffect
 */
const users = [
	{
		id: 1,
		name: "A",
		route: "/a",
	},
	{
		id: 2,
		name: "B",
		route: "/b",
	},
	{
		id: 3,
		name: "C",
		route: "/c",
	},
];
const FunctionComp = (props) => {
	useEffect(() => {}, []);

	return <></>;
};

export default FunctionComp;

// useMemo useCallback useContext
