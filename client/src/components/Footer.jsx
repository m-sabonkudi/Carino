import { Mail, Phone, MapPin } from 'lucide-react'
import { FaXTwitter, FaTiktok, FaYoutube, FaLinkedin, FaGithub } from 'react-icons/fa6'
import { Link } from 'react-router-dom'

const Footer = () => {
  
  return (
    <footer className="bg-background border-t border-border text-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 grid grid-cols-1 md:grid-cols-4 gap-10">
        {/* Company Info */}
        <div>
          <div className="flex-shrink-0 mb-4">
            <Link to="/" className="flex items-center space-x-2 text-2xl font-bold text-primary hover:text-primary/80 transition-colors">
              <div className="bg-black text-white dark:bg-white dark:text-black font-bold w-7 h-7 rounded-md flex items-center justify-center">C</div>
              <span className="text-2xl font-bold">Carino</span>
            </Link>
          </div>
          <p className="text-muted-foreground text-sm">
            Your trusted platform for buying and selling vehicles.
            Secure, fast, and simple.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li><Link to="/" className="hover:text-primary">Home</Link></li>
            <li><Link to="/products" className="hover:text-primary">Browse Vehicles</Link></li>
            <li><Link to="/brands" className="hover:text-primary">Browse by Brands</Link></li>
            <li><Link to="/contact" className="hover:text-primary">Contact Us</Link></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h4 className="text-lg font-semibold mb-4">Contact</h4>
          <ul className="space-y-4 text-sm text-muted-foreground">
            <li className="flex items-start gap-3">
              <Mail className="w-5 h-5 text-primary" />
              <span>you@example.com</span>
            </li>
          </ul>
        </div>

        {/* Social Media */}
        <div>
          <h4 className="text-lg font-semibold mb-4">Our Socials</h4>
          <div className="flex space-x-4">
            <a href="https://www.youtube.com/@onino_io" target="_blank" rel="noopener noreferrer" aria-label="Instagram"
              className="text-muted-foreground hover:text-primary transition-colors duration-200">
              <FaYoutube className="w-5 h-5" />
            </a>
            <a href="https://x.com/onino_io" target="_blank" rel="noopener noreferrer" aria-label="X / Twitter"
              className="text-muted-foreground hover:text-primary transition-colors duration-200">
              <FaXTwitter className="w-5 h-5" />
            </a>
            <a href="https://github.com/m-sabonkudi/Carino" target="_blank" rel="noopener noreferrer" aria-label="GitHub"
              className="text-muted-foreground hover:text-primary transition-colors duration-200">
              <FaGithub className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-border mt-8 py-6 text-center text-sm text-muted-foreground">
        &copy; {new Date().getFullYear()} Pyman
      </div>
    </footer>
  )
}

export default Footer
