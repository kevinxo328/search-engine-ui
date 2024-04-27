/// <reference types="next" />
/// <reference types="next/image-types/global" />

// NOTE: This file should not be edited
// see https://nextjs.org/docs/basic-features/typescript for more information.

namespace NodeJS {
  interface ProcessEnv {
    BING_API_ENDPOINT: string;
    BING_API_KEY: string;
    BING_CUSTOM_CONFIG_ID: string;
    VERCEL_URL?: string;
  }
}
