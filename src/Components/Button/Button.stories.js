import Button from "./Button";
import "./Button.css";

export default {
  title: "Form/Button",
  component: Button,
};
export const Success = () => <Button variant="success">success Button</Button>;
export const Danger = () => <Button variant="danger">danger Button</Button>;
