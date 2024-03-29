/**
 * bandwidthLib
 *
 * This file was automatically generated by APIMATIC v2.0 ( https://apimatic.io ).
 */

import { ApiError } from './apiError';

/**
 * Creates an instance of Error
 */
interface Error {
  code: number;
  message: string;
}

export class ErrorError extends ApiError<Error> {}
