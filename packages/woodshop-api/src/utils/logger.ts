export type LoggerOptions = {
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
  level: number;
  location: string;

  constructor(options?: Partial<LoggerOptions>) {
    this.type = options?.type || "json";
    this.level = loggerLevels[options?.level || "info"];
    this.location = options?.location || "general";
  }

  private write({
    level,
    message,
    payload
  }: {
    message: string;
    level: LoggerOptions["level"];
    payload?: any[];
  }) {
    if (this.shouldLog(level)) {
      return;
    }
    if (this.type === "json") {
      const jsonMessage = JSON.stringify({
        message,
        level,
        time: new Date(),
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
    if (this.level <= loggerLevels[level]) {
      return true;
    }
    return false;
  }

  error(message: string, ...payload: any[]) {
    this.write({ level: "error", message, payload });
  }
  info(message: string, ...payload: any[]) {
    this.write({ level: "info", message, payload });
  }
  warn(message: string, ...payload: any[]) {
    this.write({ level: "warn", message, payload });
  }
  verbose(message: string, ...payload: any[]) {
    this.write({ level: "verbose", message, payload });
  }
  debug(message: string, ...payload: any[]) {
    this.write({ level: "debug", message, payload });
  }
  silly(message: string, ...payload: any[]) {
    this.write({ level: "silly", message, payload });
  }
}

export const log = new Logger({
  level: LOG_LEVEL || "info",
  type: LOG_TYPE || "json"
});
