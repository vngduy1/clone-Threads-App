import UserHeader from "../components/UserHeader";
import UserPost from "../components/UserPost";

const UserPage = () => {
  return (
    <>
      <UserHeader />
      <UserPost
        likes={1200}
        replies={481}
        postImg="/post1.png"
        postTitle="Let's talk about threads."
      />
      <UserPost
        likes={351}
        replies={12}
        postImg="/post2.png"
        postTitle="Nice tutorial"
      />
      <UserPost
        likes={1231}
        replies={441}
        postImg="/post3.png"
        postTitle="I love this guy."
      />
    </>
  );
};

export default UserPage;
