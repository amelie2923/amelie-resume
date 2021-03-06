import React, { Component } from 'react';
import emailjs from "emailjs-com";

class Contact extends Component {

   sendEmail = (e) => {
      e.preventDefault();
      emailjs.sendForm('service_f21x7tt', 'template_osk2nwn', e.target, 'user_3Yd8h37Lv9hUXoZkCSCXp')
         .then((result) => {
            console.log(result.text);
         }, (error) => {
            console.log(error.text);
         });
      //clears the form after sending the email
      e.target.reset();
   }

   render() {

      if (this.props.data) {
         var name = this.props.data.name;
         var state = this.props.data.address.state;
         var phone = this.props.data.phone;
         var message = this.props.data.contactMessage;
      }

      return (
         <section id="contact">

            <div className="row section-head">

               <div className="two columns header-col">

                  <h1><span>Get In Touch.</span></h1>

               </div>

               <div className="ten columns">

                  <p className="lead">{message}</p>

               </div>

            </div>

            <div className="row">
               <div className="eight columns">

                  <form action="" method="post" id="contactForm" name="contactForm" onSubmit={this.sendEmail}>
                     <fieldset>

                        <div>
                           <label htmlFor="contactName">Name <span className="required">*</span></label>
                           <input type="text" defaultValue="" size="35" id="contactName" name="contactName" onChange={this.handleChange} />
                        </div>

                        <div>
                           <label htmlFor="contactEmail">Email <span className="required">*</span></label>
                           <input type="text" defaultValue="" size="35" id="contactEmail" name="contactEmail" onChange={this.handleChange} />
                        </div>

                        <div>
                           <label htmlFor="contactSubject">Subject<span className="required">*</span></label>
                           <input type="text" defaultValue="" size="35" id="contactSubject" name="contactSubject" onChange={this.handleChange} />
                        </div>

                        <div>
                           <label htmlFor="contactMessage">Message <span className="required">*</span></label>
                           <textarea cols="50" rows="15" id="contactMessage" name="contactMessage"></textarea>
                        </div>

                        <div>
                           <button className="submit">Submit</button>
                           <span id="image-loader">
                              <img alt="" src="images/loader.gif" />
                           </span>
                        </div>
                     </fieldset>
                  </form>

                  <div id="message-warning"> Error</div>
                  <div id="message-success">
                     <i className="fa fa-check"></i>Your message was sent, thank you!<br />
                  </div>
               </div>


               <aside className="four columns footer-widgets">
                  <div className="widget widget_contact">

                     <h4>Address and Phone</h4>
                     <p className="address">
                        {name}<br />
                        {state} <br />
                        <span>{phone}</span>
                     </p>
                  </div>

                  {/* <div className="widget widget_tweets">
                     <h4 className="widget-title">Latest Tweets</h4>
                     <ul id="twitter">
                        <li>
                           <span>
                              This is Photoshop's version  of Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet.
                              Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum
                              <a href="#">http://t.co/CGIrdxIlI3</a>
                           </span>
                           <b><a href="#">2 Days Ago</a></b>
                        </li>
                        <li>
                           <span>
                              Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam,
                              eaque ipsa quae ab illo inventore veritatis et quasi
                              <a href="#">http://t.co/CGIrdxIlI3</a>
                           </span>
                           <b><a href="#">3 Days Ago</a></b>
                        </li>
                     </ul>
                  </div> */}
               </aside>
            </div>
         </section>
      );
   }
}

export default Contact;
