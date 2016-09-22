'use strict';

var ApplicantListApp = React.createClass({
    displayName: 'ApplicantListApp',

    getInitialState: function getInitialState() {
        return {
            applicants: {
                applicant_1: {
                    name: 'John Smith',
                    dob: '24/08/1985',
                    experience: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.'
                },
                applicant_2: {
                    name: 'Jane Simmons',
                    dob: '24/08/1986',
                    experience: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.'
                },
                applicant_3: {
                    name: 'Dave Kravets',
                    dob: '24/08/1987',
                    experience: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.'
                }
            }
        };
    },

    addApplicant: function addApplicant(applicant) {
        //update state object
        //this.state.applicants['applicant-' + timestamp] = this.refs.input.value;
        this.state.applicants['applicant-' + new Date().getTime()] = applicant;
        //set the state
        this.setState({ applicants: this.state.applicants });
        //console.table(this.state.applicants);
    },

    // handleKeyPress : function (target) {
    //  if (target.charCode == 13) {
    //  var timestamp = (new Date()).getTime();
    //  //update state - [content] is the object key, after '=' is the value
    //  this.state.applicants['applicant-' + timestamp] = this.refs.input.value;
    //  //set the state
    //  this.setState({applicants: this.state.applicants});
    //  //reset input
    //  this.refs.input.value = "";         
    //  }
    // },

    renderList: function renderList(key) {
        // render html return ( <li key={key} >{this.state.applicants[key]} </li>)
        return React.createElement(Applicant, { key: key, index: key, applicantDetails: this.state.applicants[key] });
    },

    render: function render() {
        return React.createElement(
            'div',
            null,
            React.createElement(
                'ul',
                null,
                Object.keys(this.state.applicants).map(this.renderList)
            )
        );
    }
});

var Applicant = React.createClass({
    displayName: 'Applicant',

    render: function render() {
        return React.createElement(
            'div',
            { className: 'applicant' },
            React.createElement(
                'li',
                null,
                this.props.applicantDetails.name,
                ' '
            ),
            React.createElement(
                'div',
                { className: 'applicant_info' },
                React.createElement(
                    'li',
                    null,
                    this.props.applicantDetails.dob
                ),
                React.createElement(
                    'li',
                    null,
                    this.props.applicantDetails.experience
                )
            )
        );
    }
});

var ApplicantInput = React.createClass({
    displayName: 'ApplicantInput',

    handleKeyPress: function handleKeyPress(target) {
        if (target.charCode == 13) {
            //using the component property 'addApplicantToRoot' we are passing the value up to the root app
            this.props.addApplicantToRoot(this.refs.input.value);
            //reset input           
            this.refs.input.value = "";
        }
    },
    render: function render() {
        return React.createElement('input', { type: 'text', ref: 'input', onKeyPress: this.handleKeyPress });
    }
});

ReactDOM.render(React.createElement(ApplicantListApp, null), document.querySelector('#react_applicants'));


// todo - search wip - low priority
// $(document).ready(function() {
//     $(".print-link a").attr("target", "_blank");
//     var t = $(".js-search-focus");
//     if (t.each(function(t, e) {
//         "" !== $(e).val() && $(e).addClass("focus")
//     }),
//     t.on("focus", function(t) {
//         $(t.target).addClass("focus")
//     }),
//     t.on("blur", function(t) {
//         "" === $(t.target).val() && $(t.target).removeClass("focus")
//     }),
//     window.GOVUK) {
//         GOVUK.userSurveys && GOVUK.userSurveys.init();
//         var e = "label.selectable input[type='radio'], label.selectable input[type='checkbox']";
//         new GOVUK.SelectionButtons(e),
//         GOVUK.webchat && GOVUK.webchat.init()
//     }
// })