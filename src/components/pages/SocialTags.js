import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown, faStar } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faInstagram, faYoutube, faVimeo, faPinterest, faTwitter, } from '@fortawesome/free-brands-svg-icons'

const SocialTags = () => {
  return (
 <>
  <section className="footer-social-section bg-secondry">
                <div className="container">
                    <div className="footer-social-content">
                        <ul>
                            <li><a href="#"><FontAwesomeIcon className="text-white" icon={faFacebook} /></a></li>
                            <li><a href="#"><FontAwesomeIcon className="text-white" icon={faTwitter} /></a></li>
                            <li><a href="#"><FontAwesomeIcon className="text-white" icon={faPinterest} /></a></li>
                            <li><a href="#"><FontAwesomeIcon className="text-white" icon={faYoutube} /></a></li>
                            <li><a href="#"><FontAwesomeIcon className="text-white" icon={faVimeo} /></a></li>
                            <li><a href="#"><FontAwesomeIcon className="text-white" icon={faInstagram} /></a></li>
                        </ul>
                    </div>
                </div>
            </section>

 </>

  )
}

export default SocialTags