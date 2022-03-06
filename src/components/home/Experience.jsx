import React, { useState, useEffect, useCallback } from "react";
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import './../../style/style.min.css';
import SchoolIcon from '@material-ui/icons/School';
import StarIcon from '@material-ui/icons/Star';
import WorkIcon from '@material-ui/icons/Work';
import Container from "react-bootstrap/Container";
import Jumbotron from "react-bootstrap/Jumbotron";

const Experience = () => {
 return (
	 <Jumbotron fluid id="experience" className="bg-light m-0">
		<Container className="p-7">
			 <VerticalTimeline>
				
				  <VerticalTimelineElement
					className="vertical-timeline-element--work"
					contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
					contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
					date="Oct 2021 — Nov 2021"
					iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
					icon={<WorkIcon />}
				  >
					<h3 className="vertical-timeline-element-title">Software Engineer</h3>
					<h5 className="vertical-timeline-element-subtitle">MThree <span style={{float: 'right'}}>London, UK</span></h5>
					<p>
                        Underwent six‑weeks training in Full Stack Engineering (Java).
					</p>
				  </VerticalTimelineElement>
				  
				  <VerticalTimelineElement
					className="vertical-timeline-element--work"
					contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
					contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
					date="Jun 2021 — Aug 2021"
					iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
					icon={<WorkIcon />}
				  >
					<h3 className="vertical-timeline-element-title"> Software Engineer </h3>
                    <h5 className="vertical-timeline-element-subtitle" >Freelance<span style={{float: 'right'}}>London, UK</span></h5>	
		
					<p>
					<li>Implemented frontend using React and backend using Node.js, express, MongoDB, and mongoose</li>
					<li>Created separate and restricted admin access using JWT, for inventory management</li>
					<li>Implemented different access levels to handle orders and customer interaction which sped up the payment process by 70%</li>
					</p>
				  </VerticalTimelineElement>

				  <VerticalTimelineElement
					className="vertical-timeline-element--work"
					contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
					contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
					date="Aug 2020 — Mar 2021"
					iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
					icon={<WorkIcon />}
				  >
					<h3 className="vertical-timeline-element-title">Junior Software Developer </h3>
                    <h5 className="vertical-timeline-element-subtitle" >Global Digital Consultants<span style={{float: 'right'}}>Sahiwal, Pakistan</span></h5>	
		
					<p>
                        <li>
						Worked on a mix of maintenance and enhancements using React and Node.js on web applications</li>
                        <li>
                        Created the user experience that fetched, parsed, and formatted analytic data, and relayed it into React components
                        </li>
						<li>
						Worked cross-functionally to convert business needs into technical specifications
                        </li>
						<li>
						Interacted with testing team and business analysts to fix issues that were reported
						</li>
					</p>
				  </VerticalTimelineElement>
				  
			
				  
				   <VerticalTimelineElement
					className="vertical-timeline-element--education"
					contentStyle={{ background: 'rgb(0,0,128)', color: '#fff' }}
					contentArrowStyle={{ borderRight: '7px solid  rgb(0,0,128)' }}
					date="Sep 2017 — Aug 2020"
					iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
					icon={<SchoolIcon />}
				  >
					<h3 className="vertical-timeline-element-title">BSc Computer Science
					</h3><h5 className="vertical-timeline-element-subtitle">Queen Mary University of London</h5>					
					<p>
                    Grade achieved: First Class Honours
					</p>
				  </VerticalTimelineElement>
				  
				  				  
		
				  
				  
				  
				  <VerticalTimelineElement
					iconStyle={{ background: 'rgb(16, 204, 82)', color: '#fff' }}
					icon={<StarIcon />}
				  />
			</VerticalTimeline>
		</Container>
	</Jumbotron>

)}

export default Experience;