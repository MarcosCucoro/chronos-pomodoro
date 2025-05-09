import "./styles/global.css";
import "./styles/theme.css";

import { Container } from "./components/Container";
import { Logo } from "./components/Logo";
import { Menu } from "./components/Menu";
import { Countdown } from "./components/CountDown";
import { DefaultInput } from "./components/DefaultInput";
import { Cycles } from "./components/Cycles";
import { DefaultButton } from "./components/DefaultButton";
import { PlayCircleIcon } from "lucide-react";
import { Footer } from "./components/Footer";
import { Heading } from "./components/Heading";
import { useState } from "react";

function App() {
  const [numero, setNumero] = useState(0);

  const handleClick = () => {
    setNumero((prev) => prev + 1);
  };

  return (
    <>
      <Heading>Número: {numero}</Heading>
      <button onClick={handleClick}>Aumenta</button>
      <Container>
        <Logo />
      </Container>
      <Container>
        <Menu />
      </Container>
      <Container>
        <Countdown />
      </Container>
      <Container>
        <form action="" className="form">
          <div className="formRow">
            <DefaultInput
              labelText="Task"
              id="meuInput"
              type="text"
              placeholder="Digite aqui"
            />
          </div>
          <div className="formRow">
            <p>Lorem ipsum dolor sit amet.</p>
          </div>
          <div className="formRow">
            <Cycles />
          </div>
          <div className="formRow">
            <DefaultButton icon={<PlayCircleIcon />} color="green" />
          </div>
        </form>
      </Container>
      <Container>
        <Footer />
      </Container>
    </>
  );
}

export { App };
