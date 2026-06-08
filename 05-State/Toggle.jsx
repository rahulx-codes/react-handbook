import { useState } from "react";

function Toggle() {
  const [isDark, setIsDark] = useState(false);

  return (
    <div>
      <h1>{isDark ? "Dark" : "Light"}</h1>

      <button onClick={() => setIsDark(!isDark)}>Toggle</button>
    </div>
  );
}

export default Toggle;
