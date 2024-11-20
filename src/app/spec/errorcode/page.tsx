'use client';

import styles from './page.module.css';

const errorCodeExplanations = {
	400: 'Bad Request: The server could not understand the request due to invalid syntax.',
	401: 'Unauthorized: The client must authenticate itself to get the requested response.',
	403: 'Forbidden: The client does not have access rights to the content.',
	404: 'Not Found: The server can not find the requested resource.',
	500: 'Internal Server Error: The server has encountered a situation it doesn\'t know how to handle.',
	502: 'Bad Gateway: The server was acting as a gateway or proxy and received an invalid response from the upstream server.',
	503: 'Service Unavailable: The server is not ready to handle the request.',
	504: 'Gateway Timeout: The server is acting as a gateway or proxy and did not get a response in time from the upstream server.'
};

const ErrorCodePage = () => {
	const hash = window.location.hash;
	const errorCode = hash.replace('#', '')
	// eslint-disable-next-line @typescript-eslint/ban-ts-comment
	// @ts-expect-error
	const explanation = errorCodeExplanations[errorCode];

	return (
		<div className={styles.container}>
			{explanation ? (
				<>
					<h1 className={styles.errorCode}>{errorCode}</h1>
					<p className={styles.explanation}>{explanation}</p>
				</>
			) : (
				<ul>
					{Object.entries(errorCodeExplanations).map(([code, explanation]) => (
						<li key={code}>
							<a href={`#${code}`}>{code}</a>: {explanation}
						</li>
					))}
				</ul>
			)}
		</div>
	);
};

export default ErrorCodePage;
