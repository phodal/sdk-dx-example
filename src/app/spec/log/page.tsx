const LogSpecification = () => {
  return (
    <div>
      <h1>Log Specification</h1>
      <h2>Java + Spring Logging Guidelines</h2>
      <p>Logging is an essential part of any application. In a Spring Boot application, we can use SLF4J and Logback for logging. Below are the guidelines for configuring logging in a Spring Boot application and examples of logging statements.</p>
      
      <h3>Configuring Logging in a Spring Boot Application</h3>
      <p>To configure logging in a Spring Boot application, follow these steps:</p>
      <ol>
        <li>Add the following dependencies to your <code>pom.xml</code> file:</li>
        <pre>
          <code>
            {`<dependency>
  <groupId>org.springframework.boot</groupId>
  <artifactId>spring-boot-starter-logging</artifactId>
</dependency>
<dependency>
  <groupId>org.slf4j</groupId>
  <artifactId>slf4j-api</artifactId>
</dependency>
<dependency>
  <groupId>ch.qos.logback</groupId>
  <artifactId>logback-classic</artifactId>
</dependency>`}
          </code>
        </pre>
        <li>Create a <code>logback-spring.xml</code> file in the <code>src/main/resources</code> directory with the following content:</li>
        <pre>
          <code>
            {`<configuration>
  <appender name="STDOUT" class="ch.qos.logback.core.ConsoleAppender">
    <encoder>
      <pattern>%d{yyyy-MM-dd HH:mm:ss} - %msg%n</pattern>
    </encoder>
  </appender>
  <root level="info">
    <appender-ref ref="STDOUT" />
  </root>
</configuration>`}
          </code>
        </pre>
      </ol>
      
      <h3>Examples of Logging Statements</h3>
      <p>Here are some examples of logging statements using SLF4J and Logback:</p>
      <pre>
        <code>
          {`import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

public class MyClass {
  private static final Logger logger = LoggerFactory.getLogger(MyClass.class);

  public void doSomething() {
    logger.info("This is an info message");
    logger.debug("This is a debug message");
    logger.error("This is an error message");
  }
}`}
        </code>
      </pre>
    </div>
  );
};

export default LogSpecification;
