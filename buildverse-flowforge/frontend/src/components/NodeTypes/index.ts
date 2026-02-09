import DefaultNode from './DefaultNode';
import DecisionNode from './DecisionNode';
import StartNode from './StartNode';
import EndNode from './EndNode';

export const nodeTypes = {
  default: DefaultNode,
  decision: DecisionNode,
  start: StartNode,
  end: EndNode,
};
