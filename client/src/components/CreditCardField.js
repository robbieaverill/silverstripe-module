import React, { Component } from 'react';
import fieldHolder from 'components/FieldHolder/FieldHolder';

class CreditCardField extends Component {
  constructor(props) {
    super(props);

    // Get initial value from props
    const splitValue = props.value.split('-');

    // Initialise the state
    this.state = {
      values: {
        1: splitValue[0] || '',
        2: splitValue[1] || '',
        3: splitValue[2] || '',
        4: splitValue[3] || '',
      },
      value: '',
    };
  }

  /**
   * When an input value changes, assign the value of the changed input to the state
   *
   * @param {object} event
   * @param {number} id
   */
  onChange(event, id) {
    // Merge existing "values" state entries with the new one
    const newState = {
      values: {
        ...this.state.values,
        [id]: event.target.value,
      },
    };

    this.setState(newState);
  }

  /**
   * Gets a specific value from the state
   *
   * @param {number} id
   * @returns {string}
   */
  getValue(id) {
    return this.state.values[id] || '';
  }

  /**
   * Implode the state values into a dash delimited string
   *
   * @returns {string}
   */
  implodeValues() {
    const values = Object.values(this.state.values);
    const value = values.join('-');

    // If nothing has been stored at all yet, don't send back "---"
    if (value === '---') {
      return '';
    }
    return value;
  }

  /**
   * Update the component's state with the new value whenever an input is changed
   *
   * @returns {DOMElement}
   */

  render() {
    const { name } = this.props;

    return (
      <div className="credit-card input-group">
        {
          /* Create four separate inputs, indexed by a number */
          [1, 2, 3, 4].map((id) => (
            <input
              key={id}
              type="text"
              className="form-control credit-card__input"
              name={`${name}_${id}`}
              maxLength={4}
              /* Use state to store the value, ensuring it can be changed. */
              onChange={(event) => this.onChange(event, id)}
              value={this.getValue(id)}
            />
          ))
        }
        {/* We need a hidden input for posting the data back to SilverStripe backend */}
        <input name={name} type="hidden" value={this.implodeValues()} />
      </div>
    );
  }
}

export { CreditCardField as Component };

export default fieldHolder(CreditCardField);
