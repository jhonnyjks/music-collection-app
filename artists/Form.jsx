import React, { Component } from 'react'
import { reduxForm, Field, formValueSelector } from 'redux-form'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import LabelAndInput from '../../common/form/LabelAndInput'
import { init } from './actions'

class Form extends Component {
    render() {
        return (
            <form role='form' onSubmit={this.props.handleSubmit}>
                <div className='box-body'>
                    <Field name='name' component={LabelAndInput} readOnly={this.props.readOnly}
                        label='Name' cols='12 4' placeholder='John Doe' />
                    <Field name='twitter' component={LabelAndInput} readOnly={this.props.readOnly}
                        label='Twitter Handle' cols='12 4' placeholder='Without @' />
                </div>
                <div className='box-footer'>
                    <button type='submit' className={`btn btn-${this.props.submitClass}`}>{this.props.submitLabel}</button>
                    <button type='button' className='btn btn-default' onClick={this.props.init}>Cancel</button>
                </div>
            </form>
        )
    }
}

Form = reduxForm({ form: 'artistForm', destroyOnUnmount: false })(Form)
const selector = formValueSelector('artistForm')
const mapStateToProps = state => ({
    name: selector(state, 'name'),
    twitter: selector(state, 'twitter'),
})
const mapDispatchToProps = dispatch => bindActionCreators({ init }, dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(Form)