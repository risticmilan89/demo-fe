import Button from "../../components/Button";
import InputField from "../../components/ui/InputField";
import MainLayout from "../../templates/MainLayout";
import { useForm } from "react-hook-form";

import { useState } from "react";

const SignupPage = () => {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();
  const [showPassword, showPasswordSet] = useState(false);

  const passwordFieldType = showPassword ? "text" : "password";

  const onSubmit = (formData: any) => {
    console.log({ formData });
  };

  return (
    <MainLayout>
      <form onSubmit={handleSubmit(onSubmit)}>
        <InputField register={register} name="username" label="Username" />
        <InputField
          register={register}
          type="email"
          name="email"
          label="Email"
        />
        <div>
          <InputField
            register={register}
            type={passwordFieldType}
            name="password"
            label="Password"
          />
          <button onClick={() => showPasswordSet((current) => !current)}>
            show password
          </button>
        </div>

        <InputField
          register={register}
          type={passwordFieldType}
          name="password2"
          label="Confirm Password"
        />
        <Button>Sign up</Button>
      </form>
    </MainLayout>
  );
};

export default SignupPage;