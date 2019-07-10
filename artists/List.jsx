import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { getList, showUpdate, remove } from './actions'

class List extends Component {

    componentWillMount() {
        this.props.getList();
    }

    renderRows() {
        const list = this.props.list || []

        return list.map(artist => (
            <tr key={artist.id}>
                <td>{artist.name}</td>
                <td>{artist.twitter}</td>
                <td>
                    <button className='btn btn-warning' onClick={() => this.props.showUpdate(artist)}>
                        <i className='fa fa-pencil'></i>
                    </button>
                    <button className='btn btn-danger' onClick={() => this.props.remove(artist)}>
                        <i className='fa fa-trash-o'></i>
                    </button>
                </td>
            </tr>
        ))
    }

    render() {
        return (
            <table className='table'>
                <thead>
                    <tr>
                        <th>Nome</th>
                        <th>Twitter Handle</th>
                        <th className='table-actions'>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {this.renderRows()}
                </tbody>
            </table>
        )
    }
}

const mapStateToProps = state => ({ list: state.artist.list })
const mapDispatchToProps = dispatch => bindActionCreators({ getList, showUpdate, remove }, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(List)