import MainLayout from "../templates/MainLayout";
import PostsDisplay from "../components/posts/PostsDisplay";

const HomePage = () => {
  return (
    <MainLayout>
      <PostsDisplay />
    </MainLayout>
  );
};

export default HomePage;
