"use client";
import { Metadata } from "next";
import { useEffect, useState } from "react";
import Loader from "../components/UI/Loader/LoaderPage/Loader";
import HomePage from "./HomePage";

export const metadata: Metadata = {
	title: "Main | Andrii Nasuschnyi",
	description: "portfolio Andrii Nasuschnyi",
};

export default function Home() {
	const [loading, setLoading] = useState(false);

	useEffect(() => {
		setTimeout(() => setLoading(true), 1000);
	}, []);
	return <>{!loading ? <Loader /> : <HomePage />}</>;
}
