import SearchBar from "./SearchBar";
import Conversations from "./Conversations";
import LogoutIcon from "./LogoutIcon";

const Sidebar = () => {
	return (
		<div className='border-r border-slate-500 p-4 flex flex-col'>
            <div className="w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0">
			<SearchBar />
            <div className='divider px-3'></div>
            <Conversations />
			<LogoutIcon />
            </div>
		</div>
	);
};
export default Sidebar;