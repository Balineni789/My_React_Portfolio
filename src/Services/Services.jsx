
import React from 'react'
import './Services.css'
import Theme from '../assets/Theme.svg'



const Services = () => {
  const toggleReadMore = (event) => {
    event.preventDefault();
    event.stopPropagation();
    
    if (event.target.tagName !== 'BUTTON') {
      return;
    }
    
    const button = event.target;
    const card = button.closest('.service-card');
    const details = card.querySelector('.service-details');
    const isExpanded = details.classList.contains('expanded');
    
    if (isExpanded) {
      details.classList.remove('expanded');
      button.textContent = 'Read More';
      button.classList.remove('expanded');
      
      setTimeout(() => {
        card.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }, 100);
    } else {
      details.classList.add('expanded');
      button.textContent = 'Read Less';
      button.classList.add('expanded');
      
      setTimeout(() => {
        const cardRect = card.getBoundingClientRect();
        const viewportHeight = window.innerHeight;
        
        if (cardRect.bottom > viewportHeight) {
          window.scrollBy({
            top: cardRect.bottom - viewportHeight + 50,
            behavior: 'smooth'
          });
        }
      }, 300);
    }
  };

  return (
    <div id='services' className='services'>
       <div className="services-title">
         <h1>My Services</h1>
         <img src = {Theme} alt='' className='Theme'/>
       </div>
              
       <div className="services-container">
        <div className="service-card">
            <div className="service-number">01</div>
            <h3 className="service-title">Web Development</h3>
            <p className="service-preview">I create modern, responsive websites using cutting-edge technologies and best practices for optimal user experience and performance.</p>
            
            <div className="service-details">
                <h4>What I Offer:</h4>
                <ul>
                    <li>Responsive Web Design & Development</li>
                    <li>Single Page Applications (SPA)</li>
                    <li>E-commerce Solutions & Payment Integration</li>
                    <li>Progressive Web Apps (PWA)</li>
                    <li>RESTful API Integration & Development</li>
                    <li>Database Design & Management</li>
                </ul>
                
                <h4>My Development Process:</h4>
                <p>I start with understanding your business needs and target audience, then create detailed wireframes and prototypes. Development follows modern coding standards with regular testing, optimization, and client feedback integration throughout the process.</p>
                
                <h4>Technologies I Use:</h4>
                <div className="technologies">
                    <span className="tech-tag">React</span>
                    <span className="tech-tag">JavaScript</span>
                    <span className="tech-tag">HTML5</span>
                    <span className="tech-tag">CSS3</span>
                    <span className="tech-tag">Node.js</span>
                    <span className="tech-tag">MongoDB</span>
                </div>
            </div>
            
            <button className="read-more-btn" onClick={toggleReadMore}>Read More</button>
        </div>

        <div className="service-card">
            <div className="service-number">02</div>
            <h3 className="service-title">Frontend Development</h3>
            <p className="service-preview">Specializing in creating beautiful, interactive user interfaces that engage users and drive conversions with modern design principles.</p>
            
            <div className="service-details">
                <h4>Frontend Expertise:</h4>
                <ul>
                    <li>Modern JavaScript (ES6+) & TypeScript</li>
                    <li>React.js with Hooks & Context API</li>
                    <li>State Management (Redux, Zustand)</li>
                    <li>CSS3 Animations & Transitions</li>
                    <li>Mobile-First Responsive Design</li>
                    <li>Performance Optimization & SEO</li>
                </ul>
                
                <h4>Design Philosophy:</h4>
                <p>I believe in creating interfaces that are not just visually appealing but also intuitive, accessible, and performance-focused. Every design decision is made with user experience and conversion optimization in mind.</p>
                
                <h4>Tools & Frameworks:</h4>
                <div className="technologies">
                    <span className="tech-tag">React</span>
                    <span className="tech-tag">Vue.js</span>
                    <span className="tech-tag">Tailwind CSS</span>
                    <span className="tech-tag">SASS</span>
                    <span className="tech-tag">Bootstrap</span>
                    <span className="tech-tag">Figma</span>
                </div>
            </div>
            
            <button className="read-more-btn" onClick={toggleReadMore}>Read More</button>
        </div>

        <div className="service-card">
            <div className="service-number">03</div>
            <h3 className="service-title">UI/UX Design</h3>
            <p className="service-preview">Creating user-centered designs that combine aesthetics with functionality for exceptional digital experiences and user satisfaction.</p>
            
            <div className="service-details">
                <h4>Design Services:</h4>
                <ul>
                    <li>User Research & Behavior Analysis</li>
                    <li>Wireframing & Interactive Prototyping</li>
                    <li>Visual Design & Brand Integration</li>
                    <li>Usability Testing & A/B Testing</li>
                    <li>Design System & Style Guide Creation</li>
                    <li>Brand Identity & Logo Design</li>
                </ul>
                
                <h4>My Design Approach:</h4>
                <p>I start with comprehensive user research to understand your audience, then create designs that solve real problems while maintaining visual appeal, brand consistency, and measurable business results.</p>
                
                <h4>Design Tools:</h4>
                <div className="technologies">
                    <span className="tech-tag">Figma</span>
                    <span className="tech-tag">Adobe XD</span>
                    <span className="tech-tag">Sketch</span>
                    <span className="tech-tag">Photoshop</span>
                    <span className="tech-tag">Illustrator</span>
                    <span className="tech-tag">InVision</span>
                </div>
            </div>
            
            <button className="read-more-btn" onClick={toggleReadMore}>Read More</button>
        </div>

        <div className="service-card">
            <div className="service-number">04</div>
            <h3 className="service-title">Content Writing</h3>
            <p className="service-preview">Crafting compelling, SEO-optimized content that tells your brand story and engages your target audience for maximum impact.</p>
            
            <div className="service-details">
                <h4>Content Services:</h4>
                <ul>
                    <li>Website Copy & Landing Page Content</li>
                    <li>Blog Posts & Article Writing</li>
                    <li>Technical Documentation & Guides</li>
                    <li>Social Media Content & Captions</li>
                    <li>SEO Content Strategy & Implementation</li>
                    <li>Email Marketing & Newsletter Content</li>
                </ul>
                
                <h4>Writing Style & Strategy:</h4>
                <p>I focus on clear, concise communication that resonates with your target audience while maintaining consistent brand voice, achieving business goals, and driving measurable engagement and conversions.</p>
                
                <h4>Content Specializations:</h4>
                <div className="technologies">
                    <span className="tech-tag">Web Copy</span>
                    <span className="tech-tag">Blog Writing</span>
                    <span className="tech-tag">Technical Docs</span>
                    <span className="tech-tag">Social Media</span>
                    <span className="tech-tag">Email Marketing</span>
                    <span className="tech-tag">SEO Content</span>
                </div>
            </div>
            
            <button className="read-more-btn" onClick={toggleReadMore}>Read More</button>
        </div>

        <div className="service-card">
            <div className="service-number">05</div>
            <h3 className="service-title">App Development</h3>
            <p className="service-preview">Building cross-platform mobile applications that deliver native performance and exceptional user experiences across all devices.</p>
            
            <div className="service-details">
                <h4>App Development Services:</h4>
                <ul>
                    <li>React Native Cross-Platform Apps</li>
                    <li>Progressive Web Apps (PWA)</li>
                    <li>Hybrid App Development & Deployment</li>
                    <li>App Store Optimization (ASO)</li>
                    <li>App Maintenance & Regular Updates</li>
                    <li>Backend Integration & Cloud Services</li>
                </ul>
                
                <h4>Development Process:</h4>
                <p>From initial concept to successful deployment, I handle the entire app development lifecycle with focus on performance optimization, security implementation, user satisfaction, and scalable architecture design.</p>
                
                <h4>Mobile Technologies:</h4>
                <div className="technologies">
                    <span className="tech-tag">React Native</span>
                    <span className="tech-tag">Flutter</span>
                    <span className="tech-tag">Ionic</span>
                    <span className="tech-tag">Firebase</span>
                    <span className="tech-tag">MongoDB</span>
                    <span className="tech-tag">AWS</span>
                </div>
            </div>
            
            <button className="read-more-btn" onClick={toggleReadMore}>Read More</button>
        </div>

        <div className="service-card">
            <div className="service-number">06</div>
            <h3 className="service-title">Digital Marketing</h3>
            <p className="service-preview">Comprehensive digital marketing strategies to boost your online presence and drive sustainable business growth and revenue.</p>
            
            <div className="service-details">
                <h4>Marketing Services:</h4>
                <ul>
                    <li>Search Engine Optimization (SEO)</li>
                    <li>Social Media Marketing & Management</li>
                    <li>Content Marketing & Strategy</li>
                    <li>Email Marketing & Automation</li>
                    <li>Analytics, Reporting & Insights</li>
                    <li>Conversion Rate Optimization (CRO)</li>
                </ul>
                
                <h4>Marketing Strategy:</h4>
                <p>I create data-driven marketing campaigns that target the right audience with the right message at the optimal time, ensuring maximum ROI, sustainable growth, and measurable business results.</p>
                
                <h4>Platforms & Tools:</h4>
                <div className="technologies">
                    <span className="tech-tag">Google Ads</span>
                    <span className="tech-tag">Facebook Ads</span>
                    <span className="tech-tag">SEO Tools</span>
                    <span className="tech-tag">Analytics</span>
                    <span className="tech-tag">Email Marketing</span>
                    <span className="tech-tag">Social Media</span>
                </div>
            </div>
            
            <button className="read-more-btn" onClick={toggleReadMore}>Read More</button>
        </div>
       </div>
    </div>
  )
}

export default Services
