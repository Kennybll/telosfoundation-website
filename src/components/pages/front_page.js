import React, {Component} from 'react';
import {Grid, Row, Col} from 'react-bootstrap';
import ScrollAnimation from 'react-animate-on-scroll';
import {Link, withRouter} from 'react-router-dom';

import {connect} from 'react-redux';
import {selectLanguage} from '../../actions';

import icon_dapps from '../../img/Telos_MarketingSite_Icon_dapps_200px.png';
import icon_dpos from '../../img/Telos_MarketingSite_Icon_dpos_200px.png';
import icon_governance from '../../img/Telos_MarketingSite_Icon_governance_200px.png';
import white_paper from '../../img/white_paper_pdf_solid.png';

//partners logos
import eos_detroit from '../../img/partner_logos/logo_eosdetroit_small.png';
import eos_metal from '../../img/partner_logos/logo_eosmetal.png';
import dutcheos from '../../img/partner_logos/logo_dutch_eos.png';
import telosuk from '../../img/partner_logos/logo_telos_uk.png';
import eosbarcelona from '../../img/partner_logos/logo_eosbarcelona.png';
// import eosvan from '../../img/partner_logos/logo_eosvan.png';
import goodblock from '../../img/partner_logos/logo_goodblock.png';
import infinitybloc from '../../img/partner_logos/logo_infinitybloc.png';
// import teloslabs from '../../img/partner_logos/logo_teloslabs.png';
import eosworld from '../../img/partner_logos/logo_eosworld.png';
// import eosgreen from '../../img/partner_logos/logo_eosgreen.png';
import telos_green from '../../img/partner_logos/logo_telos_green.png';
import fuzzy from '../../img/partner_logos/logo_fuzzy.png';
import caleos from '../../img/partner_logos/logo_caleos.png';
import eos_in_space from '../../img/partner_logos/logo_eosspace.png';
// import eos_sweden from '../../img/partner_logos/logo_eossweden.png';
import sweden_cornet from '../../img/partner_logos/logo_swedencornet.png';
// import eos_miami from '../../img/partner_logos/logo_eosmiami.png';
import telos_miami from '../../img/partner_logos/logo_telos_miami.png';
import hellenicos from '../../img/partner_logos/logo_hellenicos.png';
import discover_telos from '../../img/partner_logos/logo_discovertelos.png';
import zmeta from '../../img/partner_logos/logo_zmeta.png';
import blindbloc from '../../img/partner_logos/logo_blindbloc.png';
import csx from '../../img/partner_logos/logo_csx.png';
import telos_russia from '../../img/partner_logos/logo_telosrussia.png';
import amplified from '../../img/partner_logos/logo_amplified.png';
import venezuela from '../../img/partner_logos/logo_telos_venezuela.png';
import madrid from '../../img/partner_logos/logo_telos_madrid.png';
import telos_ny from '../../img/partner_logos/logo_telos_ny.png';
import telos_dac from '../../img/partner_logos/logo_telos_dac.png';
import telos_canton from '../../img/partner_logos/logo_telos_canton.png';
import eos_impera from '../../img/partner_logos/logo_eosimpera.png';
import zephyr from '../../img/partner_logos/logo_zephyr.png';
import telos_vancouver from '../../img/partner_logos/logo_telos_vancouver.png';
import kainos from '../../img/partner_logos/logo_kainos.png';
import telos_global from '../../img/partner_logos/logo_telosglobal.png';
import telescope from '../../img/partner_logos/logo_telescope.png';
import eos_sphere from '../../img/partner_logos/logo_eos_sphere.png';
import telos_awake from '../../img/partner_logos/logo_telos_awake.png';

import chainrift_button from '../../img/exchange_logos/Chainrift-Button.jpg';
import codex_button from '../../img/exchange_logos/codex_button.jpg';
import eosex_button from '../../img/exchange_logos/eosex.png';
import akdex_button from '../../img/exchange_logos/akdex.png';
import p2pb2b_button from '../../img/exchange_logos/P2PPB2B-Button.jpg';
import cointiger_button from '../../img/exchange_logos/CoinTiger-Button.jpg';

import sqrl_logo from '../../img/SQRL_Logo_1024px1.png';
import scatter_logo from '../../img/scatter_logo.jpg';
import awake_logo from '../../img/awake_wallet_banner.png';
import meow_logo from '../../img/meow_wallet_banner.png';
import torus_logo from '../../img/torus_wallet.png';

//white papers
import { 
	WHITE_PAPER_ENGLISH,
	WHITE_PAPER_KOREAN,
	WHITE_PAPER_CHINESE,
	WHITE_PAPER_RUSSIAN,
	WHITE_PAPER_PORTUGESE,
	WHITE_PAPER_INDONESIAN
} from '../../config/constants';

//charts
import chart_ch from '../../img/charts/Telos_MarketingSite_Chart_1000px_CH1.png';
import chart_en from '../../img/charts/Telos_MarketingSite_Chart_1000px_EN1.png';
import chart_kr from '../../img/charts/Telos_MarketingSite_Chart_1000px_KR1.png';
import chart_pg from '../../img/charts/Telos_MarketingSite_Chart_1000px_PG1.png';
import chart_rn from '../../img/charts/Telos_MarketingSite_Chart_1000px_RN1.png';
import chart_sp from '../../img/charts/Telos_MarketingSite_Chart_1000px_SP1.png';

import '../../styles/front_page.css';

const partnersArr = [
	{
		name: 'eos detroit',
		logo: eos_detroit,
		url: 'https://eosdetroit.io/'
	},
	{
		name: 'eos metal',
		logo: eos_metal,
		url: 'https://eosmetal.io'
	},
	{
		name: 'telos uk',
		logo: telosuk,
		url: 'https://telosuk.io'
	},
	{
		name: 'dutch eos',
		logo: dutcheos,
		url: 'https://dutcheos.io'
	},
	{
		name: 'eos barcelona',
		logo: eosbarcelona,
		url: 'http://eosbarcelona.com/'
	},
	{
		name: 'telos vancouver',
		logo: telos_vancouver,
		url: 'https://www.telosvancouver.io/'
	},
	{
		name: 'good block',
		logo: goodblock,
		url: 'http://goodblock.io'
	},
	{
		name: 'infinitybloc',
		logo: infinitybloc,
		url: 'https://www.infinitybloc.io/'
	},
	{
		name: 'Eos World',
		logo: eosworld,
		url: 'https://eostheworld.io/'
	},
	{
		name: 'telosgreen',
		logo: telos_green
	},
	{
		name: 'fuzzy',
		logo: fuzzy
	},
	{
		name: 'caleos',
		logo: caleos,
		url: 'https://caleos.io/'
	},
	{
		name: 'eos in space',
		logo: eos_in_space,
		url: 'https://eosin.space/#telos'
	},
	{
		name: 'telos miami',
		logo: telos_miami,
		url: 'http://telos.miami'
	},
	{
		name: 'eos sweden',
		logo: sweden_cornet,
		url: 'https://eossweden.eu/'
	},
	{
		name: 'octagon labs',
		logo: hellenicos,
		url: 'https://octagonlabs.org'
	},
	{
		name: 'discover telos',
		logo: discover_telos
	},
	{
		name: 'z meta',
		logo: zmeta
	},
	{
		name: 'blind bloc',
		logo: blindbloc,
		url: 'https://www.blindblocart.io/'
	},
	{
		name: 'eos csx',
		logo: csx,
		url: 'https://www.csx.io'
	},
	{
		name: 'telos russia',
		logo: telos_russia,
		url: 'https://telosrussia.io'
	},
	{
		name: 'telos amplified',
		logo: amplified,
		url: 'https://amplified.software/'
	},
	{
		name: 'telos venezuela',
		logo: venezuela,
		url: 'https://www.telosvenezuela.com'
	},
	{
		name: 'telos madrid',
		logo: madrid,
		url: 'https://telosmadrid.io/'
	},
	{
		name: 'telos dac',
		logo: telos_dac,
		url: 'https://telosdac.io'
	},
	{
		name: 'telos ny',
		logo: telos_ny,
		url: 'http://nytelos.com'
	},
	{
		name: 'telos canton',
		logo: telos_canton,
		url: 'https://teloscanton.io'
	},
	{
		name: 'eos impera',
		logo: eos_impera,
		url: 'https://eosimpera.io'
	},
	{
		name: '21 zephyr',
		logo: zephyr,
		url: 'https://telos-21zephyr.com'
	},
	{
		name: 'kainos',
		logo: kainos
	},
	{
		name: 'TelosGlobal',
		logo: telos_global,
		url: 'https://telosglobal.io'
	},
	{
		name: 'the teloscope',
		logo: telescope,
		url: 'https://theteloscope.io'
	},
	{
		name: 'eosphere',
		logo: eos_sphere,
		url: 'https://eosphere.io'
	},
	{
		name: 'telos awake',
		logo: telos_awake,
		url: 'https://eosawake.io'
	}
];

const exchangesArr = [
	{
		name: 'chainrift',
		img: chainrift_button,
		url: 'https://chainrift.com'
	},
	{
		name: 'codex',
		img: codex_button,
		url: 'https://codex.one'
	},
	{
		name: 'eosex',
		img: eosex_button,
		url: 'https://eosex.com'
	},
	{
		name: 'akdex',
		img: akdex_button,
		url: 'https://akdex.io'
	},
	{
		name: 'p2pb2b',
		img: p2pb2b_button,
		url: 'https://p2pb2b.io'
	},
	{
		name: 'cointiger',
		img: cointiger_button,
		url: 'https://www.cointiger.com/en-us'
	}
];

class FrontPage extends Component {
	componentDidMount(){
		window.scrollTo(0, 0);

		if(this.props.match.params.language){
			this.props.selectLanguage(this.props.match.params.language);
		}
	}

	getStyle(){
		if(this.props.language === 'arabic') return {direction: 'rtl'};
		return {};
	}

	render(){
		const { intro_heading,
				intro_content,
				developers_heading,
				developers_content,
				dpos_heading,
				dpos_content,
				gov_heading,
				gov_content,
				white_paper_heading,
				white_paper_content,
				github_text,
				partners_heading } = this.props.landing_page;
		const {language} = this.props;

		return (
			<div style={this.getStyle()}>
				<Intro
					intro_heading={intro_heading}
					intro_content={intro_content}
					language={language} />
				<IconsText
					developers_heading={developers_heading}
					developers_content={developers_content}
					dpos_heading={dpos_heading}
					dpos_content={dpos_content}
					gov_heading={gov_heading}
					gov_content={gov_content} />
				<WhitePaper
					white_paper_heading={white_paper_heading}
					white_paper_content={white_paper_content}
					github_text={github_text}
					language={language} />
				<Exchanges />
				<Wallets />
				<Partners
					partners_heading={partners_heading} />
			</div>
		);
	}
}

const Intro = ({intro_heading, intro_content, language}) => {

	let localizedChart = '';
	switch(language){
		case 'en':
			localizedChart = chart_en;
			break;
		case 'korean':
			localizedChart = chart_kr;
			break;
		case 'mandarin':
			localizedChart = chart_ch;
			break;
		case 'pt-br':
			localizedChart = chart_pg;
			break;
		case 'russian':
			localizedChart = chart_rn;
			break;
		case 'spanish':
			localizedChart = chart_sp;
			break;
		default:
			localizedChart = chart_en;
			break;
	}

	return (
		<section id='front_page_intro'>
			<Grid>
				<Row>
					<Col sm={6}>
						<ScrollAnimation
							animateOnce={true}
							animateIn='fadeInUp'
							duration={0.4} >
							<h1 dangerouslySetInnerHTML={{__html: intro_heading}} />
							<p dangerouslySetInnerHTML={{__html: intro_content}} />
						</ScrollAnimation>
					</Col>
					<Col sm={6}>
						<ScrollAnimation
							animateOnce={true}
							animateIn='fadeInUp'
							duration={0.4}
							delay={250} >
							<img src={localizedChart} alt='chart' className='img-responsive' />
						</ScrollAnimation>
					</Col>
				</Row>
			</Grid>
		</section>
	);
};

const IconsText = ({developers_heading, developers_content, dpos_heading, dpos_content, gov_heading, gov_content}) => {
	return (
		<section id='front_page_icons'>
			<Grid>
				<Row>
					<Col sm={4}>

						<ScrollAnimation
							animateOnce={true}
							animateIn='fadeInUp'
							duration={0.4}>
							<img src={icon_dapps} alt="dapps" className='img-responsive front_page_icons_img' />
							<div className='icons_text'>
								<h2>{developers_heading}</h2>
								<p>{developers_content}</p>
							</div>
						</ScrollAnimation>
					</Col>
					<Col sm={4}>

						<ScrollAnimation
							animateOnce={true}
							animateIn='fadeInUp'
							duration={0.4}
							delay={250}>
							<img src={icon_dpos} alt="dpos" className='img-responsive front_page_icons_img' />
							<div className='icons_text'>
								<h2>{dpos_heading}</h2>
								<p>{dpos_content}</p>
							</div>
						</ScrollAnimation>

					</Col>
					<Col sm={4}>
	
						<ScrollAnimation
							animateOnce={true}
							animateIn='fadeInUp'
							duration={0.4}
							delay={500}>
							<img src={icon_governance} alt="governance" className='img-responsive front_page_icons_img' />
							<div className='icons_text'>
								<h2>{gov_heading}</h2>
								<p>{gov_content}</p>
							</div>
						</ScrollAnimation>

					</Col>
				</Row>
			</Grid>
		</section>
	);
};

const WhitePaper = ({white_paper_heading, white_paper_content, github_text, language}) => {

	let wp_url;
	switch(language){
		case 'en':
			wp_url = WHITE_PAPER_ENGLISH;
			break;
		case 'korean':
			wp_url = WHITE_PAPER_KOREAN;
			break;
		case 'mandarin':
			wp_url = WHITE_PAPER_CHINESE;
			break;
		case 'russian':
			wp_url = WHITE_PAPER_RUSSIAN;
			break;
		case 'pt-br':
			wp_url = WHITE_PAPER_PORTUGESE;
			break;
		case 'indonesian':
			wp_url = WHITE_PAPER_INDONESIAN;
			break;
		default:
			wp_url = WHITE_PAPER_ENGLISH;
			break;
	}

	return (
		<section id='white_paper'>
			<Grid>
				<Row>
					<Col md={8} mdOffset={2}>
						<Row>
							<Col sm={6}>
								<ScrollAnimation
									animateOnce={true}
									animateIn='fadeInUp'
									duration={0.4}>
									
									<div className='white_paper_text'>
										<h1 dangerouslySetInnerHTML={{__html: white_paper_heading}}></h1>
										<p>{white_paper_content}</p>
										<h3>{github_text}</h3><a href='https://github.com/Telos-Foundation' target='_blank' rel='noopener noreferrer'>https://github.com/Telos-Foundation</a>
									</div>
								</ScrollAnimation>
							</Col>
							<Col sm={6}>
								<ScrollAnimation
									animateOnce={true}
									animateIn='fadeInUp'
									duration={0.4}
									delay={250}>

									<div className='white_paper_link'>
										<a href={wp_url} target='_blank' rel='noopener noreferrer'>
											<img src={white_paper} alt='white paper pdf' className='img-responsive front_page_pdf' />
										</a>
									</div>
								</ScrollAnimation>
							</Col>
						</Row>
					</Col>
				</Row>
			</Grid>
		</section>
	);
};

const Exchanges = () => {
	return (
		<section id='exchanges'>
			<header>
				<h1>Participating Exchanges</h1>
			</header>
			<div className='exchange_intro' style={{direction: 'ltr'}}>
				<Grid>
					<Row>
						<Col md={8} mdOffset={2}>
							<ScrollAnimation
								animateOnce={true}
								animateIn='fadeInUp'
								duration={0.4}
							>
								<p>Buy TLOS, the Telos token, and exchange them for other currencies on these exchanges. Check back often for new exchange partnerships!</p>
							</ScrollAnimation>
						</Col>
					</Row>
				</Grid>
			</div>
			<Grid>
				<Row>
					<Col md={10} mdOffset={1}>
						<div className='exchange_buttons'>
							{exchangesArr.map((ex, i) => {
								return (
									<Exchange
										key={i}
										name={ex.name}
										img={ex.img}
										url={ex.url}
										delay={i * 100 + 150} />
								);
							})}
						</div>
					</Col>
				</Row>
			</Grid>
		</section>
	);
};

const Exchange = (props) => {
	return (
			<div className='exchange_button'>
				<ScrollAnimation
					animateOnce={true}
					animateIn='fadeInUp'
					duration={0.5}
					delay={props.delay}
				>
					<a
						href={props.url}
						target='_blank'
						rel='noopener noreferrer'
					>
						<img src={props.img} alt={props.name} />
					</a>
				</ScrollAnimation>
			</div>
	);
};

const Wallets = () => {
	return (
		<section id='wallets' style={{direction: 'ltr'}}>
			<header>
				<h1>Telos Wallets</h1>
			</header>
			<Grid>
				<Row>
					<Col md={10} mdOffset={1}>
						<div className='wallet_intro'>
							<ScrollAnimation
								animateOnce
								animateIn='fadeInUp'
								duration={0.4}
							>
								<p style={{marginBottom: 0}}>Store and retrieve your TLOS tokens on these wallets.</p>
							</ScrollAnimation>
							<ScrollAnimation
								animateOnce
								animateIn='fadeInUp'
								duration={0.4}
								delay={125}
							>
								<p>Check back often for new wallet partnerships!</p>
							</ScrollAnimation>
						</div>
						<div className='wallet_banners'>
							<div className='wallet_banner'>
								<ScrollAnimation
									animateOnce
									animateIn='fadeInUp'
									duration={0.4}
									delay={250}
								>
									<div className='wallet_img_container'>
										<Link to='/downloads'>
											<img src={sqrl_logo} alt='sqrl wallet' />
										</Link>
									</div>
								</ScrollAnimation>
							</div>
							<div className='wallet_banner'>
								<ScrollAnimation
									animateOnce
									animateIn='fadeInUp'
									duration={0.4}
									delay={375}
								>
									<div className='wallet_img_container'>
										<a
											href='https://get-scatter.com'
											target='_blank'
											rel='noopener noreferrer'
										>
											<img src={scatter_logo} alt='scatter logo' />
										</a>
									</div>
								</ScrollAnimation>
							</div>
							<div className='wallet_banner'>
								<ScrollAnimation
									animateOnce
									animateIn='fadeInUp'
									duration={0.4}
									delay={500}
								>
									<div className='wallet_img_container closed_source meow_banner_container'>
										<a
											href='https://altshiftdev.com/telos'
											target='_blank'
											rel='noopener noreferrer'
										>
											<img src={meow_logo} alt='alt shift logo' />
										</a>
									</div>
								</ScrollAnimation>
							</div>
							<div className='wallet_banner'>			
								<ScrollAnimation
									animateOnce
									animateIn='fadeInUp'
									duration={0.4}
									delay={625}
								>
									<div className='wallet_img_container closed_source awake_banner_container'>
										<a
											href='https://www.pgyer.com/awake'
											target='_blank'
											rel='noopener noreferrer'
										>
											<img src={awake_logo} alt='awake logo' />
										</a>
									</div>
								</ScrollAnimation>
							</div>
							<div className='wallet_banner'>
								<ScrollAnimation
									animateOnce
									animateIn='fadeInUp'
									duration={0.4}
									delay={750}
								>
									<div className='wallet_img_container closed_source torus_banner_container'>
										<a
											href='http://kibisis.ch'
											target='_blank'
											rel='noopener noreferrer'
										>
											<img src={torus_logo} alt='torus logo' />
										</a>
									</div>
								</ScrollAnimation>
							</div>
						</div>

						<footer>
							<ScrollAnimation
								animateOnce
								animateIn='fadeInUp'
								duration={0.4}	
							>
								<p>* These closed-source applications have not been thoroughly tested by the Telos Foundation</p>
							</ScrollAnimation>
						</footer>
					</Col>
				</Row>
			</Grid>
		</section>
	);
};

const Partners = ({partners_heading}) => {
	return (
		<section id='partners'>
			<header className='text-center'>
				<h1>{partners_heading}</h1>
			</header>
			<Grid>
				<div className='partners_container'>
					{partnersArr.map((partner, i) => {
						return (
							<div className='partner' key={i}>
								<ScrollAnimation
									animateOnce
									animateIn='fadeIn'
									duration={0.1}
									delay={i * 10}
								>
									{partner.url ? 
										<a href={partner.url} target='_blank' rel='noopenter noreferrer'>
											{partner.logo ? <img src={partner.logo} alt={partner.name} className='partner_logo' /> : <p>{partner.name}</p>}
										</a>
										: 
										partner.logo ? <img src={partner.logo} alt={partner.name} className='partner_logo' /> : <p>{partner.name}</p>
									}
								</ScrollAnimation>
							</div>
						);
					})}
				</div>
			</Grid>
		</section>
	);
};

export default withRouter(connect(null, {selectLanguage})(FrontPage));