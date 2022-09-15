import { Figure } from "react-bootstrap";
import { Header } from "./Styled";

export default function Header() {
  return (
    <Header>
      <Figure>
        <Figure.Image
          width={171}
          height={180}
          alt="171x180"
          src="holder.js/171x180"
        />
        <Figure.Caption>
          Nulla vitae elit libero, a pharetra augue mollis interdum.
        </Figure.Caption>
      </Figure>
    </Header>
  );
}
