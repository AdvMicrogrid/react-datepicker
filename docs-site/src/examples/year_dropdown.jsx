import React from 'react'
import DatePicker from 'react-datepicker'
import moment from 'moment'
import createClass from 'create-react-class'

export default createClass({
  displayName: 'YearDropdown',

  getInitialState () {
    return {
      startDate: moment()
    }
  },

  handleChange (date) {
    this.setState({
      startDate: date
    })
  },

  render () {
    return <div className="row">
      <pre className="column example__code">
        <code className="jsx">
          {"<DatePicker"}<br />
              {"selected={this.state.startDate}"}<br />
              {"onChange={this.handleChange}"} <br />
              {"showYearDropdown"} <br />
              {"dateFormatCalendar=\"MMMM\" />"}
        </code>
      </pre>
      <div className="column">
        <DatePicker
            selected={this.state.startDate}
            onChange={this.handleChange}
            showYearDropdown
            dateFormatCalendar="MMMM" />
      </div>
    </div>
  }
})
