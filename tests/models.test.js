import test from 'node:test';import assert from 'node:assert/strict';import {getModel,instantiateModel,listCategories,models,searchModels,validateModelCatalog} from '../src/index.js';
test('catalog is valid and IDs are unique',()=>{assert.deepEqual(validateModelCatalog(models),{valid:true,issues:[]});assert.equal(new Set(models.map(m=>m.id)).size,models.length);});
test('search uses names, categories, IDs, and tags',()=>{assert.equal(searchModels('red light')[0].id,'led-red');assert.ok(searchModels('',{category:'passive'}).length>=3);});
test('models can be instantiated safely',()=>{assert.equal(instantiateModel('basic-resistor',{resistance:4700}).values.resistance,4700);assert.throws(()=>instantiateModel('basic-resistor',{resistance:-1}),/range/);assert.throws(()=>instantiateModel('missing'),/Unknown/);});
test('catalog exposes expected categories and models',()=>{assert.ok(listCategories().includes('semiconductor'));assert.equal(getModel('ne555').symbol,'timer-555');});
