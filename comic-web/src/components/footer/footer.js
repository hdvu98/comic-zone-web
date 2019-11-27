import React from 'react';

const Footer =(props)=>{
    return(
        <section id="footer">
           <div className="d-flex flex-row justify-content-around align-items-center">            
                <div className="text-center">© 2019 Comic Zone - HCMUS.</div>
                <div className="d-flex flex-row">
                    <a href="#" className="social-media facebook"><i class="fab fa-facebook-f"></i></a>
                    <a href="#" className="social-media google"><i class="fab fa-google"></i></a>
                    <a href="#" className="social-media instagram"><i class="fab fa-instagram"></i></a>
                    <a href="#" className="social-media twitter"><i class="fab fa-twitter"></i></a>
                </div>
                <div className="email">hdvu98@gmail.com</div>
            </div>
        </section>
    );
}

export default Footer;