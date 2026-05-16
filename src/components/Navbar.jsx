import { navlinks } from "../constants"

const Navbar = () => {
    return (
        <header>
            <nav>
                <img src="/logo.svg" alt="Pear Logo" />


                <ul>
                    {
                        navlinks.map((item) => (
                            <li key={item.label}>
                                <a href={item.label.toLowerCase()}>{item.label}</a>
                            </li>
                        ))}
                </ul>

                <div className="flex-center gap-3">
                    <button>
                        <img src="/search.svg" alt="Search" />
                    </button>
                    <button>
                        <img src="/cart.svg" alt="Shopping Cart" />
                    </button>
                </div>
            </nav>
        </header>
    )
}

export default Navbar