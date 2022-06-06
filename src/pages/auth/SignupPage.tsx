import Button from "../../components/Button";
import InputField from "../../components/ui/InputField";
import MainLayout from "../../templates/MainLayout";
import { useForm } from "react-hook-form";
import { useState } from "react";
import FormLayout from "../../templates/FormLayout";
import EyeButton from "../../components/ui/EyeButton";
import { usersApi } from "../../api";
import { CreateUserT } from "../../types";
import { useAppDispatch } from "../../store/store";
import { uiActions } from "../../store/slices/uiSlice";
import { useNavigate } from "react-router-dom";
import spinner from "../../assets/loading.gif";

const SignupPage = () => {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();
  const [showPassword, showPasswordSet] = useState(false);
  const passwordFieldType = showPassword ? "text" : "password";
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const [loading, loadingSet] = useState(false);
  const [notify, notifySet] = useState<null | string>(null);

  const onSubmit = async (formData: any) => {
    const data = formData as CreateUserT;
    if (loading) return;

    loadingSet(true);
    try {
      await usersApi.createUser(data);

      loadingSet(true);
      dispatch(uiActions.setUsernameValue(data.username));
      navigate("/login");
    } catch {
      loadingSet(false);
      notifySet("Failed to create a user");
    }
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
        <div className="mt-6">
          <Button>
            {loading ? (
              <img className="h-7 w-7" src={spinner} alt="" />
            ) : (
              <p>Sign in</p>
            )}
          </Button>
        </div>
        {notify && <p>{notify}</p>}
      </FormLayout>
    </MainLayout>
  );
};

export default SignupPage;
