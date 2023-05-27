export const BasicTypes = () => {

  const myName: string = 'Erick';
  const height: number = 172;
  const status: boolean = true;
  const hobbies: string[] = ["Music", "Reading", "Sports", "Meditation"]

  return (
    <>
      <h3>Basic Types</h3>
      <p>
        {myName}, {height}cm, {(status) ? "Active" : "Inactive"}
        <br />
        My Hobbies: {hobbies.join(", ")}
      </p>
    </>
  );
}
