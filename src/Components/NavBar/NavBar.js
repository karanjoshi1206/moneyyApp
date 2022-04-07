import React from "react";
import { Link, NavLink } from "react-router-dom";
import { useStateValue } from "../../context/StateProvider";
import "./NavBar.scss";
const NavBar = () => {
	const [{ basket }, dispatch] = useStateValue();

	return (
		<div>
			{/* create a navigation bar */}

			<nav>
				<div className='wrapper'>
					<div className='logo'>
						<a target={"__blank"} href='https://moneyyapp.com/'>
							<img
								src='https://moneyyapp.com/assets/image/logo.png'
								alt='logo'
							/>
						</a>
					</div>
					<div>
						<ul className='menu'>
							<li>
								<NavLink
									style={({ isActive }) =>
										isActive
											? {
													color: "#0070f3",
											  }
											: {}
									}
									to='/'>
									Products
								</NavLink>
							</li>

							<li>
								<NavLink
									style={({ isActive }) =>
										isActive
											? {
													color: "#0070f3",
											  }
											: {}
									}
									to={"/cart"}>
									Cart {basket.length > 0 && <span>({basket.length})</span>}
								</NavLink>
							</li>
						</ul>
					</div>
				</div>
			</nav>
		</div>
	);
};

export default NavBar;
