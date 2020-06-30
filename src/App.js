/* eslint-disable react/prop-types */
import React from 'react';
import { connect } from 'react-redux';
import SearchBox from './components/search-box/search-box.component';
import NoResult from './components/no-result/no-result.component';
import CardList from './components/card-list/card-list.component';
import Loader from './components/loader/loader.component';
import { getMatchResults } from './redux/match-results/match-results.actions';
import { BASE_URL } from './utils/baseurl';
import ColorPicker from './components/color-picker/color-picker.component';
import ToggleButton from './components/toggle-button/toggle-button.component';
import { toggleTheme, switchUserTheme } from './redux/ui-theme/ui-theme.actions';
import { THEMES } from './utils/themes';
import { findReplaceOrder } from './utils/findReplaceOrder';
import ErrorBoundary from './ErrorBoundary';

import './App.css'

class App extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            fifa_code: '',
            hexVal: ''
        }
    }

    componentDidMount() {
        this.setTheme(this.props.uiTheme.currentTheme);

        /* link-color replace and order starts here*/

        const obj = {
            'link-color':  '#244cde',
            'primary-button':  'link-color',
            'nav-color': '#1a1d26',
            'subnav-color': '#494f63',
            'nav-item-active-color': 'link-color'
          }

          const newObj = findReplaceOrder(obj)
          console.log(newObj);
          
        /*ends here */
    }

    componentDidUpdate(prevProps) {
        if(this.props.uiTheme.currentTheme !== prevProps.uiTheme.currentTheme){
            this.setTheme(this.props.uiTheme.currentTheme);
        }
    }

    setTheme = (currentTheme) => {
        const theme = THEMES[currentTheme];
        Object.keys(theme).forEach(key => {
            document.body.style.setProperty(key, theme[key]);
        })
    }

    handleChange = (event) => {
        const code = event.target.value;
        this.setState({
            fifa_code: code
        },
        () => {
            if(this.state.fifa_code.length >=3){
                this.props.getMatchResults(BASE_URL, this.state.fifa_code)
            }
        }
        )
    }

    handleColorChange = (event) => {
        const hex = event.target.value;
        this.setState({hexVal: hex}, 
            () => {
                THEMES['user-theme'] = {
                    '--background-color': this.state.hexVal,
                    '--text-color': 'black'
                }
                this.props.switchUserTheme();
                this.setTheme('user-theme');
            }
        )
    }

    handleToggleChange = () => {
        this.props.toggleTheme(this.props.uiTheme.currentTheme);
    }

    render(){
        return(
            <div data-test="component-app">
                <SearchBox 
                    data-test="component-app-search"
                    value={this.state.fifa_code}
                    handleChange={this.handleChange}
                />
                {
                    this.props.matchResults.loading
                    ? <Loader data-test="component-app-loader"/>
                    :''
                }
                {
                    this.props.matchResults.data.length
                    ? <ErrorBoundary>
                            <div className="theme-container">
                                <ColorPicker 
                                    data-test="component-app-colorpicker"
                                    hexVal={this.state.hexVal} 
                                    handleColorChange={this.handleColorChange}/>
                                <ToggleButton 
                                    data-test="component-app-togglebutton"    
                                    handleToggleChange={this.handleToggleChange}/>
                            </div>  
                            <CardList 
                                data-test="component-app-cardlist" 
                                data={this.props.matchResults.data}/>
                      </ErrorBoundary>
                      
                    : <NoResult data-test="component-app-noresult"/>
                }
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
            matchResults: state.matchResults,
            uiTheme: state.uiTheme
        }
}

const mapDispatchToProps = {
    getMatchResults,
    toggleTheme,
    switchUserTheme
}

export default connect(mapStateToProps, mapDispatchToProps)(App);