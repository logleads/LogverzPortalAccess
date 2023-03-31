export const DEVELOPMENT_MODE = 'development';
export const PRODUCTION_MODE = 'production';

// dotenv-webpack plugin throws error if env variables are empty
export const REGION = process.env.REGION as string;
export const ACCOUNT_NUMBER = process.env.ACCOUNT_NUMBER as string;
export const BASE_URL = process.env.BASE_URL as string;
export const STAGE_NAME = process.env.STAGE_NAME as string;

export const APP_PATH = `${STAGE_NAME}/HTTP/S3/LB`;
