const Header = () => {
	return (
		<header className="bg-transparent h-24 flex items-center justify-between">
			<div>logo</div>

			<nav>
				<ul>
					<li>coleção</li>
					<li>sobre</li>
					<li>nova coleção</li>
					<li>mais procurados</li>
				</ul>
			</nav>

			<div>
				<input type="text" />
				<p>icone cart</p>
				<p>icone usuario</p>
			</div>
		</header>
	);
};

export default Header;
