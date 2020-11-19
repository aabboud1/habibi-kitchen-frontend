import React, { Component } from 'react';

class ContactForm extends Component {
    render() {
        return (
            <div class="container-fluid bg-grey">
                <h2 class="text-center">CONTACT</h2>
                <div class="row">
                    <div class="col-sm-5">
                        <p>Contact us and we'll get back to you within 24 hours.</p>
                        <p><span class="glyphicon glyphicon-map-marker"></span> Baltimore, MD</p>
                        <p><span class="glyphicon glyphicon-phone"></span>(410) 530-3779</p>
                        <p><span class="glyphicon glyphicon-envelope"></span> habibicater@gmail.com</p> 
                    </div>
                    <div class="col-sm-7">
                        <div class="row">
                            <div class="col-sm-6 form-group">
                            <input class="form-control" id="name" name="name" placeholder="Name" type="text" required />
                            </div>
                            <div class="col-sm-6 form-group">
                            <input class="form-control" id="email" name="email" placeholder="Email" type="email" required />
                            </div>
                        </div>
                        <textarea class="form-control" id="comments" name="comments" placeholder="Comment" rows="5"></textarea><br></br>
                        <div class="row">
                            <div class="col-sm-12 form-group">
                            <button class="btn btn-default pull-right" type="submit">Send</button>
                            </div>
                        </div> 
                    </div>
                </div>
            </div>
        );
    }
}

export default ContactForm;
