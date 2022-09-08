export default function Dashboard() {
	return (
		<div>
			<div className="navbar">
				<div className="pageLogo">
					<img src="../../public/assets/logo.svg" alt="pageLogo" className="pageLogo--img"/>
					GOALSETTLER
				</div>
				<div className="userLevel">
					<div className="userLevel--logo">
						<img className="userLevel--logo--img" src="../../public/assets/star.svg" alt="star" />
					</div>
					<div className="userLevel--xp">
						541 / 1200
					</div>
				</div>
				<div className="userMoney">
					<div className="userMoney--logo">
						<img className="userMoney--logo--img" src="../../public/assets/coin.svg" alt="coin" />
					</div>
					<div className="userMoney--amount">
						2435
					</div>
				</div>
				<div className="rightSide">
					<a className="rightSide--action">
						<img className="rightSide--action--img" src="../../public/assets/User.svg" alt="user" />
					</a>
					<a className="rightSide--action">
						<img className="rightSide--action--img" src="../../public/assets/bell.svg" alt="bell" />
					</a>
					<a className="rightSide--action">
						<img className="rightSide--action--img" src="../../public/assets/signOut.svg" alt="signOut" />
					</a>
				</div>
			</div>
			<div className="playBackground">
				<div className="dashboardInfo">
					s
				</div>
				<div className="pageNav">
					<div className="pageNav--mainLink">
						+ New Task
					</div>
					<div className="pageNav--link">
						Dashboard
					</div>
					<div className="pageNav--link">
						Tasks
					</div>
					<div className="pageNav--link">
						Friends
					</div>
					<div className="pageNav--link">
						Shop
					</div>
				</div>
			</div>
		</div>
	)
}