const calculateAngle = (x1: number, y1: number, x2: number, y2: number) => {
  const dotProduct = x1 * x2 + y1 * y2;
  const crossProduct = x1 * y2 - y1 * x2;
  return Math.atan2(crossProduct, dotProduct);
};

export { calculateAngle };
