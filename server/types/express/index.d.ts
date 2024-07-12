import { Express } from 'express-serve-static-core';

declare global {
  namespace Express {
    export interface Request {
      user?: {
        _id: string;
        // Add other user properties as needed
      };
    }
  }
}