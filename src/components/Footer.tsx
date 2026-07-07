import { withBase } from '../lib/paths'

export function Footer() {
  return (
    <footer className="footer">
      <p className="footer__tagline">Made with 🐾 for the goodest boys in the house</p>

      <ul className="social-links">
        <li>
          <a
            href="https://www.facebook.com/ShahafKrinitz/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img alt="Facebook" src={withBase('Facebook_logo.png')} />
            Facebook
          </a>
        </li>
        <li>
          <a
            href="https://www.instagram.com/asikrinitz/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img alt="Instagram" src={withBase('Instagram_logo.png')} />
            Instagram
          </a>
        </li>
        <li>
          <a
            href="https://www.linkedin.com/in/asi-krinitz-25351223b/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img alt="LinkedIn" src={withBase('Linkedin_logo.png')} />
            LinkedIn
          </a>
        </li>
      </ul>
    </footer>
  )
}
