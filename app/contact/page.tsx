'use client';
import { useEffect, useState } from 'react';
import Loader from '../components/UI/Loader/LoaderPage/Loader';
import { ContactPage } from './ContactPage';

export default function Contact() {
	const [loading, setLoading] = useState(false);

	useEffect(() => {
		setTimeout(() => setLoading(true), 1000);
	}, []);
	return <>{!loading ? <Loader /> : <ContactPage />}</>;
}
