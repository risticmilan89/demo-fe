import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { usersApi } from "../../api";
import Button from "../../components/Button";
import EyeButton from "../../components/ui/EyeButton";
import InputField from "../../components/ui/InputField";
import { uiSelector } from "../../store/slices/uiSlice";
import FormLayout from "../../templates/FormLayout";
import MainLayout from "../../templates/MainLayout";
import { LoginUserT } from "../../types";
import spinner from "../../assets/loading.gif";
import { useAppDispatch } from "../../store/store";
import { authActions } from "../../store/slices/authSlice";

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
  const [loading, loadingSet] = useState(false);
  const navigate = useNavigate();
  const [notify, notifySet] = useState<null | string>(null);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (usernameValue) {
      setValue("username", usernameValue);
    }
  }, [setValue]);

  const onSubmit = async (formData: any) => {
    const data = formData as LoginUserT;
    if (loading) return;

    loadingSet(true);
    try {
      const { token, username } = await usersApi.login(data);
      dispatch(authActions.setCredentials({ token, username }));
      loadingSet(true);
      navigate("/");
    } catch {
      loadingSet(false);
      notifySet("Failed to login");
    }
  };

  return (
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

export default LoginPage;
