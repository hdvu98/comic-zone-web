import React from 'react';

const Footer =(props)=>{
    return(
        <section id="footer">
           <div className="d-flex flex-row justify-content-around align-items-center">            
                <div className="text-center">© 2019 Comic Zone - HCMUS.</div>
                <div className="social-media d-flex flex-row ">

            <a href="#" class="social-buttons__button social-button social-button--facebook" aria-label="Facebook">
                <span class="social-button__inner">
                <i class="fab fa-facebook-f"></i>
                </span>
             </a>
            <a href="#" class="social-buttons__button social-button social-button--google" aria-label="GitHub">
                <span class="social-button__inner">
                <i class="fab fa-google"></i>
                </span>
            </a>
            <a href="#" class="social-buttons__button social-button social-button--twitter" aria-label="twitter">
                <span class="social-button__inner">
                <i class="fab fa-twitter"></i>
                </span>
            </a>
        </div>
                <div className="email">hdvu98@gmail.com</div>
            </div>
        </section>
    );
}

export default Footer;