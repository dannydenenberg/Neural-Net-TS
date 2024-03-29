class Layer {
  nodes: Array<number>;
  highestRandomNodeValue: number = 10;
  activationFunction: (x: number) => number;

  constructor(
    numberOfNodes: number,
    values?: Array<number>,
    activationFunction: (x: number) => number
  ) {
    this.activationFunction = activationFunction;
    this.nodes = [];

    // if they are giving values for the nodes
    if (values) {
      this.nodes = values;
    }

    // otherwise, randomly initialize them
    for (let i = 0; i < numberOfNodes; i++) {
      this.nodes.push(Math.floor(Math.random() * this.highestRandomNodeValue));
    }
  }
}

/*
The layer only has nodes and its activation function.
The weights are initializes and stored in the NeuralNetwork class
*/
