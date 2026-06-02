function Card({ name, age, skill }) {
  return (
    <div
      style={{
        border: "1px solid black",
        padding: "10px",
        margin: "10px",
      }}
    >
      <h2>Name: {name}</h2>
      <p>Age: {age}</p>
      <p>Skill: {skill}</p>
    </div>
  );
}

export default Card;
