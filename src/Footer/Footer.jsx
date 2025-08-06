
import { Github, Linkedin, Mail, ExternalLink } from 'lucide-react';
import LocationIcon from '../assets/location.webp'
import './Footer.css'

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white py-12 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div className="space-y-4">
            <h3 className="text-xl font-bold">Harsha Balineni</h3>
            <p className='Web'>
               Web-Developer.
            </p>
          </div>

          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Quick Links</h4>
            <nav className="flex flex-col space-y-2">
              <a href="#about" className="text-gray-400 hover:text-white transition-colors">
                About
              </a>
              <a href="#projects" className="text-gray-400 hover:text-white transition-colors">
                Projects
              </a>
              <a href="#experience" className="text-gray-400 hover:text-white transition-colors">
                Experience
              </a>
              <a href="#contact" className="text-gray-400 hover:text-white transition-colors">
                Contact
              </a>
            </nav>
          </div>

          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Get In Touch</h4>
            <div className="space-y-2">
              <a 
                href="https://mail.google.com/mail/u/0/" 
                className="flex items-center space-x-2 text-gray-400 hover:text-white transition-colors"
              >
                <Mail size={16} />
                <span>Tabamazon@gmail.com</span>
              </a>
              <p style={{color:'lightblue', fontSize:'16px', marginLeft:'40px', marginTop:'-10px'}}>
                <img src={LocationIcon} alt='' style={{
                  height:'30px',
                  width: '30px',
                  position: 'relative',
                  top:'30px',
                  left:'-50px',
                  marginLeft:'10px'
                }}
                 />
                Hyderabad, Madhapur</p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
         
          <div className="flex space-x-6">
            <a 
              href="https://github.com/Balineni789" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors"
              aria-label="GitHub"
            >
              <Github size={27} />
            </a>
            <a 
              href="https://github.com/Balineni789" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin size={26} />
            </a>
            <a 
              href="https://mail.google.com/mail/u/0/"
              className="text-gray-400 hover:text-white transition-colors"
              aria-label="Email"
            >
              <Mail size={26} />
            </a>
          </div>

          <div className="text-gray-400 text-xl">
            © {currentYear} Balineni Harsha. All rights reserved.
          </div>
        </div>

        <div className="text-center mt-8">
          <button 
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="inline-flex items-center space-x-1 text-gray-400 hover:text-white transition-colors text-sm"
          >
            <span style={{fontSize:'17px', fontWeight:'bold'}}>Back to top</span>
            <ExternalLink size={17} className="rotate-[-90deg]" />
          </button>
        </div>
      </div>
    </footer>
  );
}