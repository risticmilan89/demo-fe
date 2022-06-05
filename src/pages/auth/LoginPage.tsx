import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useSelector } from "react-redux";
import Button from "../../components/Button";
import EyeButton from "../../components/ui/EyeButton";
import InputField from "../../components/ui/InputField";
import { uiSelector } from "../../store/slices/uiSlice";
import FormLayout from "../../templates/FormLayout";
import MainLayout from "../../templates/MainLayout";

const LoginPage = () => {
  const {
    handleSubmit,
    register,
    formState: { errors },
    setValue,
  } = useForm();
  const [showPassword, showPasswordSet] = useState(false);
  const passwordFieldType = showPassword ? "text" : "password";
  const { usernameValue } = useSelector(uiSelector);

  useEffect(() => {
    if (usernameValue) {
      setValue("username", usernameValue);
    }
  }, [setValue]);

  const onSubmit = (formData: any) => {
    console.log({ formData });
  };

  return (
    <div>
      <MainLayout>
        <FormLayout onSubmit={handleSubmit(onSubmit)} title="Login">
          <InputField register={register} name="username" label="Username" />

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
          <div className="grid mt-6">
            <Button>Login</Button>
          </div>
        </FormLayout>
      </MainLayout>
    </div>
  );
};

export default LoginPage;
