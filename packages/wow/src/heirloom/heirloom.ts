import type { Resource } from '@blizzard-api/core';
import { base } from '../base';
import type { HeirloomIndexResponse, HeirloomResponse } from './types';

/**
 * Get a heirloom by ID.
 * @param heirloomId The heirloom ID.
 * @returns The heirloom. See {@link HeirloomResponse}.
 */
export function heirloom(heirloomId: number): Resource<HeirloomResponse> {
  return {
    namespace: 'static',
    path: `${base}/heirloom/${heirloomId}`,
  };
}
/**
 * Get the heirloom index.
 * @returns The heirloom index. See {@link HeirloomIndexResponse}.
 */
export function heirloomIndex(): Resource<HeirloomIndexResponse> {
  return {
    namespace: 'static',
    path: `${base}/heirloom/index`,
  };
}
