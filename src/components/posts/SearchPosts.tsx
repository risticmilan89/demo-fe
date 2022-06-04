import { BiSearch } from "react-icons/bi";

const SearchPosts = () => {
  return (
    <div className="">
      <div className="bg-orange-50 mx-auto max-w-[400px] relative p-2 px-4 shadow-sm mb-4">
        <input
          className="bg-transparent w-[calc(100%-24px)] outline-none border-none"
          type="text"
        />
        <BiSearch
          className="absolute right-4 top-1/2 -translate-y-1/2"
          size={24}
        />
      </div>
    </div>
  );
};

export default SearchPosts;
