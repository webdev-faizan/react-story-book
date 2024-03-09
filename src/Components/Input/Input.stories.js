import Input from "./Input";
import "./Input.css";
export default {
  title: "Form/Input",
  component: Input,
};

export const Small = () => <Input size="small" placeholder="Small size" />;
export const Medium = () => <Input size="medium" placeholder="Medium size" />;
export const Large = () => <Input size="large" placeholder="Large size" />;
// Change the display name of the Small story to "Small input"
Small.storyName = "Small input"; // Set the storyName proper
