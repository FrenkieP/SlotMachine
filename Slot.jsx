export default function Slot({ val1, val2, val3 }) {
  const isWin = val1 === val2 && val1 === val3;
  const styles = { color: isWin ? "green" : "red" };
  return (
    <div>
      <h1>
        {val1} {val2} {val3}
      </h1>
      {isWin ? (
        <>
          <h2 style={styles}>You win!</h2>
          <h3>Congrats!!!</h3>
        </>
      ) : (
        <h2 style={styles}>You Lose!!!</h2>
      )}
    </div>
  );
}
