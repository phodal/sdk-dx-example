'use client';

import styles from './page.module.css';
import { Typography, List, Button, Card } from 'antd';
import { useRouter } from "next/navigation";

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

/// https://github.com/vercel/next.js/discussions/49465
const getHash = () => (typeof window !== 'undefined' ? decodeURIComponent(window.location.hash.replace('#', '')) : undefined);

const ErrorCodePage = () => {
	const router = useRouter();
	const hash = getHash() || '';
	const errorCode = hash.replace('#', '')
	// eslint-disable-next-line @typescript-eslint/ban-ts-comment
	// @ts-expect-error
	const [explanation, setExplanation] = useState<string | undefined>(errorCodeExplanations[errorCode]);

	return (
		<div className={styles.container}>
			{explanation ? (
					<Card>
						<Typography.Title className={styles.errorCode}>{errorCode}</Typography.Title>
						<Typography.Paragraph className={styles.explanation}>{explanation}</Typography.Paragraph>
						<Button type="primary" onClick={() => {
							router.push('/spec/error-code');
							setExplanation(undefined);
						}}>Back to list</Button>
					</Card>
			) : (
				<List
					dataSource={Object.entries(errorCodeExplanations)}
					renderItem={([code, value]) => (
						<List.Item>
							<a href={`/spec/error-code#${code}`} onClick={() => {
								router.push(`/spec/error-code#${code}`);
								setExplanation(value);
							}}>
								{code}
							</a> - {value}
						</List.Item>
					)}
				/>
			)}
		</div>
	);
};

export default ErrorCodePage;
