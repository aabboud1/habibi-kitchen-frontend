import React, { Component } from 'react';

class AboutInfo extends Component {
    render() {
        return (
            <>
                <div class="container-fluid">
                    <div class="row">
                        <div class="col-sm-8">
                        <h2>About Company Page</h2>
                        <h4>Lorem ipsum..</h4>      
                        <p>Lorem ipsum..</p>
                        <button class="btn btn-default btn-lg"><a href="http://localhost:3001/contact">Get in touch with us!</a></button>
                        </div>
                        <div class="col-sm-4">
                        <span class="glyphicon glyphicon-signal logo"></span>
                        </div>
                    </div>
                    </div>

                    <div class="container-fluid bg-grey">
                    <div class="row">
                        <div class="col-sm-4">
                        <span class="glyphicon glyphicon-globe logo"></span>
                        </div>
                        <div class="col-sm-8">
                        <h2>Our Values</h2>
                        <h4><strong>MISSION:</strong> Our mission lorem ipsum..</h4>      
                        <p><strong>VISION:</strong> Our vision Lorem ipsum..</p>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}

export default AboutInfo;
