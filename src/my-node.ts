import { NodeInitializer, NodeDef, Node, NodeConstructor } from 'node-red';
const nodeInit: NodeInitializer = (RED): void => {
  const MyNode: NodeConstructor<
    Node,
    NodeDef,
    Record<string, never>
  > = function (config) {
    RED.nodes.createNode(this, config);
    this.on('input', (msg, send, done) => {
      send(msg);
      if (done) {
        done();
      }
    });
  };

  RED.nodes.registerType(MyNode.name, MyNode);
};

export = nodeInit;
