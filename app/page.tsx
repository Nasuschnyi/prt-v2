'use client';
import React, { useState, useEffect } from 'react';
import PercentLoader from './components/UI/Loader/PercentLoader/PercentLoader';
import Home from './home/page';

const StartApp: React.FC = () => {
	const [loading, setLoading] = useState(true);
	const [percent, setPercent] = useState(0);

	useEffect(() => {
		const interval = setInterval(() => {
			setPercent((prevPercent) => prevPercent + 9);
		}, 100);

		if (percent >= 100) {
			clearInterval(interval);
			setLoading(false);
		}

		return () => clearInterval(interval);
	}, [percent]);

	return <>{loading ? <PercentLoader percent={percent} /> : <Home />}</>;
};

export default StartApp;
