import test from 'node:test';
import assert from 'node:assert/strict';
import { plannerDB, recipesDB, findRecipeByTitle, findRecipesByTitle, getAllergens } from '../src/data.js';

test('database berisi 105 resep dengan ID unik', () => {
  assert.equal(recipesDB.length, 105);
  assert.equal(new Set(recipesDB.map(({ id }) => id)).size, 105);
});

test('planner berisi 30 hari dan semua menu utama terisi', () => {
  assert.equal(plannerDB.length, 30);
  for (const { day, meals } of plannerDB) {
    assert.ok(day >= 1 && day <= 30);
    for (const meal of ['sarapan', 'siang', 'malam']) assert.ok(meals[meal]);
  }
});

test('pencarian judul planner toleran terhadap nama tambahan', () => {
  assert.equal(findRecipeByTitle('Roti Panggang Telur (Baby French Toast)')?.id, 76);
  assert.equal(findRecipeByTitle('Patty Daging Sapi Lembut + Bola Nasi')?.id, 16);
  assert.equal(findRecipeByTitle('Menu yang tidak tersedia'), undefined);
});

test('menu gabungan menemukan semua resep komponennya', () => {
  assert.deepEqual(findRecipesByTitle('Hati Ayam Tumis + Tahu Sutra').map(({ id }) => id), [17, 36]);
});

test('alergen dikenali dari bahan resep', () => {
  const allergens = getAllergens(recipesDB.find(({ id }) => id === 6));
  assert.ok(allergens.includes('Telur'));
});
