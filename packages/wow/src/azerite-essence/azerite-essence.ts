import type { Resource, SearchResponse } from '@blizzard-api/core';
import { base, mediaBase, searchBase } from '../base';
import type {
  AzeriteEssenceIndexResponse,
  AzeriteEssenceMediaResponse,
  AzeriteEssenceResponse,
  AzeriteEssenceSearchParameters,
  AzeriteEssenceSearchResponseItem,
} from './types';

/**
 * Get an azerite essence by ID.
 * @param azeriteEssenceId The azerite essence ID.
 * @returns The azerite essence. See {@link AzeriteEssenceResponse}.
 */
export function azeriteEssence(azeriteEssenceId: number): Resource<AzeriteEssenceResponse> {
  return {
    namespace: 'static',
    path: `${base}/azerite-essence/${azeriteEssenceId}`,
  };
}
/**
 * Get an azerite essence index.
 * @returns The azerite essence index. See {@link AzeriteEssenceIndexResponse}.
 */
export function azeriteEssenceIndex(): Resource<AzeriteEssenceIndexResponse> {
  return {
    namespace: 'static',
    path: `${base}/azerite-essence/index`,
  };
}
/**
 * Get azerite essence media by ID.
 * @param azeriteEssenceId The azerite essence ID.
 * @returns The azerite essence media. See {@link AzeriteEssenceMediaResponse}.
 */
export function azeriteEssenceMedia(azeriteEssenceId: number): Resource<AzeriteEssenceMediaResponse> {
  return { namespace: 'static', path: `${mediaBase}/azerite-essence/${azeriteEssenceId}` };
}
/**
 * Search for azerite essences.
 * @param options The search parameters. See {@link AzeriteEssenceSearchParameters}.
 * @returns The search results. See {@link SearchResponse}.
 */
export function azeriteEssenceSearch(
  options: AzeriteEssenceSearchParameters,
): Resource<SearchResponse<AzeriteEssenceSearchResponseItem>, AzeriteEssenceSearchParameters> {
  return {
    namespace: 'static',
    parameters: {
      _page: options._page,
      'allowed_specializations.id': options['allowed_specializations.id'],
      orderby: Array.isArray(options.orderby) ? options.orderby.join(',') : options.orderby,
    },
    path: `${searchBase}/azerite-essence`,
  };
}
