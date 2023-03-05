import React from 'react'
import "./Footer.css";

export const Footer = () => {
    return (
        <>
        <div className="">

            <footer className="text-center text-white" >
                
                <div className="container pt-4">
                    
                    <section className="mb-4">
                       
                        <a
                            className="btn btn-link btn-floating btn-lg text-dark m-1"
                            href="#!"
                            role="button"
                            data-mdb-ripple-color="dark"
                        ><i class="bi bi-facebook"></i>
                        </a>

                       
                        <a
                            className="btn btn-link btn-floating btn-lg text-dark m-1"
                            href="#!"
                            role="button"
                            data-mdb-ripple-color="dark"
                        ><i class="bi bi-twitter"></i>
                        </a>

                        
                        <a
                            className="btn btn-link btn-floating btn-lg text-dark m-1"
                            href="#!"
                            role="button"
                            data-mdb-ripple-color="dark"
                        ><i class="bi bi-google"></i>
                        </a>

                       
                        <a
                            className="btn btn-link btn-floating btn-lg text-dark m-1"
                            href="#!"
                            role="button"
                            data-mdb-ripple-color="dark"
                        ><i class="bi bi-instagram"></i>
                        </a>

                        <a
                            className="btn btn-link btn-floating btn-lg text-dark m-1"
                            href="#!"
                            role="button"
                            data-mdb-ripple-color="dark"
                        ><i class="bi bi-youtube"></i>
                        </a>
                    </section>
                    
                </div>
               

                
                <div className="text-center text-dark p-3" >
                    © 2020 Copyright
                    
                </div>
               
            </footer>

        </div>
        </>
    );
};

export default Footer;
