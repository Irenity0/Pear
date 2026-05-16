import { footerLinks } from "../constants"

const Footer = () => {
  return (
    <footer>
        <div className="info">
            <p>More ways to shop: Find a Pear Store or other retailer near you. Or call 000800 040 6767.</p>
            <img src="/logo.svg" alt="Pear-logo" />
        </div>

        <hr />
        
        <div className="links">
            <p>Copyright © 2024 Pear Inc. All rights reserved.</p>

             <ul>
                    {footerLinks.map(({label, link }) => (
                        <li key={label}>
                            <a href={link}>{label}</a>
                        </li>
                    ))}
                </ul>
        </div>
    </footer>
  )
}

export default Footer