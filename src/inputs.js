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
			focus: false,
			classnm: 'wrap',
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
	};

	toggleTransformInput = () => {
		this.setState({focus: true,});
		this.props.onFocus();
		clearTimeout(this.timeOutId);
	};

	untoggleTransformInput = () => {
		this.setState({focus: false,});
		this.props.onBlur();
		this.timeOutId = setTimeout(() => {
		this.setState({
			focus: false
			});
		});
	};

	updateClass = (nm) => {
		this.props.updateFoc(this.props.name+'wrap wrap');
	};

	blurClass = () => {
		this.props.blur();
	}

	render() {
	let nm = "wrap"+this.props.name;
	return (
		<div className = {[this.props.name, "couple"].join(" ")}>
			<label htmlFor = {this.props.name}>{this.props.title}</label>
			{this.props.name === 'cvc' ? <input type = "text" name = {this.props.name} id = {this.props.name} value = {this.state.value} autoComplete="off" onChange = {this.handleChange} onFocus = {this.toggleTransformInput} onBlur = {this.untoggleTransformInput} /> :
										 <input type = "text" name = {this.props.name} id = {this.props.name} value = {this.state.value} autoComplete="off" onChange = {this.handleChange} onFocus = {this.updateClass} onBlur = {this.blurClass}/>}
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
				content: [<option value="-1" key = "-1" disabled>Select {this.props.title.toLowerCase()}</option>].concat(years),
				value: -1,
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
				content: [<option value="-1" key = "-2" disabled>Select {this.props.title.toLowerCase()}</option>].concat(months),
				value: -1,
				prev: 'MM',
			}
		}

		this.handleChange = this.handleChange.bind(this);
	}

	updateClass = () => {
		this.props.updateFoc(this.props.name+'wrap wrap');
	};

	blurClass = () => {
		this.props.blur();
	};

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
				<label htmlFor={this.props.name}>{this.props.title}</label>
				<select name={this.props.name} id={this.props.name} value={this.state.value} onChange={this.handleChange} onFocus = {this.updateClass} onBlur = {this.blurClass}>
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