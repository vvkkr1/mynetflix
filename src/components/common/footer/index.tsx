import React from 'react';
import { FooterWrapper, ContainerWrapper } from './styles';
import selectIcon from "../icons/selectIcon.svg";

function Footer(){
    return(
        <FooterWrapper>
            <ContainerWrapper>
                <div style={{width:"100%", height:"0.5rem", backgroundColor: "#2D2D2D", bottom: "-0.5rem"}}></div>

                
                <div style={{margin:"20px 28px"}}>
                    <div style={{color:"rgba(255, 255, 255, 0.7)"}}>Question? Call <a style={{color:"rgba(255, 255, 255, 0.7)"}} href="/">000-800-919-1694</a></div>
                </div>

                <div style={{display:"flex"}}>
                    <div style={{color:"rgba(255, 255, 255, 0.7)",padding:"40px 60px"}}>
                        <div style={{padding:"8px 12px"}}>FAQ</div>
                        <div style={{padding:"8px 12px"}}>Investor Relations</div>
                        <div style={{padding:"8px 12px"}}>Privacy</div>
                        <div style={{padding:"8px 12px"}}>Speed Test</div>
                    </div>

                    <div style={{color:"rgba(255, 255, 255, 0.7)",padding:"40px 60px"}}>
                        <div style={{padding:"8px 12px"}}>Help Centre</div>
                        <div style={{padding:"8px 12px"}}>Jobs</div>
                        <div style={{padding:"8px 12px"}}>Cookie Preferences</div>
                        <div style={{padding:"8px 12px"}}>Legal Notices</div>
                    </div>

                    <div style={{color:"rgba(255, 255, 255, 0.7)",padding:"40px 60px"}}>
                        <div style={{padding:"8px 12px"}}>Account</div>
                        <div style={{padding:"8px 12px"}}>Ways to Watch</div>
                        <div style={{padding:"8px 12px"}}>Corporate Information</div>
                        <div style={{padding:"8px 12px"}}>Only on Netflix</div>
                    </div>

                    <div style={{color:"rgba(255, 255, 255, 0.7)",padding:"40px 60px"}}>
                        <div style={{padding:"8px 12px"}}>Media Centre</div>
                        <div style={{padding:"8px 12px"}}>Terms of Use</div>
                        <div style={{padding:"8px 12px"}}>Contact Us</div>
                    </div>
                </div>

                <div className="select-container" style={{position:"relative" , padding:"16px 20px", marginLeft:"50px"}}>
                    <img style={{position:"absolute", top:"1.4rem",left:"2rem"}} src={selectIcon} alt="logo" />
                    <select 
                        name="" 
                        id="" 
                        className="slt" 
                        style = {{ 
                                    padding: ".2rem 1rem .2rem 2.4rem",
                                    width: "124px",
                                    height: "32px",
                                    background: "none",
                                    color: "#FFFFFF",
                                    borderRadius: "0.4rem"
                                }}
                    >
                        <option value="">English</option>
                        <option value="">हिंदी</option>
                    </select>
                </div>

                <div style={{marginLeft:"70px",marginBottom:"20px"}}>
                    <div style={{color:"rgba(255, 255, 255, 0.7)"}}>Netflix India</div>
                </div>
            </ContainerWrapper>
        </FooterWrapper>
    )
}
export default Footer