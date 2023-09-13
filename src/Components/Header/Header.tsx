import { FC } from 'react';
import { NavLink } from 'react-router-dom';
import classNames from 'classnames';

const activeClass = classNames(
	'bg-amber-300 rounded px-5 hover:underline rounded-2xl font-medium font-secondary',
);
const CTA_Class = classNames(
	' font-secondary text-2xl font-secondary font-light text-gray-900 backdrop-blur-sm bg-white/50 px-5 rounded-2xl',
);
const inactiveClass = classNames(
	'rounded px-5 font-light hover:underline  hover:bg-amber-300',
);
const Header: FC = () => {
	return (
		<nav
			className={'flex justify-between text-2xl pt-3 px-3 text-gray-600 pb-5 '}>
			<h1 className={'font-primary flex justify-center items-center'}>
				App Name
			</h1>
			<ul
				className={
					'flex gap-5 text-2xl font-secondary font-light text-gray-900 backdrop-blur-sm bg-white/50 px-10 rounded-2xl flex justify-center items-center '
				}>
				<NavLink
					to={'/home'}
					className={({ isActive }) => {
						return isActive ? activeClass : inactiveClass;
					}}>
					Home
				</NavLink>
				<NavLink
					to={'/about'}
					className={({ isActive }) => {
						return isActive ? activeClass : inactiveClass;
					}}>
					About
				</NavLink>
				<NavLink
					to={'/contact'}
					className={({ isActive }) => {
						return isActive ? activeClass : inactiveClass;
					}}>
					Contact
				</NavLink>
			</ul>
			<NavLink
				to={'/login'}
				className={({ isActive }) => {
					return isActive ? activeClass : CTA_Class;
				}}>
				Login
			</NavLink>
		</nav>
	);
};

export default Header;
