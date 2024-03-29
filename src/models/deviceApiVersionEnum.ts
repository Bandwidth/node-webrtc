/**
 * bandwidthLib
 *
 * This file was automatically generated by APIMATIC v2.0 ( https://apimatic.io ).
 */

import { Schema, stringEnum } from '../schema';

/**
 * Enum for DeviceApiVersionEnum
 */
export enum DeviceApiVersionEnum {
  V3 = 'V3',
  V2 = 'V2',
}

/**
 * Schema for DeviceApiVersionEnum
 */
export const deviceApiVersionEnumSchema: Schema<DeviceApiVersionEnum> = stringEnum(DeviceApiVersionEnum);
