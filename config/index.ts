import * as dotenv from 'dotenv'
dotenv.config()

export const API_URL = process.env.API_URL || ''
export const NODE_ENV = process.env.NODE_ENV || ''
