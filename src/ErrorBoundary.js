import React from 'react';

class ErrorBoundary extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            errorState: false,
            errorInfo: ''
        }
    }

    static getDerivedStateFromError(error){
        return {errorState: true, errorInfo: error}
    }

    componentDidCatch(error, errorInfo){
        this.setState({error,errorInfo})
    }

    render(){
        if(this.state.error){
            return(<h1>SOMETHING WENT WRONG</h1>)
        }

        return this.props.children;
    }
}  

export default ErrorBoundary;