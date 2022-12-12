import React from "react";

import { Container } from "./styles";

export default function Footer({ onToggleTheme, selectedTheme }) {
  return (
    <Container>
      <span>JStack's Blog. Todos os direitos reservados.</span>
      <button
        onClick={onToggleTheme}
        type="button"
      >
        {selectedTheme === "dark" ? "🌞" : "🌚"}
      </button>
    </Container>
  );
}
