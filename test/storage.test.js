import test from 'node:test';
import assert from 'node:assert/strict';
import { readIds, toggleId, writeIds } from '../src/storage.js';

const storage = (initial = {}) => ({
  values: { ...initial },
  getItem(key) { return this.values[key] ?? null; },
  setItem(key, value) { this.values[key] = value; },
});

test('toggle ID menambah lalu menghapus tanpa duplikat', () => {
  assert.deepEqual(toggleId([], 7), [7]);
  assert.deepEqual(toggleId([7], 7), []);
});

test('penyimpanan ID pulih aman dari JSON rusak', () => {
  assert.deepEqual(readIds('favorit', storage({ favorit: '{rusak' })), []);
});

test('penyimpanan ID menulis JSON ringkas', () => {
  const target = storage();
  writeIds('dicoba', [1, 2], target);
  assert.deepEqual(readIds('dicoba', target), [1, 2]);
});
