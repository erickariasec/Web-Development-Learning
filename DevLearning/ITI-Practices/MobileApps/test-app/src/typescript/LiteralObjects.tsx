export const LiteralObjects = () => {
  const person = {
    name: "Erick",
    lastName: "Arias",
    age: 24,
    address: {
      country: "Ecuador",
      state: "Pichincha",
      city: "Quito",
      houseNumber: 123,
    },
  };

  return (
    <>
      <h3>Literal Objects</h3>
      <code>
        <pre>{JSON.stringify(person, null, 2)}</pre>
      </code>
    </>
  );
};
