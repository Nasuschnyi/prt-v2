"use client";
import AboutPage from "./AboutPage";
import { useEffect, useState } from "react";
import Loader from "../components/UI/Loader/LoaderPage/Loader";

export default function About() {
	const [loading, setLoading] = useState(false);

	useEffect(() => {
		setTimeout(() => setLoading(true), 1000);
	}, []);
	return <>{!loading ? <Loader /> : <AboutPage />}</>;
}
