class Logger {
  private static instance: Logger;
  private logs: string[] = [];

  // private constructor to prevent instantiation
  private constructor() {}

  //static method to get the single instance
  public static getInstance(): Logger {
    if (!Logger.instance) {
      Logger.instance = new Logger();
    }
    return Logger.instance;
  }

  // Method to log into messages
  public logInfo(message: string): void {
    this.logs.push(`INFO: ${message}`);
    console.log(`INFO: ${message}`);
  }

  // Method to log warning messages
  public logWarning(message: string): void {
    this.logs.push(`WARNING: ${message}`);
    console.log(`WARNING:  ${message}`);
  }

  // Method to log error messages
  public logError(message: string): void {
    this.logs.push(`ERROR: ${message}`);
    console.log(`ERORR: ${message}`);
  }

  // Method to retrieve all logs
  public getLogs(): string[] {
    return this.logs;
  }
}

class ComponentA {
  public doSomething() {
    const logger = Logger.getInstance();
    logger.logInfo("ComponentA did something.");
  }
}

class ComponentB {
  public doSomethingElse() {
    const logger = Logger.getInstance();
    logger.logError("ComponentB encountered an error.");
  }
}

function runApp() {
  //   const logger1 = Logger.getInstance();
  //   logger1.logInfo("Application has started.");

  //   const logger2 = Logger.getInstance();
  //   logger2.logWarning("Low disk space");

  //   const logger3 = Logger.getInstance();
  //   logger3.logError("Application crashed.");

  const logger = Logger.getInstance();
  logger.logInfo("Application has started.");

  const componentA = new ComponentA();
  componentA.doSomething();

  const componentB = new ComponentB();
  componentB.doSomethingElse();

  logger.logWarning("Low disk space.");

  console.log("All logs:");

  console.log(logger.getLogs());
  //   console.log(logger3.getLogs());
}

runApp();
