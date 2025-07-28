import { env } from './env';

export const logger = {
  log: (message: string, metadata?: Record<string, any>) => {
    if (env.NODE_ENV === 'development') {
      console.log(`[INFO] ${new Date().toISOString()}: ${message}`, metadata);
    }
  },

  error: (error: Error | string, metadata?: Record<string, any>) => {
    const errorMessage = error instanceof Error ? error.message : error;
    console.error(`[ERROR] ${new Date().toISOString()}: ${errorMessage}`, {
      ...metadata,
      stack: error instanceof Error ? error.stack : undefined,
    });
  },

  warn: (message: string, metadata?: Record<string, any>) => {
    console.warn(`[WARN] ${new Date().toISOString()}: ${message}`, metadata);
  },

  debug: (message: string, metadata?: Record<string, any>) => {
    if (env.NODE_ENV === 'development') {
      console.debug(`[DEBUG] ${new Date().toISOString()}: ${message}`, metadata);
    }
  },
};

// Add error handler for unhandled promise rejections
process.on('unhandledRejection', (reason: any) => {
  logger.error('Unhandled Rejection:', { reason });
});

// Add error handler for uncaught exceptions
process.on('uncaughtException', (error: Error) => {
  logger.error('Uncaught Exception:', { error });
});
