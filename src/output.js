import React from 'react';
import uuid from 'react-uuid';

class CardNumberChar extends React.Component {
	constructor(props) {
		super(props);
		let items = [];
		this.props.cardnumber.map(([x, y]) => {
			items.push(
				<span>
					<span 
						className = {x[0] === '#' ? 'char visible' : 'char hidden'}
						key = {y.toString()}>#
					</span>
					<span 
						className =  {x[0] === '#' ? 'char hidden' : 'char visible'}
						key = {(y+20).toString()}>{x[0] === '#' ? '' : x[0]}
					</span>
				</span>
			)});
		this.state = {
			items: items,
		}
	}

	handleChange = (nextProps) => {
		let items = [];
		nextProps.cardnumber.map(([x, y]) => {
			items.push(
				<span>
					<span 
						className = {x[0] === '#' ? 'char visible' : 'char hidden'}
						key = {y.toString()}>#
					</span>
					<span 
						className =  {x[0] === '#' ? 'char hidden' : 'char visible'}
						key = {(y+20).toString()}>{x[0] === '#' ? '' : x[0]}
					</span>
				</span>
			);
		});
		this.setState({items: items,})
	}

	componentWillReceiveProps(nextProps) {
		this.handleChange(nextProps);
	}

	render() {
		return this.state.items
	}
}

class MonthChar extends React.Component {
	constructor(props) {
		super(props);
		let monthitems = [];
		monthitems.push(
			<span>
				<span className = 'char visible' key = 'MM1'>MM</span>
				<span className = 'char hidden' key = 'MM2'>MM</span>
			</span>
		);
		this.state = {
			monthitems: monthitems,
		};
	}

	handleChange = (nextProps) => {
		let monthitems = [];
		monthitems.push(
			<span>
				<span className = 'char chars hiddentoggle hidden' key = {nextProps.month[1]}>{nextProps.month[1] < 10 ? '0'+nextProps.month[1] : nextProps.month[1]}</span>
				<span className = 'char chars visibletoggle' key = {nextProps.month[0]+1}>{nextProps.month[0] < 10 ? '0'+nextProps.month[0] : nextProps.month[0]}</span>
			</span>
		);
		if (nextProps.month[1] !== nextProps.month[0]) {
			this.setState({
				monthitems: monthitems,
			});
		}
	}

	componentWillReceiveProps(nextProps) {
		this.handleChange(nextProps);
	}

	render() {
		return this.state.monthitems
	}
}

class YearChar extends React.Component {
	constructor(props) {
		super(props);
		let yearitems = [];
		yearitems.push(
			<span>
				<span className = 'char visible' key = 'YY1'>YY</span>
				<span className = 'char hidden' key = 'YY2'>YY</span>
			</span>
		);
		this.state = {
			yearitems: yearitems,
		}
	}

	handleChange = (nextProps) => {
		let yearitems = [];
		yearitems.push(
			<span>
				<span className = 'char hiddentoggle hidden' key = {nextProps.year[1].substring(2,4)+20}>{nextProps.year[1].substring(2,4) < 10 ? '0'+nextProps.year[1].substring(2,4) : nextProps.year[1].substring(2,4)}</span>
				<span className = 'char visibletoggle' key = {nextProps.year[0].substring(2,4)+21}>{nextProps.year[0].substring(2,4) < 10 ? '0'+nextProps.year[0].substring(2,4) : nextProps.year[0].substring(2,4)}</span>
			</span>
		);
		if (nextProps.year[0].substring(2,4) !== nextProps.year[1].substring(2,4)) {
			this.setState({
				yearitems: yearitems,
			});
		}
	}

	componentWillReceiveProps(nextProps) {
		this.handleChange(nextProps);
	}

	render() {
		return this.state.yearitems
	}
}

class NameChar extends React.Component {
	constructor(props) {
		super(props);
		let nameitems = [];
		let arr = [];
		this.props.name === 'fname' ? (arr = 'Name'.split('')) : (arr = 'Surname'.split(''));
		arr.map((x) => {
			nameitems.push(
				<span className = "letter">
					<span className = 'char visible' key = {uuid()}>{x}</span>
					<span className = 'char hidden' key = {uuid()}>{x}</span>
				</span>
			);
		})
		this.state = {
			nameitems: nameitems,
			nameitemsprev: this.props.name === 'fname' ? 'Name' : 'Surname',
		}
	}

	handleChange = (nextProps) => {
		let nameitems = [];
		let nameitemsarr = [];
		let next = nextProps.sname;
		let prev = this.state.nameitemsprev;
		if (next !== prev) {
			if (next.length === 0) {
			this.props.name === 'fname' ? (next = 'Name') : (next = 'Surname');
		} else if (prev.length === 0) {
			this.props.name === 'fname' ? (prev = 'Name') : (prev = 'Surname');
		}
		for (let i = 0; i < 9; i++) {
			nameitemsarr.push([next[i] !== undefined ? next[i] : ' ', prev[i] !== undefined ? prev[i] : ' ']);
		}
		nameitemsarr.map(([x, y]) => {
			nameitems.push(
			<span className = "letter">
				<span className = {x !== y ? 'char hiddentoggle hidden' : 'char visible'} key = {uuid()}>{y}</span>
				<span className = {x !== y ? 'char visibletoggle visible' : 'char hidden'} key = {uuid()}>{x}</span>
			</span>
			);
		});
		this.setState({
			nameitems: nameitems,
			nameitemsprev: nextProps.sname,
		});
		}
		
	}

	componentWillReceiveProps(nextProps) {
		this.handleChange(nextProps);
	}

	render() {
		return this.state.nameitems
	}
}

export {
	CardNumberChar,
	MonthChar,
	YearChar,
	NameChar
};