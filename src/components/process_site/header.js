import React, {Component} from 'react';
import {Navbar, Nav, NavItem, NavDropdown, MenuItem, Grid} from 'react-bootstrap';
import {withRouter} from 'react-router-dom';
import LanguageToggleDesktop from '../language_toggle_desktop';
import telos_logo from '../../img/Telos_MarketingSite_TelosLogo_500px.png';

import '../../styles/process_site/header.css';

class Header extends Component {
	render(){
		return (
			<header id='process_header'>
				<Navbar>
					<Navbar.Header>
						<Navbar.Toggle />
						<Navbar.Brand>
							<img
								src={telos_logo}
								alt='logo'
								className='telos_logo'
								onClick={() => this.props.history.push('/')} />
						</Navbar.Brand>
					</Navbar.Header>
					<Navbar.Collapse>
						<Nav
							pullRight
							onSelect={(key, e) => {
								e.preventDefault();
							}}
						>
							<LanguageToggleDesktop />
							<NavItem
								onClick={e => {
									e.preventDefault();
									window.open('https://medium.com/@teloslogical');
								}}
								href='https://medium.com/@teloslogical'
							>
								BLOG
							</NavItem>
							<NavItem
								onSelect={(key, e) => {
									e.preventDefault();
									this.props.history.push(`/roadmap`);
								}}
							>
								ROADMAP
							</NavItem>
							<NavDropdown title="MONITOR" id="basic-nav-dropdown">
								<MenuItem 
									onClick={(e) => {
										e.preventDefault();
										window.open('https://mon-test.telosfoundation.io');
									}}
									href="https://mon-test.telosfoundation.io"
								>
									Testnet
								</MenuItem>
								<MenuItem
									onClick={(e) => {
										e.preventDefault();
										window.open('https://monitor.telosfoundation.io');
									}} 
									href="https://monitor.telosfoundation.io"
								>
									Mainnet
								</MenuItem>
						    </NavDropdown>
						    <NavDropdown
						    	title="MORE"
						    	id="more-nav-dropdown"
						    	onSelect={(key, e) => {
						    		e.preventDefault();
						    		this.props.history.push(`/${key}`);
						    	}}
						    >
						    	<MenuItem
						    		eventKey='launch'
						    	>
						    		Launch Checklist
						    	</MenuItem>
						    	<MenuItem
						    		eventKey='candidates'
						    	>
						    		BP Candidates
						    	</MenuItem>
						    	<MenuItem
						    		eventKey='governance'
						    	>
									Governance
								</MenuItem>
								<MenuItem
						    		eventKey='arbitrators'
						    	>
									Arbitrator Program
								</MenuItem>
								<MenuItem
						    		eventKey='dapps'
						    	>
									Dapp Development
								</MenuItem>
								<MenuItem
						    		eventKey='downloads'
						    	>
									Downloads
								</MenuItem>
								<MenuItem
						    		eventKey='recovery'
						    	>
									Token Recovery
								</MenuItem>
								<MenuItem
						    		eventKey='faq'
						    	>
									FAQ
								</MenuItem>
						    </NavDropdown>
						</Nav>
					</Navbar.Collapse>
				</Navbar>
				{this.props.location.pathname === '/roadmap' && (
					<nav className='process_page_nav'>
						<Grid>
							<ul>
								<li><a href="#future_anchor">ROADMAP</a></li>
								<li><a href="#team_anchor">TEAM</a></li>
								<li><a href="#history_anchor">PROJECT HISTORY</a></li>
							</ul>
						</Grid>
					</nav>
				)}
			</header>
		);
	}
}

export default withRouter(Header);