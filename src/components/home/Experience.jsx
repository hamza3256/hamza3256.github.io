import React from "react";
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
					contentStyle={{ background: 'rgb(33, 64, 243)', color: '#fff' }}
					contentArrowStyle={{ borderRight: '7px solid  rgb(33, 64, 243)' }}
					date="Mar 2022 — Present"
					iconStyle={{ background: 'rgb(33, 64, 243)', color: '#fff' }}
					icon={<WorkIcon />}
				  >
					<h3 className="vertical-timeline-element-title">Software Engineer</h3>
					<h5 className="vertical-timeline-element-subtitle">Eiger Trading<span style={{float: 'right'}}>London, UK</span></h5>
					<p>
                        <li>
						Developed new features and maintain existing codebase
						</li>
						<li>
						Involved in all stages of the product life-cycle, taking ownership of problems and delivering stable and reliable solutions
						</li>
						<li>
						Designed and planned improvements on the existing system architecture to enhance resiliency and availability
						</li>
						<li>
						Encouraged proactive communication and technical conversations between development team and traders and assisting them
						</li>
						<li>
						Trained and assisted junior developers with fixing current issues and implementing new features
						</li>
					</p>
				  </VerticalTimelineElement>
				
				  <VerticalTimelineElement
					className="vertical-timeline-element--work"
					contentStyle={{ background: 'rgb(33, 64, 243)', color: '#fff' }}
					contentArrowStyle={{ borderRight: '7px solid  rgb(33, 64, 243)' }}
					date="Oct 2021 — Jan 2022"
					iconStyle={{ background: 'rgb(33, 64, 243)', color: '#fff' }}
					icon={<WorkIcon />}
				  >
					<h3 className="vertical-timeline-element-title">Junior Software Engineer</h3>
					<h5 className="vertical-timeline-element-subtitle">Wiley Edge<span style={{float: 'right'}}>London, UK</span></h5>
					<p>
						<li>
						Full Stack Java Engineering training for 5 weeks
						</li>
						<li>
						Led and presented a Spring MVC project
						</li>
					</p>
				  </VerticalTimelineElement>
				  
				  <VerticalTimelineElement
					className="vertical-timeline-element--work"
					contentStyle={{ background: 'rgb(33, 64, 243)', color: '#fff' }}
					contentArrowStyle={{ borderRight: '7px solid  rgb(33, 64, 243)' }}
					date="Jun 2021 — Aug 2021"
					iconStyle={{ background: 'rgb(33, 64, 243)', color: '#fff' }}
					icon={<WorkIcon />}
				  >
					<h3 className="vertical-timeline-element-title">Full Stack Developer </h3>
                    <h5 className="vertical-timeline-element-subtitle" >Freelance<span style={{float: 'right'}}>London, UK</span></h5>	
		
					<p>
					<li>Implemented frontend using React and backend using Node.js, express, MongoDB, and mongoose</li>
					<li>Created separate and restricted admin access using JWT, for inventory management</li>
					<li>Implemented access levels to handle orders and customer interaction which sped up the payment process by 70%</li>
					</p>
				  </VerticalTimelineElement>

				  <VerticalTimelineElement
					className="vertical-timeline-element--work"
					contentStyle={{ background: 'rgb(33, 64, 243)', color: '#fff' }}
					contentArrowStyle={{ borderRight: '7px solid  rgb(33, 64, 243)' }}
					date="Aug 2020 — Mar 2021"
					iconStyle={{ background: 'rgb(33, 64, 243)', color: '#fff' }}
					icon={<WorkIcon />}
				  >
					<h3 className="vertical-timeline-element-title">Junior Software Developer </h3>
                    <h5 className="vertical-timeline-element-subtitle" >Global Digital Consultants<span style={{float: 'right'}}>Sahiwal, Pakistan</span></h5>	
		
					<p>
                        <li>
						Maintained and worked on new features using React and Node.js</li>
                        <li>
                        Created user experience to fetch, parse, and format analytical data, and relay it into React components
                        </li>
						<li>
						Worked cross-functionally to convert business needs into technical specifications
                        </li>
						<li>
						Interacted with testing team and business analysts to fix reported issues
						</li>
					</p>
				  </VerticalTimelineElement>
				  
			
				  
				   <VerticalTimelineElement
					className="vertical-timeline-element--education"
					contentStyle={{ background: 'rgb(33, 64, 243)', color: '#fff' }}
					contentArrowStyle={{ borderRight: '7px solid  rgb(33, 64, 243)' }}
					date="Sep 2017 — Aug 2020"
					iconStyle={{ background: 'rgb(33, 64, 243)', color: '#fff' }}
					icon={<SchoolIcon />}
				  >
					<h3 className="vertical-timeline-element-title">BSc (Hons) Computer Science
					</h3><h5 className="vertical-timeline-element-subtitle">Queen Mary University of London</h5>					
					<p>
						<li>
						Grade achieved: First Class Honours; <b>4.0 GPA</b>
						</li>
						<li>
						Awarded<i>Deputy Principal's Award</i>, recognising academic excellence
						</li>
					
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