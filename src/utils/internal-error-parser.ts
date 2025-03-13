import type { ServerError } from '@/types/api/error.interface';

export const internalErrorParser = (error: unknown): ServerError => {
  console.error(error);

  if (error instanceof Error) {
    return { message: error.message };
  } else if (typeof error === 'string') {
    return { message: error };
  }

  return { message: 'Something wrong' };
};
