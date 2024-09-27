import { Container } from "./styles";
import emailIcon from "../../assets/email-icon.svg";
import phoneIcon from "../../assets/phone-icon.svg";
import { Form } from "../Form/Form";

export function Contact() {
  return (
    <Container id="contact">
      <header>
        <h2>Contact</h2>
      </header>
      <div className="contacts">
        <div>
          <a href="mailto:amirita1103@gmail.com.com">
            <img src={emailIcon} alt="Email" />
          </a>
          <a href="mailto:amirita1103@gmail.com">amirita1103@gmail.com</a>
        </div>
        <div>
          <a href="tel:+14703504873">
            <img src={phoneIcon} alt="Phone No" />
          </a>
          <a href="tel:+14703504873">(+1) 4703504873</a>
        </div>
      </div>
      <Form></Form>
    </Container>
  );
}
