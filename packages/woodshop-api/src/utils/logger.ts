type LoggerOptions = {
  type: "json" | "plain";
  level: "error" | "warn" | "info" | "verbose" | "debug" | "silly";
  location: string | null;
};

const loggerLevels: { [key in LoggerOptions["level"]]: number } = {
  error: 0,
  warn: 1,
  info: 2,
  verbose: 3,
  debug: 4,
  silly: 5
};

export class Logger {
  type: LoggerOptions["type"];
  level: LoggerOptions["level"];
  location: LoggerOptions["location"];

  constructor(options?: Partial<LoggerOptions>) {
    this.type = options?.type || "json";
    this.level = options?.level || "info";
    this.location = options?.location || null;
  }

  private write({
    level,
    message,
    stack,
    payload
  }: {
    message: string;
    level: LoggerOptions["level"];
    stack?: string;
    payload?: any[];
  }) {
    if (this.type === "json") {
      const jsonMessage = JSON.stringify({
        message,
        level,
        time: new Date(),
        stack: stack || null,
        location: this.location,
        payload: payload || null
      });
      console.log(jsonMessage);
    }
    if (this.type === "plain") {
      console.log(
        `--[[woodshop:${level}]]--`,
        message,
        "@",
        this.location || ""
      );
    }
  }

  private shouldLog(level: LoggerOptions["level"]) {
    if (this.level <= level) {
      return true;
    }
    return false;
  }

  error(message: string, error: Error) {
    if (!this.shouldLog("error")) return;
    this.write({ level: "error", message, stack: error.stack });
  }
  info(message: string, ...payload: any[]) {
    if (!this.shouldLog("info")) return;
    this.write({ level: "info", message, payload });
  }
  warn(message: string, payload: Record<string, unknown>) {
    if (!this.shouldLog("warn")) return;
  }
  verbose(message: string, payload: Record<string, unknown>) {
    if (!this.shouldLog("verbose")) return;
  }
  debug(message: string, payload: Record<string, unknown>) {
    if (!this.shouldLog("debug")) return;
  }
  silly(message: string, payload: Record<string, unknown>) {
    if (!this.shouldLog("silly")) return;
    // this.write();
  }

  setLocation(location: string) {
    this.location = location;
  }
}
