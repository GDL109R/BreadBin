import { Fragment } from "react";
//Bootstap form elements
const Contact = () => {
    return (
        <Fragment>
            <div className="container mt-5">
                <div><h1>Contact</h1></div>
                <div className="row">
                    <div className="col-md-6">
                        <div className="row">
                            <div className="col-12">
                                <h2>Contact Details</h2>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-6">
                                <p>Email:</p>
                            </div>
                            <div className="col-6">
                                <p><a href="mailto:band@example.com">band@example.com</a></p>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-6">
                                <p>Instagram:</p>
                            </div>
                            <div className="col-6">
                                <p><a href="https://www.instagram.com/band_insta/" target="_blank" rel="noopener noreferrer">@band_insta</a></p>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-6">
                                <p>Facebook:</p>
                            </div>
                            <div className="col-6">
                                <p><a href="https://www.facebook.com/bandpage" target="_blank" rel="noopener noreferrer">/bandpage</a></p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <h2>Contact Form</h2>
                        <form>
                            <div className="form-group">
                                <label htmlFor="name">Name:</label>
                                <input type="text" className="form-control" id="name" placeholder="Enter your name" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="email">Email:</label>
                                <input type="email" className="form-control" id="email" placeholder="Enter your email" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="phone">Phone:</label>
                                <input type="tel" className="form-control" id="phone" placeholder="Enter your phone number" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="message">Message:</label>
                                <textarea className="form-control" id="message" rows="4" placeholder="Enter your message"></textarea>
                            </div>
                            <button type="submit" className="btn btn-primary">Submit</button>
                        </form>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default Contact;