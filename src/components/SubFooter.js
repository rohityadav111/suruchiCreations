import React from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faVideoCamera} from '@fortawesome/free-solid-svg-icons';

 const SubFooter = () => {
    return (
        <>

            {/*   You tube section */}
          
            <section className="youtube py-5">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-xs-12 youtube_content align-self-center">
                            <span className="font-weight-bold font-italic">Find Us On Youtube</span>
                            <h5 className="text-white">Suruchi Creations, One of The Oldest Ladies Apparel Wholesaler in Chandni Chowk, Delhi</h5>
                            <p className="text-white">Suruchi Creations is the copyright of Suruchi Prints which is our main business name. Here we bring the latest and premium designed ladies' clothing to you.</p>

                            <div className="about-btn mt-4">
                                <a href="https://www.youtube.com/channel/UC4MjjX4N-z_Emwx6nMFLCRQ" target="_blank" className="text-white font-weight-bold">
                                    Our Channel <FontAwesomeIcon icon={faVideoCamera}/> </a>
                            </div>
                        </div>
                        <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-xs-12 youtube_video align-self-center">

                            <iframe width="100%" height="315" src="https://www.youtube.com/embed/YcjzXtKwd54" title="YouTube video player"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" ></iframe>
                        </div>
                    </div>
                </div>
            </section>
         
        
        </>
    )
}

export default SubFooter