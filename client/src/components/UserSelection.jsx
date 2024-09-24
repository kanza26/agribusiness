import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

function UserSelection() {
	const { t } = useTranslation();
	return (
		<div>
			<div className="h-screen w-screen flex flex-col justify-between bg-field-image bg-cover bg-bottom text-white">
				<main className="flex flex-col items-center justify-center flex-grow">
					<h2 className="text-5xl font-bold mb-36 -mt-60">
						{t("who")}
					</h2>
					<div className="space-y-6">
						<Link to="/register?user=farmer" className="py-4">
							<button className="w-96 py-4 font-semibold bg-green-950 text-2xl border-2 border-black rounded-lg hover:bg-green-800 transition">
								{t("farmer")}
							</button>
						</Link>
						<br />
						<Link to="/register?user=buyer">
							<button className="w-96 py-4 font-semibold bg-green-950 text-2xl border-2 border-black rounded-lg hover:bg-green-800 transition">
								{t("buyer")}
							</button>
						</Link>
					</div>
				</main>
			</div>
		</div>
	);
}

export default UserSelection;
