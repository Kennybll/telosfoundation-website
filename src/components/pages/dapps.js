import React, {Component} from 'react';
import {Grid, Row, Col, Button} from 'react-bootstrap';
import ScrollAnimation from 'react-animate-on-scroll';
import Slider from 'react-slick';
import {Helmet} from 'react-helmet';

import {withRouter} from 'react-router-dom';
import {connect} from 'react-redux';
import {selectLanguage} from '../../actions';

import dapps_currency from '../../img/dapps/currency_and_commerce.jpg';
import dapps_gig from '../../img/dapps/gig_economy.jpg';
import dapps_records from '../../img/dapps/records_and_info.jpg';

import decentralized from '../../img/dapps/decentralized_LARGE.png';
import compatibility from '../../img/dapps/compatibility.png';
import powerful from '../../img/dapps/powerful.png';
import proprietary from '../../img/dapps/proprietary.png';
import secure from '../../img/dapps/secure.png';

import arrow_next from '../../img/dapps/arrow_next_white.png';
import arrow_prev from '../../img/dapps/arrow_prev_white.png';

import '../../styles/dapps.css';

class DAppsPage extends Component {
	componentDidMount(){
		window.scrollTo(0, 0);

		if(this.props.match.params.language){
			this.props.selectLanguage(this.props.match.params.language);
		}
	}

	render(){
		const {dapps_page} = this.props;
		return (
			<div className='dapps'>
				<Helmet>
					<title>Telos Dapps Development</title>
				</Helmet>
				<DAppsIntro intro={dapps_page.intro} />
				<DAppsSlider slides={dapps_page.slides} />
				<DAppContent dapp_sections={dapps_page.dapp_sections} />
			</div>
		);
	}
}

const DAppsIntro = ({intro}) => {
	return (
		<section id='dapps_intro'>
			<Grid>
				<Row>
					<Col md={8} mdOffset={2}>
						<ScrollAnimation
							animateOnce
							animateIn='fadeIn'
							duration={0.5}
						>
							<div className='text-center'>
								<h1>{intro.heading}</h1>
								<div className='intro_content'>
									{intro.intro_content.map((par, i) => {
										return <p key={i} dangerouslySetInnerHTML={{__html: par}} />;
									})}
								</div>
							</div>
						</ScrollAnimation>
					</Col>
					<Col md={10} mdOffset={1}>
						<div className='intro_buttons'>
							<ScrollAnimation
								animateOnce
								animateIn='fadeIn'
								duration={0.5}
								delay={125}
							>
								<div className='button_container'>
									<Button
										bsSize='large'
										bsStyle='primary'
										disabled
									>
										{intro.tutorials_button}
									</Button>
									<p>{intro.tutorials_description}</p>
									<small>{intro.coming_soon}</small>
								</div>
							</ScrollAnimation>
							<ScrollAnimation
								animateOnce
								animateIn='fadeIn'
								duration={0.5}
								delay={250}
							>
								<div className='button_container'>
									<Button
										bsSize='large'
										bsStyle='primary'
										disabled
									>
										{intro.smart_contracts_button}
									</Button>
									<p>{intro.smart_contracts_description}</p>
									<small>{intro.coming_soon}</small>
								</div>
							</ScrollAnimation>
						</div>
					</Col>
				</Row>
			</Grid>
		</section>
	);
};

class DAppsSlider extends Component {

	constructor(props){
		super(props);

		this.handleNext = this.handleNext.bind(this);
		this.handlePrevious = this.handlePrevious.bind(this);
	}

	handleNext(){
		this.slider.slickNext();
	}

	handlePrevious(){
		this.slider.slickPrev();
	}

	render(){
		const {slides} = this.props;

		const dappsSlides = [
			{
				img: dapps_gig,
				heading: slides.gigs.heading,
				paragraphs: slides.gigs.content
			},
			{
				img: dapps_currency,
				heading: slides.currency.heading,
				paragraphs: slides.currency.content
			},
			{
				img: dapps_records,
				heading: slides.records.heading,
				paragraphs: slides.records.content
			}
		];

		const settings = {
			dots: false,
			infinite: true,
			speed: 500,
			slidesToShow: 1,
			slidesToScroll: 1,
			adaptiveHeight: true,
			autoplay: true,
			autoplaySpeed: 10000
		};

		const nextStyle = {
			backgroundImage: `url(${arrow_next})`
		};

		const prevStyle = {
			backgroundImage: `url(${arrow_prev})`
		};

		return (
			<section id='dapps_slider'>
				<header>
					<h2>The Future of Dapps on Telos</h2>
				</header>
				<Slider 
					{...settings}
					ref={el => this.slider = el}
				>
					{dappsSlides.map((slide, i) => {
						return (
							<DAppSlide
								key={i}
								img={slide.img}
								heading={slide.heading}
								paragraphs={slide.paragraphs} />
						);
					})}
				</Slider>
				<button
					className='slider_arrow previous'
					style={prevStyle}
					onClick={this.handlePrevious} />
				<button
					className='slider_arrow next'
					style={nextStyle}
					onClick={this.handleNext} />
			</section>
		);
	}
}

const DAppSlide = (props) => {
	const slideImageStyle = {
		backgroundImage: `url(${props.img})`
	};

	return (
		<div className='dapps_slide'>
			<div className='slide_image' style={slideImageStyle}></div>
			<div className='slide_content_container'>
				<div className='slide_content'>
					<h4>{props.heading}</h4>
					{props.paragraphs.map((par, i) => <p key={i}>{par}</p>)}
				</div>
			</div>
		</div>
	);
};

const DAppContent = ({dapp_sections}) => {
	const dappSections = [
		{
			heading: dapp_sections.compatibility.heading,
			img: compatibility,
			paragraphs: dapp_sections.compatibility.content
		},
		{
			heading: dapp_sections.powerful.heading,
			img: powerful,
			paragraphs: dapp_sections.powerful.content
		},
		{
			heading: dapp_sections.secure.heading,
			img: secure,
			paragraphs: dapp_sections.secure.content
		},
		{
			heading: dapp_sections.proprietary.heading,
			img: proprietary,
			paragraphs: dapp_sections.proprietary.content
		},
		{
			heading: dapp_sections.decentralized.heading,
			img: decentralized,
			paragraphs: dapp_sections.decentralized.content
		}
	];

	return (
		<section id='dapp_content'>
			<Grid>
			{
				dappSections.map((sect, i) => {
					return (
						<DAppSection
							key={i}
							img={sect.img}
							heading={sect.heading}
							paragraphs={sect.paragraphs}
							order={i} />
					);
				})
			}
			</Grid>
		</section>
	);
};

const DAppSection = (props) => {
	return (
		<ScrollAnimation
			animateOnce={true}
			animateIn='fadeInUp'
			duration={0.4}
		>
			<Row>
				<Col md={10} mdOffset={1}>
					<div className='content_container'>
						<img src={props.img} alt='' />
						<div className='content_section'>
							<h3>{props.heading}</h3>
							{props.paragraphs.map((par, i) => <p key={i}>{par}</p>)}
						</div>
					</div>
				</Col>
			</Row>
		</ScrollAnimation>
	);
};

export default withRouter(connect(null, {selectLanguage})(DAppsPage));