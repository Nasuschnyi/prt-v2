'use client';
import Loader from '../components/UI/Loader/LoaderPage/Loader';
import WorkPage from './WorkPage';
import React, { useEffect, useState } from 'react';

const Work = () => {
	const [loading, setLoading] = useState(false);

	useEffect(() => {
		setTimeout(() => setLoading(true), 1000);
	}, []);
	return <>{!loading ? <Loader /> : <WorkPage />}</>;
};

export default Work;
