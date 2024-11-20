const FAQ = () => {
  return (
    <div>
      <h1>FAQ: Common Java Maven Package Issues</h1>
      <ul>
        <li>
          <h2>Dependency Source Issues</h2>
          <p>
            <strong>Problem:</strong> Maven is unable to find the dependency source.
          </p>
          <p>
            <strong>Solution:</strong> Ensure that the repository URL is correct in your `pom.xml` file. You can add the repository as follows:
          </p>
          <pre>
            <code>
              {`<repositories>
  <repository>
    <id>central</id>
    <url>https://repo.maven.apache.org/maven2</url>
  </repository>
</repositories>`}
            </code>
          </pre>
        </li>
        <li>
          <h2>Version Conflicts</h2>
          <p>
            <strong>Problem:</strong> Maven is encountering version conflicts between dependencies.
          </p>
          <p>
            <strong>Solution:</strong> Use the `dependencyManagement` section in your `pom.xml` file to specify the versions of dependencies to be used. For example:
          </p>
          <pre>
            <code>
              {`<dependencyManagement>
  <dependencies>
    <dependency>
      <groupId>com.example</groupId>
      <artifactId>example-dependency</artifactId>
      <version>1.0.0</version>
    </dependency>
  </dependencies>
</dependencyManagement>`}
            </code>
          </pre>
        </li>
      </ul>
    </div>
  );
};

export default FAQ;
