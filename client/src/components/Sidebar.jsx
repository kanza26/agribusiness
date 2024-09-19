import { useState } from "react";
import { LuChevronFirst, LuChevronLast, LuMoreVertical } from "react-icons/lu";

function Sidebar({ children }) {
	const [open, setOpen] = useState(true);
	return (
		<aside className="h-[93vh] w-[14rem]">
			<nav className="h-full flex flex-col bg-[rgb(167,217,167)] border-r shadow-sm">
				<div className="p-4 pb-2 flex justify-between items-center">
					<img
						src="https://img.logoipsum.com/243.svg"
						alt=""
						className={`overflow-hidden transition-all ${
							open ? "w-32" : "w-0"
						}`}
					/>
					<button
						onClick={() => setOpen((prev) => !prev)}
						className="p-1.5 rounded-lg bg-gray-50 hover:bg-gray-100"
					>
						{open ? <LuChevronFirst /> : <LuChevronLast />}
					</button>
				</div>

				<ul className="flex-1 px-3">{children}</ul>

				<div className="border-t flex p-3">
					<img
						src="https://ui-avatars.com/api/?background=c7d2fe&color=3730a3&bold=true"
						alt=""
						className="w-10 h-10 rounded-md"
					/>
					<div
						className={`flex justify-between items-center overflow-hidden transition-all ${
							open ? "w-52 ml-3" : "w-0"
						}`}
					>
						<div className="leading-4">
							<h4 className="font-semibold">Shayan Ali</h4>
							<span className="text-xs text-gray-600">
								abbaszaigham744@gmail.com
							</span>
						</div>
						<LuMoreVertical />
					</div>
				</div>
			</nav>
		</aside>
	);
}

export default Sidebar;
