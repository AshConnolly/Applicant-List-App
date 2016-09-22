
var ApplicantListApp = React.createClass({
        getInitialState: function() {
        return {
            applicants: {
                applicant_1 : {
                    name : 'John Smith',
                    dob : '24/08/1985',
                    experience : 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
                },
                applicant_2 : {
                    name : 'Jane Simmons',
                    dob : '24/08/1986',
                    experience : 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
                },
                applicant_3 : {
                    name : 'Dave Kravets',
                    dob : '24/08/1987',
                    experience : 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
                },
            }
        }
    },
    
    addApplicant: function(applicant) {
        //this.state.applicants['applicant-' + timestamp] = this.refs.input.value;
        this.state.applicants['applicant-' + (new Date()).getTime()] = applicant;
        //set the state
        this.setState({applicants: this.state.applicants});
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
    
    renderList : function (key) {
        return ( <Applicant key={key} index={key} applicantDetails={this.state.applicants[key]}/>)
    },
    
    render: function() {
        return (
            <div>
                {/*<ApplicantInput addApplicantToRoot={this.addApplicant}/>*/}
                <ul>
                    {Object.keys(this.state.applicants).map(this.renderList)}   
                </ul>
            </div>
        )
    }
})

var Applicant = React.createClass ({
    render : function () {
        return(
            <div className="applicant">
                <li>{this.props.applicantDetails.name} </li>
                <div className="applicant_info">
                    <li>{this.props.applicantDetails.dob}</li>
                    <li>{this.props.applicantDetails.experience}</li>
                </div>                  
            </div>
        )
    }
})

var ApplicantInput = React.createClass ({
        handleKeyPress : function (target) {
        if (target.charCode == 13) {
            //using the component property 'addApplicantToRoot' we are passing the value up to the root app
            this.props.addApplicantToRoot(this.refs.input.value);
            //reset input           
            this.refs.input.value = "";         
        }
    },
    render : function () {
        return(
                <input type="text" ref="input" onKeyPress={this.handleKeyPress} />
        )
    }
})


ReactDOM.render(<ApplicantListApp />, document.querySelector('#react_applicants'));
