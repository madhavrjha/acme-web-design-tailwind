import { NavLink } from 'react-router-dom'

type NavLinkRenderProps = {
	isActive: boolean
	isPending: boolean
	isTransitioning: boolean
}

const getNavLinkClassName = ({ isActive }: NavLinkRenderProps) => {
	return isActive ? 'text-flame' : 'transition-colors hover:text-chinese-silver'
}

const Header = () => {
	return (
		<header className='w-full bg-charcoal py-4 sm:py-6 border-b-[3px] border-flame'>
			<div className='container flex flex-col sm:flex-row items-center sm:items-baseline sm:justify-between'>
				<h1 className='text-2xl font-bold text-white text-center'>
					<span className='text-flame'>Acme</span> Web Design
				</h1>
				<nav className='flex items-center justify-center gap-10 mt-2 sm:mt-0 uppercase text-white font-medium text-sm'>
					<NavLink to='/' className={getNavLinkClassName}>
						Home
					</NavLink>
					<NavLink to='/about' className={getNavLinkClassName}>
						About
					</NavLink>
					<NavLink to='/services' className={getNavLinkClassName}>
						Services
					</NavLink>
				</nav>
			</div>
		</header>
	)
}

export default Header
