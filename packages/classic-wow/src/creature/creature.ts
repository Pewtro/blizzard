import type { BlizzardNamespaces, Resource, SearchResponse } from '@blizzard-api/core';
import { base, mediaBase, searchBase } from '../../../wow/src/base';
import type {
  CreatureDisplayMediaResponse,
  CreatureFamilyIndexResponse,
  CreatureFamilyMediaResponse,
  CreatureFamilyResponse,
  CreatureResponse,
  CreatureSearchParameters,
  CreatureSearchResponseItem,
  CreatureTypeIndexResponse,
  CreatureTypeResponse,
} from './types';

/**
 * Returns a creature by ID.
 * @param namespace The namespace to use. See {@link BlizzardNamespaces}.
 * @param creatureId The creature ID.
 * @returns The creature. See {@link CreatureResponse}.
 */
export function creature(
  namespace: Extract<BlizzardNamespaces, 'static-classic' | 'static-classic1x'>,
  creatureId: number,
): Resource<CreatureResponse> {
  return {
    namespace,
    path: `${base}/creature/${creatureId}`,
  };
}
/**
 * Returns media for a creature display by ID.
 * @param namespace The namespace to use. See {@link BlizzardNamespaces}.
 * @param creatureDisplayId The creature display ID.
 * @returns The creature display media. See {@link CreatureDisplayMediaResponse}.
 */
export function creatureDisplayMedia(
  namespace: Extract<BlizzardNamespaces, 'static-classic' | 'static-classic1x'>,
  creatureDisplayId: number,
): Resource<CreatureDisplayMediaResponse> {
  return {
    namespace,
    path: `${mediaBase}/creature-display/${creatureDisplayId}`,
  };
}
/**
 * Returns a creature family by ID.
 * @param namespace The namespace to use. See {@link BlizzardNamespaces}.
 * @param creatureFamilyId The creature family ID.
 * @returns The creature family. See {@link CreatureFamilyResponse}.
 */
export function creatureFamily(
  namespace: Extract<BlizzardNamespaces, 'static-classic' | 'static-classic1x'>,
  creatureFamilyId: number,
): Resource<CreatureFamilyResponse> {
  return {
    namespace,
    path: `${base}/creature-family/${creatureFamilyId}`,
  };
}
/**
 * Returns an index of creature families.
 * @param namespace The namespace to use. See {@link BlizzardNamespaces}.
 * @returns The creature family index. See {@link CreatureFamilyIndexResponse}.
 */
export function creatureFamilyIndex(
  namespace: Extract<BlizzardNamespaces, 'static-classic' | 'static-classic1x'>,
): Resource<CreatureFamilyIndexResponse> {
  return {
    namespace,
    path: `${base}/creature-family/index`,
  };
}
/**
 * Returns media for a creature family by ID.
 * @param namespace The namespace to use. See {@link BlizzardNamespaces}.
 * @param creatureFamilyId The creature family ID.
 * @returns The creature family media. See {@link CreatureFamilyMediaResponse}.
 */
export function creatureFamilyMedia(
  namespace: Extract<BlizzardNamespaces, 'static-classic' | 'static-classic1x'>,
  creatureFamilyId: number,
): Resource<CreatureFamilyMediaResponse> {
  return {
    namespace,
    path: `${mediaBase}/creature-family/${creatureFamilyId}`,
  };
}
/**
 * Returns a creature type by ID.
 * @param namespace The namespace to use. See {@link BlizzardNamespaces}.
 * @param creatureTypeId The creature type ID.
 * @returns The creature type. See {@link CreatureTypeResponse}.
 */
export function creatureType(
  namespace: Extract<BlizzardNamespaces, 'static-classic' | 'static-classic1x'>,
  creatureTypeId: number,
): Resource<CreatureTypeResponse> {
  return {
    namespace,
    path: `${base}/creature-type/${creatureTypeId}`,
  };
}
/**
 * Returns an index of creature types.
 * @param namespace The namespace to use. See {@link BlizzardNamespaces}.
 * @returns The creature type index. See {@link CreatureTypeIndexResponse}.
 */
export function creatureTypeIndex(
  namespace: Extract<BlizzardNamespaces, 'static-classic' | 'static-classic1x'>,
): Resource<CreatureTypeIndexResponse> {
  return {
    namespace,
    path: `${base}/creature-type/index`,
  };
}
/**
 * Performs a search of creatures.
 * @param namespace The namespace to use. See {@link BlizzardNamespaces}.
 * @param options The creature search parameters. See {@link CreatureSearchParameters}.
 * @returns The creature search results. See {@link SearchResponse} & {@link CreatureSearchResponseItem}.
 */
export function creatureSearch(
  namespace: Extract<BlizzardNamespaces, 'static-classic' | 'static-classic1x'>,
  options: CreatureSearchParameters,
): Resource<SearchResponse<CreatureSearchResponseItem>, Omit<CreatureSearchParameters, 'locale' | 'name'>> {
  return {
    namespace,
    parameters: {
      _page: options._page,
      [`name.${options.locale}`]: options.name,
      orderby: Array.isArray(options.orderby) ? options.orderby.join(',') : options.orderby,
    },
    path: `${searchBase}/creature`,
  };
}
