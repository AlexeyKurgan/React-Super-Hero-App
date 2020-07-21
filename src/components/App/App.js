import React, { Component } from 'react';
import AppHeader from '../AppHeader';
import AboutApp from '../AboutApp';
import CardContainer from '../CardContainer';
import AppFooter from '../AppFooter';
import ApiService from '../../Services/ApiService';

export default class App extends Component {

    apiService = new ApiService();

    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            data: [],
            query: ''
        }
    }

    componentDidMount() {
        this.apiService.getAllCharacters()
            .then(
                (res) => {
                    this.setState({
                        isLoaded: true,
                        data: res
                    });
                },
                (error) => {
                    this.setState({
                        isLoaded: null,
                        error: true
                    })
                }
            )
    }

    getSearchValue = (name) => {
        this.setState({
            query: name
        })
    }

    render() {
        const { error, isLoaded, data, query } = this.state;

        return (
            <div>
                <AppHeader searchName={this.getSearchValue} />
                <AboutApp />
                <CardContainer
                    error={error}
                    isLoaded={isLoaded}
                    data={data}
                    query={query}
                />
                <AppFooter />
            </div>
        );
    }

}


