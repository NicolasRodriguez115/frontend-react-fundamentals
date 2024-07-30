import React, {Component} from "react";
// Import CSS if you want it
import "../src/contact.css"

class Contact extends Component {

    render() {
        return(
            <>
                <div className="contact-information-container">
                    <ul>
                        <li><span>Email:</span> peter.parker@dailybugle.com</li>
                        <li><span>Phone:</span> (555) 123-4567</li>
                        <li><span>Address:</span> 20 Ingram Street, Forest Hills, Queens, NY 11375</li>
                        <li><span>Website:</span> www.spiderman.com</li>
                        <li><span>Social media:</span></li>
                        <ul>
                            <li><span>Twitter:</span> @spidey</li>
                            <li><span>Instagram:</span> @spiderman</li>
                            <li><span>LinkedIn:</span> Peter Parker</li>
                        </ul>
                    </ul>
                </div>
            </>
        )
    }
}

export default Contact