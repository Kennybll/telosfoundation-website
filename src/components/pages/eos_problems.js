import React, {Component} from 'react';
import {Col} from 'react-bootstrap';
import yaml from 'js-yaml';
import axios from 'axios';


export default class EosProblems extends Component {
	constructor(){
		super();
		this.state = {
			problems_yml: null
		};
	}

	componentDidMount(){
		axios.get('/resources/eos_problems.yml')
		.then(response => this.setState({problems_yml: response.data}))
		.catch(error => console.log(error));
	}

	render(){
		const problems_obj = yaml.load(this.state.problems_yml);
		if(!problems_obj){
			return (
				<div></div>
			);
		}

		const get_problems_intro = () => {
			return (
				<div>
					<h2>{problems_obj.page_heading}</h2>
					<h3>{problems_obj.page_subheading}</h3>
					{problems_obj.page_intro.map(item => <small key={item}>{item}</small>)}
				</div>
			);
		};

		const get_problems_content = problems_obj.content_items.map((item, i) => {
			return (
				<div key={i}>
					<h4 className='problem'>{item.problem_statement}</h4>
					{item.problem_content.map(paragraph => <p key={paragraph}>{paragraph}</p>)}
					<h4>{item.solution_statement}</h4>
					{item.solution_content.map(paragraph => <p key={paragraph}>{paragraph}</p>)}
				</div>
			);
		});

		return (
			<Col sm={12}>
				<article>
					{get_problems_intro()}
					{get_problems_content}
				</article>
			</Col>
		);
	}
}

/*
const EosProblems = () => {

	return (
		<Col sm={12}>
			<article className='eos_problems'>
				<h2>Eos Problems, Telos Solutions</h2>
				<h3>Eos Problems and How Telos Will Solve Them</h3>
				<small>We have been closely involved throughout the Eos mainnet launch process as voting and contribution members of the Eos Mainnet Launch Group (EMLG). This has been an awesome experience and experiment in decentralized decision-making, but it is marred by problems caused by Eos centralization and requirements of the Eos sale and process. By eliminating the three forms of extreme centralization inherent to Eos, Telos will solve many of these problems.</small>
			
				<h4 className='problem'>Problem: User votes don’t matter – Whales run the network.</h4>
				<p>Because of the huge economic disparity within the Eos network, and because only 21 block producers are designated to run the network, vote for worker proposals, and receive the large reward for doing so, whale token holders control the Eos system. They can simply vote in up to 30 affiliated block producers who will follow their demands. Independent block producers can be removed by giant EOS token holders at any time.</p>
				<p>The Eos network has already seen that some block producers affiliated with whales are failing to produce blocks, missing necessary technical planning sessions, and failing to provide important information disclosures to voters. There is a danger that these whales may simply suck a large share of the 5% annual inflation out of the Eos network while providing minimal service because their voting power makes them practically unopposable.</p>
			
				<h4>The Telos solution:</h4>
				<p>There are no whales in Telos. Token holders will have a meaningful vote.</p>
							
				<h4 className='problem'>Problem: DApp developers are disincentivized from using network.</h4>
				<p>The Eos Constitution specifies that all DApps and contracts on the Eos network must be open source. While this is appropriate for many contracts, it will limit the development of commercial DApps on the network. Developers must invest heavily in each new product they create; they rely on protection of their inventions to recoup these investments. If commercial DApps must be open source, developers will instead choose blockchains where their works can be protected. Additionally, the Eos mainnet is experiencing speculation on RAM reservations which will drive up the cost of deploying DApps on the network.</p>

				<h4>The Telos solution:</h4>
				<p>The Telos network will allow applications to be designated as proprietary, with the exception of those produced by entities who have received funds from the network (block producers, adjudicators, code contributors, etc.) within the last 6 months. In order to discourage speculation and to lower the cost of deploying DApps, the Telos network will release RAM in concert with its actual DApp usage.</p>

				<h4 className='problem'>Problem: Network pause risk</h4>
				<p>The Eos network requires “2/3+1” consensus to operate. Without this number of block producers running, the network must be paused until 2/3+1 BPs are active. In practical terms, this means that if just 6 of the 21 active Eos BPs fail to produce blocks, then the network goes down. Standby BPs do not automatically replace missing BPs. In fact, BPs that have been voted in can’t be removed for non-performance for at least 3 hours. Exacerbating this problem is the fact that Eos standby block producers are not regularly tested for their ability to step in and produce blocks. Further, there are no enforced minimum requirements for an Eos block producer. The only requirement is to receive votes. The danger is that if block producers go down, they cannot be replaced for three hours and the standbys who replace them may not be ready to fill in.</p>
				 
				<h4>The Telos solution:</h4>
				<p>The Telos network regularly cycles in standby block producers to produce blocks (at least once every 3 days for each standby). This cycling system will also temporarily replace any active block producer who has not produced blocks in 30 minutes. This system has three distinct advantages for network resiliency: nonproductive block producers will be more rapidly replaced meaning it is far less likely 6 will be down at any given time, forcing a network pause; standbys will regularly prove their readiness; block producers will receive semi-scheduled downtime to maintain and update their equipment. Further, Telos uses a smart contract to enforce block producer eligibility, ensuring that ever BP meets minimum technical requirements.</p>

				<h4 className='problem'>Problem: Standby BPs are not being properly paid and regularly tested.</h4>
				<p>Eos standby block producers are paid far less than the top 21 block producers and are rarely called upon to prove their capacity. Maintaining a top-notch node infrastructure is costly and without the need to prove their ability, standby block producers are likely to skimp on expensive improvements and maintenance—particularly because there are no enforced minimum requirements to meet. There is no ongoing mechanism for testing the readiness of standby block producers and primary block producers have no opportunities for scheduled downtime, which increases the challenges of maintaining the network. There is no way to be certain that the Eos mainnet will function properly in times of crisis.</p>

				<h4>The Telos solution:</h4>
				<p>Telos has a fixed pool of up to 30 standby block producers selected and paid by voting rank. Standby block producers are paid half the rate of the top 21 block producers. To earn this pay, each standby will cycle into block production for a several hours every 3 days on a regular schedule to ensure that all paid standbys are able to step in to produce whenever needed. This scheduled rotation means that primary block producers have predictable downtime to maintain their nodes, which lowers operational cost and increases reliability. Block producers and standbys that fail to produce blocks will be penalized. This system makes it difficult for groups to game the payment rewards system and actively discourages vote buying. Telos has minimum requirements (both technical and informational) enforced by smart contract that every block producer must meet, regardless of voting.</p>

				<h4 className='problem'>Problem: Eos RAM prospecting drives up the cost of deploying DApps.</h4>
				<p>The Eos network launched with much more available RAM than the system required. Prospectors have taken to reserving this RAM early, likely without the intention to use it, but only to speculate on the rising price of RAM in the future. This speculation has led to a rapid increase in the price of RAM. When the DApps arrive that need this RAM, it is likely to be priced very high which makes deploying applications on Eos unnecessarily expensive.</p>
				 
				<h4>The Telos solution:</h4>
				<p>Telos will launch with just 4GB of RAM. This will enable any kinds of initial DApps and airdrops that people may wish to launch on the network but will not leave incentive for RAM speculation because RAM that prospectors reserve can easily be supplanted by new RAM entering the system. As a result, people are more likely to simply reserve the RAM that their expected DApps will require. Block producers will monitor DApp RAM usage and will add new RAM capacity when actual usage necessitates it.</p>

				<h4 className='problem'>Problem: The Eos Constitution is unratified.</h4>
				<p>The Eos Interim Constitution is self-defined as incomplete and requires revision and ratification before Eos can move forward with many of its legal and governance responsibilities. This is an expression of the founder’s personal values and Block.one’s need to keep the blockchain at arm’s length so as not to be deemed to have created a security. Due to the voting imbalances in EOS token distribution, the ratified constitution will likely support the needs of the whales over the needs of common users.</p>
				 
				<h4>The Telos solution:</h4>
				<p>The Telos Constitution is valid and enforceable as written. There is no need to wait for a revised or ratified version. Every Telos user will agree to this via Ricardian contract the first time they choose to use their Telos account. Telos users certainly have the right to amend the constitution whenever they deem this necessary. There is a be a process that empowers TLOS token holders to amend the constitution, and when this happens it is more likely to express the desires and aims of common Telos users. However, the network will not be deemed unratified if this does not happen immediately.</p>
				 

				<h4 className='problem'>Problem: Adjudication body not prepared at launch.</h4>
				<p>Eos relies on an adjudication department to resolve all disputes. However, that body has not yet been fully formed or prepared. There are no funds provided to facilitate this. Therefore, problems such as repatriating stolen funds is a difficult one for block producers to solve.</p>
				 
				<h4>The Telos solution:</h4>
				<p>Telos will initially resolve many judicial challenges prior to its mainnet launch. The Telos Arbitration Organization (TAO) will be ready to begin immediately. The TAO will accept the Telos Constitution as complete and not requiring further ratification. The TAO will also have a clear and limited mandate as to which cases it can address. The Telos Foundation will initially fund the TAO so that it can resolve disputes immediately and remain free of conflict when adjudicating cases that involve block producers. Ongoing TAO funding will be from arbitration fees.</p>
				 
				<h4 className='problem'>Problem: Eos has high inflation</h4>
				<p>Eos inflation is 5% per year. This is too much and debases the currency. At 5% inflation the money supply doubles in just 14 years. Major world economies are currently aiming for 2% annual inflation. Eos inflation is distributed 1% to block producers and with the remainder divided based on block producer votes for work proposals. If the block producer votes reflect whale interest, many of these worker proposals will go to whale affiliates.</p>
				 
				<h4>The Telos solution:</h4>
				<p>Telos will keep inflation lower, aiming for {'<3%'} per year. 1% will still go to 51 block producers and standbys (though divided more equally equally among them). The remainder will go to support adjudicators, development, and other functions. Because some DApps can be proprietary on Telos, the network will not need to pay as many grants to software developers.</p>
				 
				<h4 className='problem'>Problem: Eos accounts can be forfeit after 3 years</h4>
				<p>Under the Eos Constitution, any account that has not performed a transaction in 3 years is forfeit and its EOS tokens will be redistributed. Many long-term savers will be caught by this and unfairly lose their tokens. There is no method to appeal to recover tokens once lost. This is designed to protect system resources and keep people engaged with the network but it is far too draconian and seeks so solve a problem that has not been shown to actually exist.</p>
				 
				<h4>The Telos solution:</h4>
				<p>Telos will not have any token forfeiture in its initial Constitution. If TLOS holders choose to amend the constitution to include one it will be their choice, not something imposed upon them.</p>
			</article>
		</Col>
	);
};

export default EosProblems;*/