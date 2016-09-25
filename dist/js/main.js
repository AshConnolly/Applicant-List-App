"use strict";

// var { Router, Route, IndexRoute, Link, browserHistory } = ReactRouter

var _ReactRouter = ReactRouter;
var Router = _ReactRouter.Router;
var Route = _ReactRouter.Route;
var IndexRoute = _ReactRouter.IndexRoute;
var Link = _ReactRouter.Link;
var Navigation = ReactRouter.Navigation; // mixin
var browserHistory = _ReactRouter.browserHistory;

var MainLayout = React.createClass({
	displayName: "MainLayout",

	//todo    
	/*    addApplicant: function(applicant) {
         //this.state.applicants['applicant-' + timestamp] = this.refs.input.value;
         this.state.applicants['applicant-' + (new Date()).getTime()] = applicant;
         this.setState({applicants: this.state.applicants});
     },*/

	renderList: function renderList(key) {
		return React.createElement(Applicant, { key: key, index: key, applicantDetails: this.props.route.applicants[key] });
	},

	render: function render() {
		return React.createElement(
			"div",
			null,
			React.createElement(Header, null),
			React.createElement(
				"main",
				{ id: "page-container" },
				React.createElement(IntroText, null),
				React.createElement(
					"div",
					{ className: "grid-row" },
					React.createElement(
						"div",
						{ className: "column-three-thirds" },
						React.createElement(
							"ul",
							{ className: "applicant-list" },
							Object.keys(this.props.route.applicants).map(this.renderList)
						)
					)
				)
			),
			React.createElement(Footer, null)
		);
	}
});

var Applicant = React.createClass({
	displayName: "Applicant",

	goToApplicant: function goToApplicant(e) {
		e.preventDefault();
		var ApplicantId = this.props.index;
		browserHistory.push(ApplicantId);
	},
	render: function render() {
		return React.createElement(
			"li",
			null,
			React.createElement(
				"a",
				{ className: "applicant", onClick: this.goToApplicant },
				this.props.applicantDetails.name
			)
		);
	}
});

var IntroText = React.createClass({
	displayName: "IntroText",

	render: function render() {
		return React.createElement(
			"div",
			null,
			React.createElement(
				"div",
				{ className: "grid-row" },
				React.createElement(
					"header",
					{ className: "column-three-thirds" },
					React.createElement(
						"h1",
						null,
						"Applicants"
					)
				)
			),
			React.createElement(
				"div",
				{ className: "grid-row" },
				React.createElement(
					"div",
					{ className: "column-three-thirds" },
					React.createElement(
						"p",
						null,
						"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
					)
				)
			)
		);
	}
});

var Footer = React.createClass({
	displayName: "Footer",

	render: function render() {
		return React.createElement(
			"footer",
			{ className: "group js-footer", id: "footer", role: "contentinfo" },
			React.createElement(
				"div",
				{ className: "footer-wrapper" },
				React.createElement(
					"div",
					{ className: "footer-categories" },
					React.createElement(
						"div",
						{ className: "footer-explore" },
						React.createElement(
							"h2",
							null,
							"Services and information"
						),
						React.createElement(
							"ul",
							null,
							React.createElement(
								"li",
								null,
								React.createElement(
									"a",
									{ href: "/browse/benefits" },
									"Benefits"
								)
							),
							React.createElement(
								"li",
								null,
								React.createElement(
									"a",
									{ href: "/browse/births-deaths-marriages" },
									"Births, deaths, marriages and care"
								)
							),
							React.createElement(
								"li",
								null,
								React.createElement(
									"a",
									{ href: "/browse/business" },
									"Business and self-employed"
								)
							),
							React.createElement(
								"li",
								null,
								React.createElement(
									"a",
									{ href: "/browse/childcare-parenting" },
									"Childcare and parenting"
								)
							),
							React.createElement(
								"li",
								null,
								React.createElement(
									"a",
									{ href: "/browse/citizenship" },
									"Citizenship and living in the UK"
								)
							),
							React.createElement(
								"li",
								null,
								React.createElement(
									"a",
									{ href: "/browse/justice" },
									"Crime, justice and the law"
								)
							),
							React.createElement(
								"li",
								null,
								React.createElement(
									"a",
									{ href: "/browse/disabilities" },
									"Disabled people"
								)
							),
							React.createElement(
								"li",
								null,
								React.createElement(
									"a",
									{ href: "/browse/driving" },
									"Driving and transport"
								)
							)
						),
						React.createElement(
							"ul",
							null,
							React.createElement(
								"li",
								null,
								React.createElement(
									"a",
									{ href: "/browse/education" },
									"Education and learning"
								)
							),
							React.createElement(
								"li",
								null,
								React.createElement(
									"a",
									{ href: "/browse/employing-people" },
									"Employing people"
								)
							),
							React.createElement(
								"li",
								null,
								React.createElement(
									"a",
									{ href: "/browse/environment-countryside" },
									"Environment and countryside"
								)
							),
							React.createElement(
								"li",
								null,
								React.createElement(
									"a",
									{ href: "/browse/housing-local-services" },
									"Housing and local services"
								)
							),
							React.createElement(
								"li",
								null,
								React.createElement(
									"a",
									{ href: "/browse/tax" },
									"Money and tax"
								)
							),
							React.createElement(
								"li",
								null,
								React.createElement(
									"a",
									{ href: "/browse/abroad" },
									"Passports, travel and living abroad"
								)
							),
							React.createElement(
								"li",
								null,
								React.createElement(
									"a",
									{ href: "/browse/visas-immigration" },
									"Visas and immigration"
								)
							),
							React.createElement(
								"li",
								null,
								React.createElement(
									"a",
									{ href: "/browse/working" },
									"Working, jobs and pensions"
								)
							)
						)
					),
					React.createElement(
						"div",
						{ className: "footer-inside-government" },
						React.createElement(
							"h2",
							null,
							"Departments and policy"
						),
						React.createElement(
							"ul",
							null,
							React.createElement(
								"li",
								null,
								React.createElement(
									"a",
									{ href: "/government/how-government-works" },
									"How government works"
								)
							),
							React.createElement(
								"li",
								null,
								React.createElement(
									"a",
									{ href: "/government/organisations" },
									"Departments"
								)
							),
							React.createElement(
								"li",
								null,
								React.createElement(
									"a",
									{ href: "/government/world" },
									"Worldwide"
								)
							),
							React.createElement(
								"li",
								null,
								React.createElement(
									"a",
									{ href: "/government/policies" },
									"Policies"
								)
							),
							React.createElement(
								"li",
								null,
								React.createElement(
									"a",
									{ href: "/government/publications" },
									"Publications"
								)
							),
							React.createElement(
								"li",
								null,
								React.createElement(
									"a",
									{ href: "/government/announcements" },
									"Announcements"
								)
							)
						)
					),
					React.createElement("hr", null)
				),
				React.createElement(
					"div",
					{ className: "footer-meta" },
					React.createElement(
						"div",
						{ className: "footer-meta-inner" },
						React.createElement(
							"h2",
							{ className: "visuallyhidden" },
							"Support links"
						),
						React.createElement(
							"ul",
							null,
							React.createElement(
								"li",
								null,
								React.createElement(
									"a",
									{ href: "/help" },
									"Help"
								)
							),
							React.createElement(
								"li",
								null,
								React.createElement(
									"a",
									{ href: "/help/cookies" },
									"Cookies"
								)
							),
							React.createElement(
								"li",
								null,
								React.createElement(
									"a",
									{ href: "/contact" },
									"Contact"
								)
							),
							React.createElement(
								"li",
								null,
								React.createElement(
									"a",
									{ href: "/help/terms-conditions" },
									"Terms and conditions"
								)
							),
							React.createElement(
								"li",
								null,
								React.createElement(
									"a",
									{ href: "/cymraeg", lang: "cy", hreflang: "cy" },
									"Rhestr o Wasanaethau Cymraeg"
								)
							),
							React.createElement(
								"li",
								null,
								"Built by the ",
								React.createElement(
									"a",
									{ href: "https://www.gov.uk/government/organisations/government-digital-service" },
									"Government Digital Service"
								)
							)
						),
						React.createElement(
							"div",
							{ className: "open-government-licence" },
							React.createElement(
								"p",
								{ className: "logo" },
								React.createElement(
									"a",
									{ href: "https://www.nationalarchives.gov.uk/doc/open-government-licence/version/3/", rel: "license" },
									"Open Government Licence"
								)
							),
							React.createElement(
								"p",
								null,
								"All content is available under the ",
								React.createElement(
									"a",
									{ href: "https://www.nationalarchives.gov.uk/doc/open-government-licence/version/3/", rel: "license" },
									"Open Government Licence v3.0"
								),
								", except where otherwise stated"
							)
						)
					),
					React.createElement(
						"div",
						{ className: "copyright" },
						React.createElement(
							"a",
							{ href: "http://www.nationalarchives.gov.uk/information-management/re-using-public-sector-information/copyright-and-re-use/crown-copyright/" },
							"© Crown copyright"
						)
					)
				)
			)
		);
	}
});

var Header = React.createClass({
	displayName: "Header",


	render: function render() {
		var styles = { color: 'white' };
		return React.createElement(
			"div",
			null,
			React.createElement(
				"header",
				{ role: "banner", id: "global-header", className: "" },
				React.createElement(
					"div",
					{ className: "header-wrapper" },
					React.createElement(
						"div",
						{ className: "header-global" },
						React.createElement(
							"div",
							{ className: "header-logo" },
							React.createElement(
								"a",
								{ href: "https://www.gov.uk", title: "Go to the GOV.UK homepage", id: "logo", className: "content" },
								React.createElement("img", { src: "https://assets.publishing.service.gov.uk/static/gov.uk_logotype_crown_invert_trans-78910ec0b2d46b9f4933556ba3d6863ca9bbcbefa8a4c811dce36f7026d04de8.png", width: "35", height: "31", alt: "" }),
								" GOV.UK"
							)
						),
						React.createElement(
							"a",
							{ href: "#search", className: "search-toggle js-header-toggle" },
							"Search"
						),
						React.createElement(
							"form",
							{ id: "search", className: "site-search", action: "/search", method: "get", role: "search" },
							React.createElement(
								"div",
								{ className: "content" },
								React.createElement(
									"label",
									{ "for": "site-search-text" },
									"Search"
								),
								React.createElement("input", { type: "search", name: "q", id: "site-search-text", title: "Search", className: "js-search-focus" }),
								React.createElement("input", { className: "submit", type: "submit", value: "Search" })
							)
						)
					)
				)
			),
			React.createElement("div", { id: "global-header-bar" }),
			React.createElement(
				"div",
				{ id: "global-breadcrumb", className: "header-context" },
				React.createElement(
					"ol",
					{ className: "group" },
					React.createElement(
						"li",
						null,
						React.createElement(
							Link,
							{ to: "/" },
							"Home"
						),
						" > ",
						this.props.currentApplicant
					)
				)
			)
		);
	}
});

var ApplicantPage = React.createClass({
	displayName: "ApplicantPage",

	renderList: function renderList(key) {
		return React.createElement(Applicant, { key: key, index: key, applicantDetails: this.props.route.applicants[key] });
	},
	render: function render() {
		return React.createElement(
			"div",
			null,
			React.createElement(Header, { currentApplicant: this.props.route.applicants[this.props.params.ApplicantId].name }),
			React.createElement(
				"main",
				{ id: "page-container" },
				React.createElement(
					"div",
					{ className: "grid-row" },
					React.createElement(
						"div",
						{ className: "column-two-thirds" },
						React.createElement(
							"h1",
							null,
							this.props.route.applicants[this.props.params.ApplicantId].name
						),
						React.createElement(
							"p",
							null,
							"D.O.B: ",
							this.props.route.applicants[this.props.params.ApplicantId].dob
						),
						React.createElement(
							"h4",
							null,
							"Experience"
						),
						React.createElement(
							"p",
							null,
							this.props.route.applicants[this.props.params.ApplicantId].experience
						)
					),
					React.createElement(
						"div",
						{ className: "column-third" },
						React.createElement(
							"ul",
							{ className: "applicant-list" },
							Object.keys(this.props.route.applicants).map(this.renderList)
						)
					)
				)
			),
			React.createElement(Footer, null)
		);
	}
});

var App = React.createClass({
	displayName: "App",

	getInitialState: function getInitialState() {
		return {
			applicants: {
				applicant_1: {
					name: 'John Smith',
					dob: '24/08/1985',
					experience: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
				},
				applicant_2: {
					name: 'Doris Brazier',
					dob: '12/05/1975',
					experience: 'Proin leo sem, tristique ac molestie a, condimentum eget elit. Proin aliquam eget augue eu congue. Ut fermentum dapibus purus, ac varius libero lacinia sed. Etiam lobortis odio neque, eu ullamcorper erat semper id. Mauris sit amet erat lectus. Fusce ornare, massa at sagittis iaculis, mauris massa dapibus nibh, sit amet fringilla diam ligula id massa. In interdum convallis tellus, semper bibendum sapien. Ut ac justo a felis bibendum ultrices non sed justo. Proin tincidunt suscipit erat, et porta urna fermentum nec. Aliquam erat volutpat. Maecenas vitae placerat lectus. Cras non sem vel tortor fringilla finibus. Duis vitae sapien nulla. Maecenas id egestas dolor.'
				},
				applicant_3: {
					name: 'Harry Stevenson',
					dob: '17/10/1958',
					experience: 'Vivamus accumsan mattis lacinia. Sed porta interdum placerat. Integer a tincidunt lorem. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nullam a purus id velit dapibus gravida. Curabitur efficitur ligula vel enim consectetur posuere. Duis porta ut justo sed finibus. Etiam suscipit, nisi a tempus mollis, tortor tellus vulputate felis, eget malesuada odio ante in sem. Fusce posuere aliquet velit, vitae molestie nibh convallis sit amet. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce et faucibus arcu, sed finibus nisl. Integer malesuada vulputate tempus. Ut et orci eu lectus volutpat dapibus eu id lectus. Phasellus venenatis sapien enim, nec efficitur urna mollis a. Cras sed eleifend leo, quis luctus mi. Sed lobortis eleifend quam, at lacinia mi dapibus malesuada.'
				},
				applicant_4: {
					name: 'Imran Ramsen',
					dob: '27/01/1976',
					experience: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
				},
				applicant_5: {
					name: 'Sharon Davies',
					dob: '21/04/1980',
					experience: 'Proin leo sem, tristique ac molestie a, condimentum eget elit. Proin aliquam eget augue eu congue. Ut fermentum dapibus purus, ac varius libero lacinia sed. Etiam lobortis odio neque, eu ullamcorper erat semper id. Mauris sit amet erat lectus. Fusce ornare, massa at sagittis iaculis, mauris massa dapibus nibh, sit amet fringilla diam ligula id massa. In interdum convallis tellus, semper bibendum sapien. Ut ac justo a felis bibendum ultrices non sed justo. Proin tincidunt suscipit erat, et porta urna fermentum nec. Aliquam erat volutpat. Maecenas vitae placerat lectus. Cras non sem vel tortor fringilla finibus. Duis vitae sapien nulla. Maecenas id egestas dolor.'
				},
				applicant_6: {
					name: 'Michelle Epson',
					dob: '04/02/1976',
					experience: 'Vivamus accumsan mattis lacinia. Sed porta interdum placerat. Integer a tincidunt lorem. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nullam a purus id velit dapibus gravida. Curabitur efficitur ligula vel enim consectetur posuere. Duis porta ut justo sed finibus. Etiam suscipit, nisi a tempus mollis, tortor tellus vulputate felis, eget malesuada odio ante in sem. Fusce posuere aliquet velit, vitae molestie nibh convallis sit amet. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce et faucibus arcu, sed finibus nisl. Integer malesuada vulputate tempus. Ut et orci eu lectus volutpat dapibus eu id lectus. Phasellus venenatis sapien enim, nec efficitur urna mollis a. Cras sed eleifend leo, quis luctus mi. Sed lobortis eleifend quam, at lacinia mi dapibus malesuada.'
				}
			}
		};
	},

	render: function render() {
		return React.createElement(
			Router,
			{ history: browserHistory },
			React.createElement(Route, { path: "/", component: MainLayout, applicants: this.state.applicants }),
			React.createElement(Route, { path: "/:ApplicantId", component: ApplicantPage, applicants: this.state.applicants })
		);
	}
});

ReactDOM.render(React.createElement(App, null), document.querySelector('#main'));