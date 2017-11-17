export { Create } from './create';
export { NodePattern } from './node-pattern';
export { With } from './with';
export { Unwind } from './unwind';
export { Delete } from './delete';
export { Set } from './set';
export { RelationPattern } from './relation-pattern';
export { Match } from './match';
export { Return } from './return';
export { Skip } from './skip';
export { Limit } from './limit';
export { Where } from './where';
import { and, or, xor, not } from './where-operators';
import {
  equals,
  greaterThan,
  greaterEqualTo,
  lessThan,
  lessEqualTo,
  startsWith,
  endsWith,
  contains,
  inArray,
  hasLabel,
  exists,
  between,
  isNull,
  regexp,
} from './where-comparators';

import { NodePattern } from './node-pattern';
import { RelationPattern } from './relation-pattern';
import { PathLength } from '../utils';

export function node(
  name: string,
  labels: string | string[] = [],
  conditions = {}
) {
  return new NodePattern(name, labels, conditions);
}

export function relation(
  dir: 'in' | 'out' | 'either',
  name: string = '',
  labels: string | string[] = [],
  conditions = {},
  length?: PathLength
) {
  return new RelationPattern(dir, name, labels, conditions, length);
}

export { and, or, xor, not };
export const operators = { and, or, xor, not };
export {
  equals,
  greaterThan,
  greaterEqualTo,
  lessThan,
  lessEqualTo,
  startsWith,
  endsWith,
  contains,
  inArray,
  hasLabel,
  exists,
  between,
  isNull,
  regexp,
};
export const comparisions = {
  equals,
  greaterThan,
  greaterEqualTo,
  lessThan,
  lessEqualTo,
  startsWith,
  endsWith,
  contains,
  inArray,
  hasLabel,
  exists,
  between,
  isNull,
  regexp,
};
