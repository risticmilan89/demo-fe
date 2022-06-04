import Button from "../../components/Button";
import InputField from "../../components/ui/InputField";
import MainLayout from "../../templates/MainLayout";
import { useForm } from "react-hook-form";

import { useState } from "react";
import FormLayout from "../../templates/FormLayout";
import EyeButton from "../../components/ui/EyeButton";

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
      <FormLayout title="Sign up" onSubmit={handleSubmit(onSubmit)}>
        <InputField register={register} name="username" label="Username" />
        <InputField
          register={register}
          type="email"
          name="email"
          label="Email"
        />
        <div className="flex relative">
          <InputField
            register={register}
            type={passwordFieldType}
            name="password"
            label="Password"
          />
          <EyeButton
            show={showPassword}
            onClick={() => showPasswordSet((current) => !current)}
          />
        </div>

        <InputField
          register={register}
          type={passwordFieldType}
          name="password2"
          label="Confirm Password"
        />

        <div className="grid mt-6">
          <Button>Sign up</Button>
        </div>
      </FormLayout>
    </MainLayout>
  );
};

export default SignupPage;
