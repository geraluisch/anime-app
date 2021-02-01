import React, { Fragment, Component } from 'react';
import SearchMessage from './../Common/SearchMessage';

class NotFound extends Component {

    constructor(){
        super();
    }

    render() {
        return (
            <Fragment>
                <SearchMessage text="404: URL not Found" type="back" />        
            </Fragment>
        );
    }
}

export default NotFound;
