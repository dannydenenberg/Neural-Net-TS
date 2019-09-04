class ActivationFunction {
  static sigmoid(x: number): number {
    return 1 / (1 + Math.pow(Math.E, -x));
  }
}
