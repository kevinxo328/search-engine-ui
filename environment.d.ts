import Next from "next";

declare global {
  namespace NodeJS {
    interface ProcessEnv {
      BING_API_ENDPOINT: string;
      BING_API_KEY: string;
      BING_CUSTOM_CONFIG_ID: string;
      VERCEL_URL?: string;
    }
  }
}
