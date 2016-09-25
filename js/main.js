// var { Router, Route, IndexRoute, Link, browserHistory } = ReactRouter

var _ReactRouter = ReactRouter;
var Router = _ReactRouter.Router;
var Route = _ReactRouter.Route;
var IndexRoute = _ReactRouter.IndexRoute;
var Link = _ReactRouter.Link;
var Navigation = ReactRouter.Navigation; // mixin
var browserHistory = _ReactRouter.browserHistory;


var MainLayout = React.createClass({
	  //todo    
/*    addApplicant: function(applicant) {
        //this.state.applicants['applicant-' + timestamp] = this.refs.input.value;
        this.state.applicants['applicant-' + (new Date()).getTime()] = applicant;
        this.setState({applicants: this.state.applicants});
    },*/
    
    renderList : function (key) {
        return ( <Applicant key={key} index={key} applicantDetails={this.props.route.applicants[key].name}/>)
    },
    
    render: function() {
        return (
            <div>
            	<Header />
            	<main id="page-container">
                	<IntroText />
				<div className="grid-row">
                	<div className="column-three-thirds">
                   <ul className="applicant-list">
                        {Object.keys(this.props.route.applicants).map(this.renderList)}   
                    </ul>                    
                    </div>
                    </div>
                </main>
            	<Footer />                
            </div>
        )
    }
})

var Applicant = React.createClass ({
	goToApplicant : function (e) {
		e.preventDefault();				
		var ApplicantId = this.props.index;		
		browserHistory.push(ApplicantId);			
	},
    render : function () {
        return(            
                <li><a className="applicant" onClick={this.goToApplicant}>{this.props.applicantDetails}</a></li>       
           
        )
    }
})

var IntroText = React.createClass({
    render : function () {
        return (
			<div>
				<div className="grid-row">
					<header className="column-three-thirds">
						<h1>Applicants</h1>
					</header>
				</div>

				<div className="grid-row">
					<div className="column-three-thirds">
						<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
					</div>
				</div>
				
			</div>
        )       
    }       
});

var Footer = React.createClass({
    render : function () {
        return (
<footer className="group js-footer" id="footer" role="contentinfo">

		<div className="footer-wrapper">
			<div className="footer-categories">
				<div className="footer-explore">
					<h2>Services and information</h2>

					<ul>
						<li><a href="/browse/benefits">Benefits</a></li>
						<li><a href="/browse/births-deaths-marriages">Births, deaths, marriages and care</a></li>
						<li><a href="/browse/business">Business and self-employed</a></li>
						<li><a href="/browse/childcare-parenting">Childcare and parenting</a></li>
						<li><a href="/browse/citizenship">Citizenship and living in the UK</a></li>
						<li><a href="/browse/justice">Crime, justice and the law</a></li>
						<li><a href="/browse/disabilities">Disabled people</a></li>
						<li><a href="/browse/driving">Driving and transport</a></li>
					</ul>
					<ul>
						<li><a href="/browse/education">Education and learning</a></li>
						<li><a href="/browse/employing-people">Employing people</a></li>
						<li><a href="/browse/environment-countryside">Environment and countryside</a></li>
						<li><a href="/browse/housing-local-services">Housing and local services</a></li>
						<li><a href="/browse/tax">Money and tax</a></li>
						<li><a href="/browse/abroad">Passports, travel and living abroad</a></li>
						<li><a href="/browse/visas-immigration">Visas and immigration</a></li>
						<li><a href="/browse/working">Working, jobs and pensions</a></li>
					</ul>
				</div>

				<div className="footer-inside-government">
					<h2>Departments and policy</h2>

					<ul>
						<li><a href="/government/how-government-works">How government works</a></li>
						<li><a href="/government/organisations">Departments</a></li>
						<li><a href="/government/world">Worldwide</a></li>
						<li><a href="/government/policies">Policies</a></li>
						<li><a href="/government/publications">Publications</a></li>
						<li><a href="/government/announcements">Announcements</a></li>
					</ul>
				</div>
				<hr/>
			</div>


			<div className="footer-meta">
				<div className="footer-meta-inner">
					<h2 className="visuallyhidden">Support links</h2>
					<ul>
						<li><a href="/help">Help</a></li>
						<li><a href="/help/cookies">Cookies</a></li>
						<li><a href="/contact">Contact</a></li>
						<li><a href="/help/terms-conditions">Terms and conditions</a></li>
						<li><a href="/cymraeg" lang="cy" hreflang="cy">Rhestr o Wasanaethau Cymraeg</a></li>
						<li>Built by the <a href="https://www.gov.uk/government/organisations/government-digital-service">Government Digital Service</a>
						</li>
					</ul>



					<div className="open-government-licence">
						<p className="logo"><a href="https://www.nationalarchives.gov.uk/doc/open-government-licence/version/3/" rel="license">Open Government Licence</a></p>
						<p>All content is available under the <a href="https://www.nationalarchives.gov.uk/doc/open-government-licence/version/3/" rel="license">Open Government Licence v3.0</a>, except where otherwise stated</p>
					</div>
				</div>

				<div className="copyright">
					<a href="http://www.nationalarchives.gov.uk/information-management/re-using-public-sector-information/copyright-and-re-use/crown-copyright/">© Crown copyright</a>
				</div>
			</div>
		</div>
	</footer>
        )       
    }       
});

	
var Header = React.createClass({
	
   render : function() {
    var styles = {color: 'white'};
   	return (
	<div>
	<header role="banner" id="global-header" className="">		
		<div className="header-wrapper">
			<div className="header-global">
				<div className="header-logo">
					<a href="https://www.gov.uk" title="Go to the GOV.UK homepage" id="logo" className="content">
						<img src="https://assets.publishing.service.gov.uk/static/gov.uk_logotype_crown_invert_trans-78910ec0b2d46b9f4933556ba3d6863ca9bbcbefa8a4c811dce36f7026d04de8.png" width="35" height="31" alt="" /> GOV.UK
					</a>
				</div>
				<a href="#search" className="search-toggle js-header-toggle">Search</a>

				<form id="search" className="site-search" action="/search" method="get" role="search">
					<div className="content">
						<label for="site-search-text">Search</label>
						<input type="search" name="q" id="site-search-text" title="Search" className="js-search-focus" />
						<input className="submit" type="submit" value="Search" />
					</div>
				</form>
			</div>			
		</div>
	</header>
	<div id="global-header-bar"></div>
	<div id="global-breadcrumb" className="header-context">
		<ol className="group">
			<li><Link to="/">Home</Link> > {this.props.currentApplicant}</li>
		</ol>
	</div>
</div>

	)     
   }
});

var ApplicantPage = React.createClass({
	    renderList : function (key) {
        return ( <Applicant key={key} index={key} applicantDetails={this.props.route.applicants[key]}/>)
    },
    render : function () {
        return (
            <div>
            <Header currentApplicant={this.props.route.applicants[this.props.params.ApplicantId].name} />
            <main id="page-container">
            
            <div className="grid-row">
					<div className="column-two-thirds">
						 <h1>{this.props.route.applicants[this.props.params.ApplicantId].name}</h1>
                <p>D.O.B: {this.props.route.applicants[this.props.params.ApplicantId].dob}</p>
                <h4>Experience</h4>
                <p>{this.props.route.applicants[this.props.params.ApplicantId].experience}</p>
					</div>
					<div className="column-third">
						  <ul className="applicant-list">
                 {Object.keys(this.props.route.applicants).map(this.renderList)}   
                </ul>
					</div>
				</div>
                
                </main>   
            	<Footer />
            </div>
        )       
    }       
});


var App = React.createClass({
 getInitialState: function() {
        return {
            applicants: {
                applicant_1 : {
                    name : 'John Smith',
                    dob : '24/08/1985',
                    experience : 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
                },
                applicant_2 : {
                    name : 'Doris Brazier',
                    dob : '24/08/1986',
                    experience : 'Proin leo sem, tristique ac molestie a, condimentum eget elit. Proin aliquam eget augue eu congue. Ut fermentum dapibus purus, ac varius libero lacinia sed. Etiam lobortis odio neque, eu ullamcorper erat semper id. Mauris sit amet erat lectus. Fusce ornare, massa at sagittis iaculis, mauris massa dapibus nibh, sit amet fringilla diam ligula id massa. In interdum convallis tellus, semper bibendum sapien. Ut ac justo a felis bibendum ultrices non sed justo. Proin tincidunt suscipit erat, et porta urna fermentum nec. Aliquam erat volutpat. Maecenas vitae placerat lectus. Cras non sem vel tortor fringilla finibus. Duis vitae sapien nulla. Maecenas id egestas dolor.',
                },
                applicant_3 : {
                    name : 'Harry Stevenson',
                    dob : '24/08/1987',
                    experience : 'Vivamus accumsan mattis lacinia. Sed porta interdum placerat. Integer a tincidunt lorem. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nullam a purus id velit dapibus gravida. Curabitur efficitur ligula vel enim consectetur posuere. Duis porta ut justo sed finibus. Etiam suscipit, nisi a tempus mollis, tortor tellus vulputate felis, eget malesuada odio ante in sem. Fusce posuere aliquet velit, vitae molestie nibh convallis sit amet. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce et faucibus arcu, sed finibus nisl. Integer malesuada vulputate tempus. Ut et orci eu lectus volutpat dapibus eu id lectus. Phasellus venenatis sapien enim, nec efficitur urna mollis a. Cras sed eleifend leo, quis luctus mi. Sed lobortis eleifend quam, at lacinia mi dapibus malesuada.',
                },
                 applicant_4 : {
                    name : 'Imran Ramsen',
                    dob : '24/08/1985',
                    experience : 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
                },
                applicant_5 : {
                    name : 'Sharon Davies',
                    dob : '24/08/1986',
                    experience : 'Proin leo sem, tristique ac molestie a, condimentum eget elit. Proin aliquam eget augue eu congue. Ut fermentum dapibus purus, ac varius libero lacinia sed. Etiam lobortis odio neque, eu ullamcorper erat semper id. Mauris sit amet erat lectus. Fusce ornare, massa at sagittis iaculis, mauris massa dapibus nibh, sit amet fringilla diam ligula id massa. In interdum convallis tellus, semper bibendum sapien. Ut ac justo a felis bibendum ultrices non sed justo. Proin tincidunt suscipit erat, et porta urna fermentum nec. Aliquam erat volutpat. Maecenas vitae placerat lectus. Cras non sem vel tortor fringilla finibus. Duis vitae sapien nulla. Maecenas id egestas dolor.',
                },
                applicant_6 : {
                    name : 'Michelle Epson',
                    dob : '24/08/1987',
                    experience : 'Vivamus accumsan mattis lacinia. Sed porta interdum placerat. Integer a tincidunt lorem. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nullam a purus id velit dapibus gravida. Curabitur efficitur ligula vel enim consectetur posuere. Duis porta ut justo sed finibus. Etiam suscipit, nisi a tempus mollis, tortor tellus vulputate felis, eget malesuada odio ante in sem. Fusce posuere aliquet velit, vitae molestie nibh convallis sit amet. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce et faucibus arcu, sed finibus nisl. Integer malesuada vulputate tempus. Ut et orci eu lectus volutpat dapibus eu id lectus. Phasellus venenatis sapien enim, nec efficitur urna mollis a. Cras sed eleifend leo, quis luctus mi. Sed lobortis eleifend quam, at lacinia mi dapibus malesuada.',
                },
            }
        }
    },

  render : function () {
    return(
		<Router history={browserHistory} >
			<Route path="/" component={MainLayout} applicants={this.state.applicants} />
			<Route path="/:ApplicantId" component={ApplicantPage} applicants={this.state.applicants}/>
		</Router>
    )
}
});

ReactDOM.render(<App />, document.querySelector('#main'));






