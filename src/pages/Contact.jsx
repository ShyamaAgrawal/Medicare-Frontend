
const Contact = () => {
  return (
    <section>
      <div className="px-4 mx-auto max-w-screen-md">
        <h2 className="heading text-center">Contact Us</h2>
        <p className="mb-8 font-light text-center text__para">Got a technical issue? Want to send feedback about a beta feature? Let us know.</p>

        <form action="#" className="space-y-6">
          <div>
            <label htmlFor="email" className="form__label">Your Email</label>
            <input type="email" placeholder="example@gmail.com" id="email" className="form__input mt-1" />
          </div>

          <div>
            <label htmlFor="subject" className="form__label">Subject</label>
            <input type="text" placeholder="Let us know how we can help you" id="subject" className="form__input mt-1" />
          </div>

          <div className="sm:col-span-2">
            <label 
              htmlFor="message"
              className="form__label">Your message
            </label>
            <textarea
              type="text"
              rows="5"
              placeholder="Leave a comment..."
              id="message"
              className="form__input mt-1" />
          </div>
          <button type="submit" className="btn sm:w-fit">Submit</button>
        </form>
      </div>
    </section>
  )
}

export default Contact