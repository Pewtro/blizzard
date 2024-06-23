import type { KeyBase, NameIdKey, ResponseBase } from '../base';

/**
 * The response for a toy index.
 * @see {@link https://develop.battle.net/documentation/world-of-warcraft/game-data-apis}
 */
export interface ToyIndexResponse extends ResponseBase {
  toys: Array<NameIdKey>;
}

/**
 * The response for a toy.
 * @see {@link https://develop.battle.net/documentation/world-of-warcraft/game-data-apis}
 */
export interface ToyResponse extends ResponseBase {
  id: number;
  item: NameIdKey;
  media: Media;
  source: Source;
  source_description: string;
}

interface Media extends KeyBase {
  id: number;
}

interface Source {
  name: string;
  type: string;
}
