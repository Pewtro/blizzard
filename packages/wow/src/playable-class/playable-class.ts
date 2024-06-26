import type { Resource } from '@blizzard-api/core';
import { base, mediaBase } from '../base';
import type {
  PlayableClassIndexResponse,
  PlayableClassMediaResponse,
  PlayableClassResponse,
  PvpTalentSlotsResponse,
} from './types';

/**
 * Get a playable class by ID.
 * @param playableClassId The playable class ID.
 * @returns The playable class. See {@link PlayableClassResponse}.
 */
export function playableClass(playableClassId: number): Resource<PlayableClassResponse> {
  return {
    namespace: 'static',
    path: `${base}/playable-class/${playableClassId}`,
  };
}
/**
 * Get a playable class index.
 * @returns The playable class index. See {@link PlayableClassIndexResponse}.
 */
export function playableClassIndex(): Resource<PlayableClassIndexResponse> {
  return {
    namespace: 'static',
    path: `${base}/playable-class/index`,
  };
}
/**
 * Get playable class media by ID.
 * @param playableClassId The playable class ID.
 * @returns The playable class media. See {@link PlayableClassMediaResponse}.
 */
export function playableClassMedia(playableClassId: number): Resource<PlayableClassMediaResponse> {
  return {
    namespace: 'static',
    path: `${mediaBase}/playable-class/${playableClassId}`,
  };
}
/**
 * Get a playable class's PvP talent slots by ID.
 * @param playableClassId The playable class ID.
 * @returns The playable class's PvP talent slots. See {@link PvpTalentSlotsResponse}.
 */
export function pvpTalentSlots(playableClassId: number): Resource<PvpTalentSlotsResponse> {
  return {
    namespace: 'static',
    path: `${base}/playable-class/${playableClassId}/pvp-talent-slots`,
  };
}
