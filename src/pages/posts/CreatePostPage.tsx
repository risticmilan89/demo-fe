import MainLayout from "../../templates/MainLayout";
import { FieldValues, useForm } from "react-hook-form";
import Button from "../../components/Button";
import { useSelector } from "react-redux";
import { authActions, authSelector } from "../../store/slices/authSlice";
import { useState } from "react";
import { postsApi } from "../../api";
import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "../../store/store";

const CreatePostPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [loading, loadingSet] = useState(false);
  const [notify, notifySet] = useState("");
  const { username, accessToken } = useSelector(authSelector);
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const createPost = async (formData: FieldValues) => {
    if (loading) return;

    const title: string = formData.title;
    const body: string = formData.body;

    const newPost = {
      title,
      body,
      username,
    };

    loadingSet(true);
    try {
      await postsApi.createPost(newPost, accessToken);
      loadingSet(true);
      // dispatch(uiActions.setUsernameValue(data.username));
      navigate("/");
    } catch (error: any) {
      if (error?.response.status === 401) {
        navigate("/login");
        dispatch(authActions.resetCredentials());
      }

      loadingSet(false);
      notifySet("Failed to save a post");
    }
  };

  return (
    <MainLayout>
      <form className="flex flex-col gap-4" onSubmit={handleSubmit(createPost)}>
        <label
          htmlFor="title"
          className="text-3xl font-semibold  text-gray-500"
        >
          Title
        </label>
        <input
          className="bg-slate-200 p-4 py-2 text-2xl"
          type="text"
          id="title"
          {...register("title")}
        />

        <label htmlFor="body">Post Body</label>
        <textarea
          className="bg-slate-200 p-4 py-2"
          cols={30}
          rows={10}
          {...register("body")}
        ></textarea>

        <div className="flex items-center justify-between gap-4">
          <div className="w-72">
            <Button>Save</Button>
          </div>
          {notify && <p>{notify}</p>}
        </div>
      </form>
    </MainLayout>
  );
};

export default CreatePostPage;
