'use client';
import React from 'react';
import Loader from '../components/UI/Loader/LoaderPage/Loader';
import HomePage from './HomePage';

export default function Home() {
	const [loading, setLoading] = React.useState(false);

	React.useEffect(() => {
		setTimeout(() => setLoading(true), 1000);
	}, []);
	return !loading ? <Loader /> : <HomePage />;
}
