const ProfileTable = () => {
	return (
		<div className="lg:col-span-3">
			<div className="flex justify-center">
				<div className="w-full max-w-2xl">
					<div className="overflow-x-auto">
						<table className="w-full border-collapse">
							<caption className="sr-only">shunseiのプロフィール</caption>
							<tbody>
								<tr className="border-b border-gray-200">
									<th className="text-left py-2 pr-6 font-semibold text-gray-800 whitespace-nowrap">
										名前
									</th>
									<td className="py-2 text-gray-900 font-medium whitespace-nowrap">
										木村俊星（キムラ シュンセイ）
									</td>
								</tr>
								<tr className="border-b border-gray-200">
									<th className="text-left py-2 pr-6 font-semibold text-gray-800 whitespace-nowrap">
										学校
									</th>
									<td className="py-2 text-gray-900 font-medium whitespace-nowrap">
										京都工芸繊維大学大学院 情報工学専攻
									</td>
								</tr>
								<tr className="border-b border-gray-200">
									<th className="text-left py-2 pr-6 font-semibold text-gray-800 whitespace-nowrap">
										学年
									</th>
									<td className="py-2 text-gray-900 font-medium whitespace-nowrap">
										博士前期課程2年
									</td>
								</tr>
								<tr className="border-b border-gray-200">
									<th className="text-left py-2 pr-6 font-semibold text-gray-800 whitespace-nowrap">
										研究室
									</th>
									<td className="py-2 text-gray-900 font-medium whitespace-nowrap">
										<a
											href="https://vega.is.kit.ac.jp/"
											target="_blank"
											rel="noopener noreferrer"
											className="text-blue-600 hover:text-blue-800 underline"
										>
											情報知能システム研究室
										</a>
									</td>
								</tr>
								<tr className="border-b border-gray-200">
									<th className="text-left py-2 pr-6 font-semibold text-gray-800 whitespace-nowrap">
										研究テーマ
									</th>
									<td className="py-2 text-gray-900 font-medium whitespace-nowrap">
										数理最適化を用いた生産計画の自動作成
									</td>
								</tr>
								<tr className="border-b border-gray-200">
									<th className="text-left py-2 pr-6 font-semibold text-gray-800 whitespace-nowrap">
										趣味
									</th>
									<td className="py-2 text-gray-900 font-medium whitespace-nowrap">
										もの創りを通した課題解決・競技プログラミング・読書 etc.
									</td>
								</tr>
								<tr className="border-b border-gray-200">
									<th className="text-left py-2 pr-6 font-semibold text-gray-800 whitespace-nowrap">
										興味・関心
									</th>
									<td className="py-2 text-gray-900 font-medium whitespace-nowrap">
										数理最適化・バックエンド・クラウドインフラ etc.
									</td>
								</tr>
								<tr className="border-b border-gray-200">
									<th className="text-left py-2 pr-6 font-semibold text-gray-800 whitespace-nowrap">
										所属
									</th>
									<td className="py-2 text-gray-900 font-medium whitespace-nowrap">
										<a
											href="https://www.aquatan.studio/"
											target="_blank"
											rel="noopener noreferrer"
											className="text-blue-600 hover:text-blue-800 underline"
										>
											あくあたん工房
										</a>
										・
										<a
											href="https://www.kitcc.org/"
											target="_blank"
											rel="noopener noreferrer"
											className="text-blue-600 hover:text-blue-800 underline"
										>
											コンピュータ部
										</a>
									</td>
								</tr>
							</tbody>
						</table>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ProfileTable;
