const Register = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="columns-6 ring-offset-3">
          <div className="card">
            <form class="form">
              <p class="title">Register </p>
              <p class="message">Signup now and get full access to our app. </p>
              <div class="flex">
                <label>
                  <input class="input" type="text" placeholder="" required="" />
                  <span>Firstname</span>
                </label>

                <label>
                  <input class="input" type="text" placeholder="" required="" />
                  <span>Lastname</span>
                </label>
              </div>

              <label>
                <input class="input" type="email" placeholder="" required="" />
                <span>Email</span>
              </label>

              <label>
                <input
                  class="input"
                  type="password"
                  placeholder=""
                  required=""
                />
                <span>Password</span>
              </label>
              <label>
                <input
                  class="input"
                  type="password"
                  placeholder=""
                  required=""
                />
                <span>Confirm password</span>
              </label>
              <button class="submit">Submit</button>
              <p class="signin">
                Already have an acount ? <a href="#">Signin</a>{" "}
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;