import React from 'react';
import './App.css';
import visalogo from './visalogo.png';
import cardchip from './cardchip.png';

import {TextInput, SelectInput} from './inputs.js';
import {CardNumberChar, MonthChar, YearChar, NameChar} from './output.js';

class Card extends React.Component {
	render(){
		return (
			<div className = "card">
				<div className = "cardinner" style = {{transform: this.props.styles}}>
					<div className = "front">
						<div className = {this.props.focus} 
							 style = {this.props.focus === 'firstnamewrap wrap' ? {width: (this.props.fname.length*15 + 24)+'px'} : 
							 		 (this.props.focus === 'lastnamewrap wrap' ? {left: (this.props.fname.length*15 + 52)+'px', width: (this.props.lname.length*15+28)+'px'} : 
							 		  this.props.focus === 'monthwrap wrap' && this.props.month[0] !== 'MM' ? {width: 32+'px', left: 433+'px'} : 
							 		 (this.props.focus === 'monthwrap wrap' ? {width: 45+'px'} : {}))}></div>
						<div className = "cardimg">
							<img className = "chip" src = {cardchip} alt = "chip" />
							<img className = "logo" src = {visalogo} alt = "logo" />
						</div>
						<div className = "cardnumber">
							<label htmlFor="cardnumber"  className = "numbertitle title"><span>Card number</span></label>
							<label htmlFor="cardnumber" className = "numberchars">
								<CardNumberChar name = "cardnumber" cardnumber = {this.props.cardnumber} />
							</label>
						</div>
						<div className = "namedate">
							<div className = "fullname">
								<span className = "title">Cardholder name</span>
								<span className = "subtitle letterswrap">
									<label htmlFor="firstname" className = "letters" style = {{width: (this.props.fname.length*15 + 20)+'px'}}>
										<NameChar name = "fname" sname = {this.props.fname}/>
									</label> 
									<label htmlFor="lastname" className = "letters" style = {{left: (this.props.fname.length*15 + 65)+'px', width: (this.props.lname.length*15+20)+'px'}}>
										<NameChar name = "lname" sname = {this.props.lname}/>
									</label>
								</span>
							</div>
							<div className = "datecard">
								<span className = "title">Expiration date</span>
								<span className = "subtitle">
									<label htmlFor="month" className = "datechars monthchars">
										<MonthChar name = "month" month = {this.props.month} />
									</label>
									<span className = "datechars">/</span>
									<label htmlFor="year" className = "datechars">
										<YearChar name = "year" year = {this.props.year} />
									</label>
								</span>
							</div>
						</div>
					</div>
					<div className = "back">
						<div className = "blackline"></div>
						<div className = "cvc">
							<div className = "signature"></div>
							<div className = "cvcnumber"><NameChar name = "cvc" sname = {this.props.cvc}/></div>
						</div>
						<div className = "custnum">
							<div className = "custserv title">Customer service number</div>
							<div className = "custnumber subtitle">1-800-555-555</div>
						</div>
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
			disabled: 1,
			focus: false,
			focused: false,
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

	toggleTransformInput = () => {
		this.props.toggleTransform();
		clearTimeout(this.timeOutId);
	};

	untoggleTransformInput = () => {
		this.props.untoggleTransform();
		this.timeOutId = setTimeout(() => {
		this.setState({
			focus: false
			});
		});
	};

	updateStyle = (classnm) => {
		clearTimeout(this.timeOut);
		this.props.updateFocus(classnm);
	};

	blurStyle = () => {
		this.timeOut = setTimeout(() => {
		this.setState({
			focused: false
			});
		});
	}

	componentDidUpdate = (prevProps, prevState) => {
		let check = false;
		for (let i = 0; i < 19; i++) {
			if (this.state.cardnumber[i].length === 2 && this.state.cardnumber[i][0] === "#") {
				check = false;
			} else {
				check = true;
			}
		}
		if (this.state.fname.length > 1          &&
		    this.state.fname !== 'Name'          &&
			this.state.lname.length > 1          &&
			this.state.lname !== 'Surname'       &&
			check &&
			this.state.year !== 'YY'             &&
			this.state.month !== 'MM'            &&
			this.state.cvc.length === 3) {
			if (prevState.disabled !== 0) {
				this.setState({disabled: 0,});
			}
			
		} else {
			if (prevState.disabled !== 1) {
				this.setState({disabled: 1,});
			}
		}
		if (document.activeElement.id == '') {
			this.updateStyle('wrap wrapall');
		}
	};

	render() {
		return (
			<div className = "inputs">
				<form>
					<div className = "flname">
						<TextInput name = "firstname" title = "Name" update = {this.updateFNameInput} updateFoc = {this.updateStyle} blur = {this.blurStyle} />
						<TextInput name = "lastname" title = "Surname" update = {this.updateLNameInput} updateFoc = {this.updateStyle} blur = {this.blurStyle} />
				    </div>
				    <div className = "numbercvc">
				    	<TextInput name = "cardnumber" title = "Card number" update = {this.updateNumberInput} updateFoc = {this.updateStyle} blur = {this.blurStyle} />
				    	<TextInput name = "cvc" title = "CVC" update = {this.updateCvcInput}  onFocus = {this.toggleTransformInput} onBlur = {this.untoggleTransformInput} updateFoc = {this.updateStyle} />
				    </div>
				  	<div className = "date">
						<SelectInput name="year" title = "Year" content = "years" updatePrev = {this.updatePrevYearInput} update = {this.updateYearInput} updateFoc = {this.updateStyle} blur = {this.blurStyle} />
						<SelectInput name="month" title = "Month" content = "months" updatePrev = {this.updatePrevMonthInput} update = {this.updateMonthInput} updateFoc = {this.updateStyle} blur = {this.blurStyle} />
					</div>
				  <input type="submit" value="Submit" className = "submitbutton" onClick={e => {e.preventDefault();}} disabled = {this.state.disabled}/>
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
			styles: 'rotateY(0deg)',
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

	toggleTransform = () => {
		this.setState({styles: 'rotateY(180deg)',});
	};

	untoggleTransform = () => {
		this.setState({styles: 'rotateY(0deg)',});
	};

	updateFocus = (classnm) => {
		if (this.state.classnm !== classnm) {
			this.setState({classnm: classnm,});
		}
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
					styles     = {this.state.styles}
					focus      = {this.state.classnm}
				/>
				<Inputs
					updateFName       = {this.updateFName}
					updateLName       = {this.updateLName}
					updateNumber      = {this.updateNumber}
					updateCvc         = {this.updateCvc}
					updateYear        = {this.updateYear}
					updatePrevYear    = {this.updatePrevYear}
					updateMonth       = {this.updateMonth}
					updatePrevMonth   = {this.updatePrevMonth}
					toggleTransform   = {this.toggleTransform}
					untoggleTransform = {this.untoggleTransform}
					updateFocus       = {this.updateFocus}
				/>
			</div>
		);
	}
}

export default App;