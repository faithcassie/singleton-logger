var Logger = /** @class */ (function () {
    // private constructor to prevent instantiation
    function Logger() {
        this.logs = [];
    }
    //static method to get the single instance
    Logger.getInstance = function () {
        if (!Logger.instance) {
            Logger.instance = new Logger();
        }
        return Logger.instance;
    };
    // Method to log into messages
    Logger.prototype.logInfo = function (message) {
        this.logs.push("INFO: ".concat(message));
        console.log("INFO: ".concat(message));
    };
    // Method to log warning messages
    Logger.prototype.logWarning = function (message) {
        this.logs.push("WARNING: ".concat(message));
        console.log("WARNING:  ".concat(message));
    };
    // Method to log error messages
    Logger.prototype.logError = function (message) {
        this.logs.push("ERROR: ".concat(message));
        console.log("ERORR: ".concat(message));
    };
    // Method to retrieve all logs
    Logger.prototype.getLogs = function () {
        return this.logs;
    };
    return Logger;
}());
var ComponentA = /** @class */ (function () {
    function ComponentA() {
    }
    ComponentA.prototype.doSomething = function () {
        var logger = Logger.getInstance();
        logger.logInfo("ComponentA did something.");
    };
    return ComponentA;
}());
var ComponentB = /** @class */ (function () {
    function ComponentB() {
    }
    ComponentB.prototype.doSomethingElse = function () {
        var logger = Logger.getInstance();
        logger.logError("ComponentB encountered an error.");
    };
    return ComponentB;
}());
function runApp() {
    //   const logger1 = Logger.getInstance();
    //   logger1.logInfo("Application has started.");
    //   const logger2 = Logger.getInstance();
    //   logger2.logWarning("Low disk space");
    //   const logger3 = Logger.getInstance();
    //   logger3.logError("Application crashed.");
    var logger = Logger.getInstance();
    logger.logInfo("Application has started.");
    var componentA = new ComponentA();
    componentA.doSomething();
    var componentB = new ComponentB();
    componentB.doSomethingElse();
    logger.logWarning("Low disk space.");
    console.log("All logs:");
    console.log(logger.getLogs());
    //   console.log(logger3.getLogs());
}
runApp();
