import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

const ReleaseNotes = () => {
  const router = useRouter();
  const { version } = router.query;
  const [releaseNotes, setReleaseNotes] = useState(null);

  useEffect(() => {
    if (version) {
      fetch(`/api/release-notes/${version}`)
        .then((response) => response.json())
        .then((data) => setReleaseNotes(data))
        .catch((error) => console.error('Error fetching release notes:', error));
    }
  }, [version]);

  if (!releaseNotes) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>Release Notes for Version {version}</h1>
      <pre>{JSON.stringify(releaseNotes, null, 2)}</pre>
    </div>
  );
};

export default ReleaseNotes;
