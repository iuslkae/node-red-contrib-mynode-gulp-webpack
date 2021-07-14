import { EditorRED } from 'node-red';

declare const RED: EditorRED;

RED.nodes.registerType('MyNode', {
  category: 'MyNodes',
  inputs: 1,
  outputs: 1,
  defaults: {},
});
