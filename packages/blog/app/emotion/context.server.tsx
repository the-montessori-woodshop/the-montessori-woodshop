// @ts-ignore
import { createEmotionServer } from "@emotion/server/create-instance";
import { createContext } from "react";

export interface ServerStyleContextData {
  key: string;
  ids: Array<string>;
  css: string;
}

const ServerStyleContext = createContext<null | ServerStyleContextData[]>(null);
export const createServer = createEmotionServer;

export default ServerStyleContext;
