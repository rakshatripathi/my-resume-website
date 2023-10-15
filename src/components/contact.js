import "../style/contact.css"

function Contact(){
    return(
        <div className="contact-bg">
            <div className="contact-section">
            <h1>Get in touch</h1>
            <p>Have a project for me? Any questions about something I've built? I'd love to hear from you, give me a shout by email or by using the form below if you'd like to get in contact with me.</p>
            <ul>
                <li><i class="fa-solid fa-phone"></i> +91 7217756984</li>
                <li><i class="fa-solid fa-envelope"></i> rakshatripathi@gmail.com</li>
                <li><i class="fa-brands fa-linkedin"></i> <a href="https://www.linkedin.com/in/raksha-tripathi-a5391019a/">raksha-tripathi-a5391019a/</a></li>
                
            </ul>
            </div>
            <div className="form-section">
                <form>
                    <input  type="text"  name="Name" placeholder=" Name " required/>
                    <br/>
                    <input  type="email" name="Email" placeholder=" Email " required/>
                    <br/>
                    <textarea id="msg" name="comment">Message</textarea>
                    <br/>
                    <button id="btn-el" type="submit" class="button_1">Submit</button>
                </form>
            </div>
        </div>
        )
}

export default Contact;