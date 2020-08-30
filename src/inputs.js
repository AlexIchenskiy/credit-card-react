import React from 'react';

function isCharNum(x) {
	if ('0' <= x && x <= '9') {
		return true;
	} else {
		return false;
	}
}

class TextInput extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			value: '',
			prev: 0,
		}
		this.handleChange = this.handleChange.bind(this);
	}

	handleChange(event) {
		let val = event.target.value;
		if ((this.props.name === 'cardnumber' && 
				 val.length <= 19 &&
				 isCharNum(val[val.length - 1])) || 
			     val === ''
			) {
				for (let i = 0; i < val.length; i++) {
					if ((i === 4 || i === 9 || i === 14)) {
						val = val.substring(0, i) + '-' + val.substring(i, val.length);
					} else if ((val[i] === '-' && i !== 4 && i !== 9 && i !== 14)) {
						val = val.substring(0,i) + val.substring(i+1, val.length);
					}
				}
				this.setState({value: val, prev: val.length,});
				this.props.update(val);
		} else if (this.props.name === 'cardnumber') {
			if (this.state.prev+1 > val.length && val[val.length-1] === '-') {
				val = val.substring(0, val.length-1);
				this.setState({value: val,});
				this.props.update(val);
			}
		} else if ((this.props.name === 'cvc' && isCharNum(val[val.length - 1]) && val.length <= 3) || val === '') {
			this.setState({value: val,});
			this.props.update(val);
		} else if (this.props.name === 'cvc') {
			return;
		} else {
			val = val[0].toUpperCase() + val.substring(1).toLowerCase();
			if (!isCharNum(val[val.length - 1]) && val.length <= 9 && val[val.length - 1] !== ' ') {
				this.setState({value: val,});
				this.props.update(val);
			}
		}
	}

	render() {
	return (
		<div className = {[this.props.name, "couple"].join(" ")}>
			<label for = {this.props.name}>{this.props.title}</label>
			<input type = "text" name = {this.props.name} id = {this.props.name} value = {this.state.value} autocomplete="off" onChange = {this.handleChange}/>
		</div>
	);
	}
}

class SelectInput extends React.Component {
	constructor(props) {
		super(props);
		if (this.props.name === "year") {
			let years = [];
			let yearNow = new Date().getFullYear();
			let yearThen = yearNow + 11;

			while(yearNow < yearThen) {
				years.push(<option key={yearNow} value={yearNow}>{yearNow}</option>);
				yearNow++;
			}

			this.state = {
				content: [<option value="" selected disabled>Select {this.props.title.toLowerCase()}</option>].concat(years),
				value: years[0],
				prev: 'YYYY',
			}
		} else {
			let months = [];
			let monthNow = 1;
			let monthThen = monthNow + 11;

			while(monthNow <= monthThen) {
				months.push(<option key={monthNow} value={monthNow}>{monthNow < 10 ? '0' + monthNow : monthNow}</option>);
				monthNow++;
			}

			this.state = {
				content: [<option value="" selected disabled>Select {this.props.title.toLowerCase()}</option>].concat(months),
				value: 1,
				prev: 'MM',
			}
		}

		this.handleChange = this.handleChange.bind(this);
	}

	handleChange(event) {
		if (event.target.value !== this.state.value) {
			this.setState({value: event.target.value,});
			this.props.updatePrev(this.state.prev);
			this.props.update(event.target.value);
			this.setState({prev: event.target.value,});
		}
	}

	render() {
		return (
			<div className = {[this.props.name, "couple"].join(" ")}>
				<label for={this.props.name}>{this.props.title}</label>
				<select name={this.props.name} id={this.props.name} value={this.state.value} onChange={this.handleChange}>
					{this.state.content}
				</select>
			</div>
		);
	}
}

export {
	TextInput, 
	SelectInput
};