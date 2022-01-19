import styles from "../styles/components/nav.module.scss";

const Nav = () => {
	return (
		<nav className={styles.container}>
			<div className={styles.innerContainer}>
				<div className={styles.logo}>
					<p>
						<a className={styles.logoTitle} href="">
							SUBSPLEASE
						</a>
					</p>
					<p className={styles.logoDescription}>One stop shop for new anime</p>
				</div>
				<div className={styles.itemContainer}>
					<a className={styles.item} href="">
						Schedule
					</a>
					<a className={styles.item} href="">
						Shows
					</a>
					<a className={styles.item} href="">
						Packlist
					</a>
					<a className={styles.item} href="">
						IRC
					</a>
					<a className={styles.item} href="">
						Discord
					</a>
					<a className={styles.item} href="">
						RSS
					</a>
				</div>
			</div>
		</nav>
	);
};

export default Nav;
