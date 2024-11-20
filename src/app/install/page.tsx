const Install = () => {
  return (
    <div>
      <h1>Install SDK</h1>
      <p>To add the Maven dependency for the SDK, add the following to your `pom.xml` file:</p>
      <pre>
        <code>
          {`<dependency>
  <groupId>com.phodal.sdk</groupId>
  <artifactId>sdk</artifactId>
  <version>1.0.0</version>
</dependency>`}
        </code>
      </pre>
    </div>
  );
};

export default Install;
