export const Functions = () => {
  const sumar = (num1: number, num2: number): number => {
    return num1 + num2;
  };

  const restar = (num1: number, num2: number): number => {
    return num1 - num2;
  };

  return (
    <>
      <h3>Functions</h3>
      <p>The result of the sum is: {sumar(10, 5)}</p>
      <p>The result of the rest is: {restar(10, 6)}</p>
    </>
  );
};
