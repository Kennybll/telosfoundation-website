import React from 'react';
import {connect} from 'react-redux';
import {toggleSideNav} from '../actions';
import {withRouter} from 'react-router-dom';
import '../styles/side_navigation.css';
import telos_logo from '../img/Telos_MarketingSite_TelosLogo_500px.png';
import logo_w_text from '../img/logo_w_text.png';

const SideNavigation = (props) => {
	return (
		<nav className='side_nav'>
			<header>
				<img src={telos_logo} className='img-responsive' alt='side nav logo' />
			</header>
			<ul>
				<li>
					<a 
						href='/launch' 
						onClick={e => {
							e.preventDefault();
							props.history.push('/launch');
							props.toggleSideNav(false);
						}}
					>
						LAUNCH CHECKLIST
					</a>
				</li>
				<li>
					<a
						href='/candidates'
						onClick={e => {
							e.preventDefault();
							props.history.push('/candidates');
							props.toggleSideNav(false);
						}}
					>
						BP CANDIDATES
					</a>
				</li>
				<li>
					<a
						href='/governance'
						onClick={e => {
							e.preventDefault();
							props.history.push('/governance');
							props.toggleSideNav(false);
						}}
					>
						GOVERNANCE
					</a>
				</li>
				<li>
					<a
						href='/arbitrators'
						onClick={e => {
							e.preventDefault();
							props.history.push('/arbitrators');
							props.toggleSideNav(false);
						}}
					>
						ARBITRATOR PROGRAM
					</a>
				</li>
				<li>
					<a
						href='/dapps'
						onClick={e => {
							e.preventDefault();
							props.history.push('/dapps');
							props.toggleSideNav(false);
						}}
					>
						DAPP DEVELOPMENT
					</a>
				</li>				
				<li>
					<a
						href='/downloads'
						onClick={e => {
							e.preventDefault();
							props.history.push('/downloads');
							props.toggleSideNav(false);
						}}
					>
						DOWNLOADS
					</a>
				</li>
				<li>
					<a
						href='/recovery'
						onClick={e => {
							e.preventDefault();
							props.history.push('/recovery');
							props.toggleSideNav(false);
						}}
					>
						TOKEN RECOVERY
					</a>
				</li>
				<li>
					<a
						href='/faq'
						onClick={e => {
							e.preventDefault();
							props.history.push('/faq');
							props.toggleSideNav(false);
						}}
					>
						FAQ
					</a>
				</li>
			</ul>
			<footer>
				<a 
					href='/foundation'
					onClick={e => {
						e.preventDefault();
						props.history.push('/foundation');
						props.toggleSideNav(false);
					}}
				>
					<img src={logo_w_text} alt='side nav logo' />
				</a>
			</footer>
		</nav>
	);
};

function mapStateToProps(state){
	return {
		side_nav_open: state.side_nav_open
	};
}

export default withRouter(connect(mapStateToProps, {toggleSideNav})(SideNavigation));