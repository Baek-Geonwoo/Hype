import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'

function Footer() {
    return (
        <footer>
            <div className="footer-container">
                <div className="footer-title">
                    Hype(가제)
                </div>
                
                <div className='footer-content'>
                   <div className="footer-about">
                        <div className="footer-subtitle">About Us</div>
                        <div className="footer-subcontent">
                            지역 상권에 대해 분석한 정보를 확인할 수 있는 사이트입니다.
                        </div>
                    </div>

                    <div className="footer-contact">
                        <div className="footer-subtitle">Contact Us</div>
                        <div className="footer-subcontent">
                            Hype(하이프)<br /><br />
                            Member : 백건우, 서다원, 임지선, 조윤주
                        </div>
                    </div>

                    <div className="footer-git">
                        <div className="footer-subtitle">Github</div>
                        <div className="footer-subcontent">
                            <div className='footer-subicon'>
                                <FontAwesomeIcon icon={faGithub} size="2x"/>
                            </div>
                        </div>
                    </div> 
                </div>
                
                <div className='footer-foot'>
                    © 2022 상권분석사이트(가제) All Rights Reserved.
                </div>

            </div>
        </footer>
    );
  }
  
  export default Footer;