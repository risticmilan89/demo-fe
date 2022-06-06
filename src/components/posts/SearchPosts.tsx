import { BiSearch } from "react-icons/bi";
import { useSelector } from "react-redux";
import { uiActions, uiSelector } from "../../store/slices/uiSlice";
import { useAppDispatch } from "../../store/store";

const SearchPosts = () => {
  const dispatch = useAppDispatch();
  const { searchValue } = useSelector(uiSelector);

  return (
    <div className="">
      <div className="bg-orange-50 mx-auto max-w-[400px] relative p-2 px-4 shadow-sm mb-4">
        <input
          value={searchValue}
          onChange={(e) => dispatch(uiActions.setSearchValue(e.target.value))}
          className="bg-transparent w-[calc(100%-24px)] outline-none border-none font-semibold"
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
