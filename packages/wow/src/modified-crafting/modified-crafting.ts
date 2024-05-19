import type { Resource } from '@blizzard-api/core';
import { base } from '../base';
import type {
  ModifiedCraftingCategoryIndexResponse,
  ModifiedCraftingCategoryResponse,
  ModifiedCraftingIndexResponse,
  ModifiedCraftingReagentSlotTypeIndexResponse,
  ModifiedCraftingReagentSlotTypeResponse,
} from './types';

/**
 * Get a modified crafting category by ID.
 * @param modifiedCraftingCategoryId The modified crafting category ID.
 * @returns The modified crafting category. See {@link ModifiedCraftingCategoryResponse}.
 */
export function modifiedCraftingCategory(
  modifiedCraftingCategoryId: number,
): Resource<ModifiedCraftingCategoryResponse> {
  return {
    path: `${base}/modified-crafting/category/${modifiedCraftingCategoryId}`,
    namespace: 'static',
  };
}
/**
 * Get a modified crafting category index.
 * @returns The modified crafting category index. See {@link ModifiedCraftingCategoryIndexResponse}.
 */
export function modifiedCraftingCategoryIndex(): Resource<ModifiedCraftingCategoryIndexResponse> {
  return {
    path: `${base}/modified-crafting/category/index`,
    namespace: 'static',
  };
}
/**
 * Get a modified crafting index.
 * @returns The modified crafting index. See {@link ModifiedCraftingIndexResponse}.
 */
export function modifiedCraftingIndex(): Resource<ModifiedCraftingIndexResponse> {
  return {
    path: `${base}/modified-crafting/index`,
    namespace: 'static',
  };
}
/**
 * Get a modified crafting reagent slot type by ID.
 * @param modifiedCraftingReagentSlotTypeId The modified crafting reagent slot type ID.
 * @returns The modified crafting reagent slot type. See {@link ModifiedCraftingReagentSlotTypeResponse}.
 */
export function modifiedCraftingReagentSlotType(
  modifiedCraftingReagentSlotTypeId: number,
): Resource<ModifiedCraftingReagentSlotTypeResponse> {
  return {
    path: `${base}/modified-crafting/reagent-slot-type/${modifiedCraftingReagentSlotTypeId}`,
    namespace: 'static',
  };
}
/**
 * Get a modified crafting reagent slot type index.
 * @returns The modified crafting reagent slot type index. See {@link ModifiedCraftingReagentSlotTypeIndexResponse}.
 */
export function modifiedCraftingReagentSlotTypeIndex(): Resource<ModifiedCraftingReagentSlotTypeIndexResponse> {
  return {
    path: `${base}/modified-crafting/reagent-slot-type/index`,
    namespace: 'static',
  };
}
