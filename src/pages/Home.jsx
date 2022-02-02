import React, { useState, useEffect } from 'react';
import twitterImage from '@images/twitter.png';
import instagramImage from '@images/instagram.png';
import githubImage from '@images/github.png';

const Home = () => {
	const [isLoading, setIsLoading] = useState(true);
	const [data, setData] = useState(null);

	const getData = async (API, id) => {
		const apiURl = id ? `${API}${id}` : API;
		try {
			setIsLoading(true);
			const response = await fetch(apiURl);
			const res = await response.json();
			setData(res.results[0]);
			setIsLoading(false);
		} catch (error) {
			console.log('Fetch Error', error);
		}
	};

	useEffect(() => {
		getData('https://randomuser.me/api/');
	}, []);

	if (isLoading) return <h1>Loading...</h1>;

	return (
		<div className="About">
			<div className="card">
				<div className="card_details">
					<div className="card_photo center circle">
						<img src={data.picture.large} alt={data.name.first} />
						{/* <svg
							viewBox="0 0 100 100"
							xmlns="http://www.w3.org/2000/svg"
							style="enable-background:new -580 439 577.9 194;"
							xml:space="preserve"
						>
							<circle cx="50" cy="50" r="40" />
						</svg> */}
					</div>
					<p className="card_title">Hi, My name is</p>
					<p className="card_value">
						{data.name.first} {data.name.last}
					</p>
				</div>
				<div className="card_userdata">
					<ul>
						<li>{data.email}</li>
						<li>{data.location.country}</li>
					</ul>
				</div>
				<div className="card_social">
					<a href="https://twitter.com/SkyRedFx">
						<img src={twitterImage} />
					</a>
					<a href="https://github.com/josegabjimenez">
						<img src={githubImage} />
					</a>
					<a href="https://instagram.com/josegabjimenez">
						<img src={instagramImage} />
					</a>
				</div>
			</div>
		</div>
	);
};

export default Home;
