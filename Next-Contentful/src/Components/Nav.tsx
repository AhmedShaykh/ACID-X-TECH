import Link from "next/link";

const Nav = ({
    children,
}: {
    children: React.ReactNode
}) => {
    return (
        <>
            <header className="bg-zinc-900 p-8">
                <nav className="container">
                    <ul className="flex justify-center item-center gap-6">
                        <li>
                            <Link
                                href="/"
                                className="text-2xl font-bold uppercase text-center"
                            >
                                Home
                            </Link>
                        </li>

                        <li>
                            <Link
                                href="/blog"
                                className="text-2xl font-bold uppercase text-center"
                            >
                                Blog
                            </Link>
                        </li>
                    </ul>
                </nav>
            </header>

            <main className="container p-8">{children}</main>

            <footer className="bg-zinc-900 text-2xl font-bold uppercase text-center px-8 py-8">
                <div className="container">
                    <p>Footer</p>
                </div>
            </footer>
        </>
    )
}

export default Nav;