import Button from "../../components/Button";
import InputField from "../../components/ui/InputField";
import LoginLayout from "../../templates/LoginLayout";

const Signup = () => {
  return (
    <LoginLayout>
      <form>
        <InputField name="username" label="Username" />
        <InputField name="email" label="Email" />
        <InputField name="password" label="Password" />
        <InputField name="password2" label="Confirm Password" />
        <Button>Sign up</Button>
      </form>
    </LoginLayout>
  );
};

export default Signup;
