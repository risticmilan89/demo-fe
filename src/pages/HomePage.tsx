import PostsList from "../components/posts/PostsList";
import MainLayout from "../templates/MainLayout";

const HomePage = () => {
  return (
    <MainLayout>
      <PostsList />
    </MainLayout>
  );
};

export default HomePage;
