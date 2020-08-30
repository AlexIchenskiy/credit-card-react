import React from 'react';
import './App.css';
import visalogo from './visalogo.png';
import cardchip from './cardchip.png';

import {TextInput, SelectInput} from './inputs.js';
import {CardNumberChar, MonthChar, YearChar, NameChar} from './output.js';

class Card extends React.Component {
	render() {
		return (
			<div className = "card">
				<div className = "wrapper"></div>
				<div className = "cardimg">
					<img className = "chip" src = {cardchip} alt = "chip" />
					<img className = "logo" src = {visalogo} alt = "logo" />
				</div>
				<div className = "cardnumber">
					<label for="cardnumber"  className = "numbertitle title"><span>Card number</span></label>
					<label for="cardnumber" className = "numberchars">
						<CardNumberChar name = "cardnumber" cardnumber = {this.props.cardnumber} />
					</label>
				</div>
				<div className = "namedate">
					<div className = "fullname">
						<span className = "title">Cardholder name</span>
						<span className = "subtitle letterswrap">
							<label for="firstname" className = "letters" style = {{width: (this.props.fname.length*15 + 20)+'px'}}>
								<NameChar name = "fname" sname = {this.props.fname}/>
							</label> 
							<label for="lastname" className = "letters" style = {{left: (this.props.fname.length*15 + 65)+'px', width: (this.props.lname.length*15+20)+'px'}}>
								<NameChar name = "lname" sname = {this.props.lname}/>
							</label>
						</span>
					</div>
					<div className = "datecard">
						<span className = "title">Expiration date</span>
						<span className = "subtitle">
							<label for="month" className = "datechars monthchars">
								<MonthChar name = "month" month = {this.props.month} />
							</label>
							<span className = "datechars">/</span>
							<label for="year" className = "datechars">
								<YearChar name = "year" year = {this.props.year} />
							</label>
						</span>
					</div>
				</div>
			</div>
		);
	}
}

class Inputs extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			fname: '',
			lname: '',
			cardnumber: ['#','#','#','#',' ','#','#','#','#',' ','#','#','#','#',' ','#','#','#','#'],
			year: 'YY',
			prevyear: 'YY',
			month: 'MM',
			prevmonth: 'MM',
			cvc: '',
		}
	}

	updateFNameInput = (fname) => {
		this.setState({fname: fname,});
		this.props.updateFName(fname);
		if (fname.length === 0) {
			this.setState({fname: 'Name',});
			this.props.updateFName('Name');
		}
	};

	updateLNameInput = (lname) => {
		this.setState({lname: lname,});
		this.props.updateLName(lname);
		if (lname.length === 0) {
			this.setState({lname: 'Surname',});
			this.props.updateLName('Surname');
		}
	};

	updateNumberInput = (cardnumber) => {
		let nums = [];
		for (let i = 0; i < 19; i++) {
			if (cardnumber[i] >= '0' && cardnumber[i] <= '9') {
				nums.push(cardnumber[i]);
			} else if (cardnumber[i] === '-') {
				nums.push([' ', i]);
			} else {
				nums.push(['#', i]);
			}
		}
		this.setState({cardnumber: nums,});
		this.props.updateNumber(nums);
	};

	updateCvcInput = (cvc) => {
		this.setState({cvc: cvc,});
		this.props.updateCvc(cvc);
	};

	updateYearInput = (year) => {
		this.setState({year: year,});
		this.props.updateYear(year);
	};

	updatePrevYearInput = (prevyear) => {
		this.setState({prevyear: prevyear,});
		this.props.updatePrevYear(prevyear);
	};

	updateMonthInput = (month) => {
		this.setState({month: month,});
		this.props.updateMonth(month);
	};

	updatePrevMonthInput = (prevmonth) => {
		this.setState({prevmonth: prevmonth,});
		this.props.updatePrevMonth(prevmonth);
	};

	render() {
		return (
			<div className = "inputs">
				<form>
					<div className = "flname">
						<TextInput name = "firstname" title = "Name" update = {this.updateFNameInput} />
						<TextInput name = "lastname" title = "Surname" update = {this.updateLNameInput} />
				    </div>
				    <div className = "numbercvc">
				    	<TextInput name = "cardnumber" title = "Card number" update = {this.updateNumberInput} />
				    	<TextInput name = "cvc" title = "CVC" update = {this.updateCvcInput} />
				    </div>
				  	<div className = "date">
						<SelectInput name="year" title = "Year" content = "years" updatePrev = {this.updatePrevYearInput} update = {this.updateYearInput} />
						<SelectInput name="month" title = "Month" content = "months" updatePrev = {this.updatePrevMonthInput} update = {this.updateMonthInput} />
					</div>
				  <input type="submit" value="Submit" className = "submitbutton" onClick={e => {e.preventDefault();}} />
				</form>
			</div>
		);
	}
}

class App extends React.Component {
	constructor(props) {
		super(props);
		let nums = [];
		for (let i = 0; i < 19; i++) {
			if (i === 4 || i === 9 || i=== 14) {
				nums.push([' ', i]);
			} else {
				nums.push(['#', i]);
			}
		}
		this.state = {
			fname: 'Name',
			lname: 'Surname',
			cardnumber: nums,
			prev: nums,
			prevWhole: nums,
			year: 'YYYY',
			prevyear: 'YYYY',
			month: 'MM',
			prevmonth: 'MM',
			cvc: '',
		}
	}

	updateFName = (fname) => {
		this.setState({fname: fname,});
	};

	updateLName = (lname) => {
		this.setState({lname: lname,});
	};

	updateNumber = (cardnumber) => {
		let nums = [];
		let prev = [];
		for (let i = 0; i < 19; i++) {
			if (cardnumber[i] >= '0' && cardnumber[i] <= '9') {
				nums.push([cardnumber[i], i]);
			} else if (i === 4 || i === 9 || i === 14) {
				nums.push([' ', i]);
			} else {
				nums.push(['#', i]);
			}
			if (nums[i][0] != this.state.prevWhole[i]) {
				prev[i] = this.state.prevWhole[i];
			} else if (nums[i][0] == this.state.prevWhole[i]) {
				prev[i] = '#';
			}
		}
		this.setState({prev: prev,});
		this.setState({cardnumber: nums,});
		this.setState({prevWhole: cardnumber,});
	};

	updateCvc = (cvc) => {
		this.setState({cvc: cvc,});
	};

	updateYear = (year) => {
		this.setState({year: year,});
	};

	updatePrevYear = (prevyear) => {
		this.setState({prevyear: prevyear,});
	};

	updateMonth = (month) => {
		this.setState({month: month,});
	};

	updatePrevMonth = (prevmonth) => {
		this.setState({prevmonth: prevmonth,});
	};

	render() {
		return (
			<div className = "root">
				<Card 
					fname      = {this.state.fname}
					lname      = {this.state.lname}
					cardnumber = {this.state.cardnumber}
					prev       = {this.state.prev}
					cvc        = {this.state.cvc}
					year       = {[this.state.year, this.state.prevyear]}
					month      = {[this.state.month, this.state.prevmonth]}
				/>
				<Inputs
					updateFName      = {this.updateFName}
					updateLName      = {this.updateLName}
					updateNumber     = {this.updateNumber}
					updateCvc        = {this.updateCvc}
					updateYear       = {this.updateYear}
					updatePrevYear   = {this.updatePrevYear}
					updateMonth      = {this.updateMonth}
					updatePrevMonth  = {this.updatePrevMonth}
				/>
			</div>
		);
	}
}

export default App;