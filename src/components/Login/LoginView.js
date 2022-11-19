import React from "react";

function LoginView(props) {
  return (
    <React.Fragment>
      {/* <!-- Login Form Card Starts --> */}
      <div className="container mb-5">
        <div
          className="card mx-auto mt-5 pb-3 shadow rounded"
          style={{ width: "25rem" }}
        >
          <div className="card-body">
            <h4 className="card-title">Login</h4>
            {/* <!-- Login Form Start --> */}
            <form
              className="needs-validation"
              autoComplete="off"
              action="#"
              onSubmit={props.handleSubmit}
              noValidate
            >
              <div className="form-group">
                <label htmlFor="userEmail">Email: </label>
                <input
                  type="email"
                  name="email"
                  className="form-control"
                  placeholder="abc@abc.com"
                  id="userEmail"
                  aria-describedby="emailHelp"
                  onChange={props.handleChange}
                  value={props.email}
                  required
                />
                <small id="emailHelp" className="form-text text-muted">
                  <i className="fas text-primary fa-info"></i> We'll never share
                  your email with anyone else.
                </small>
                <div className="valid-feedback">
                  <i className="far text-success fa-thumbs-up"></i> OK
                </div>
                <div className="invalid-feedback">
                  <i className="fas text-danger fa-exclamation-triangle"></i>{" "}
                  Some error in email.
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="userPassword">Password: </label>
                <input
                  type="password"
                  className="form-control"
                  placeholder="******"
                  name="password"
                  id="userPassword"
                  aria-describedby="passwordHelp"
                  onChange={props.handleChange}
                  value={props.password}
                  required
                  minLength="6"
                />
                <small id="passwordHelp" className="form-text text-muted">
                  <i className="fas text-primary fa-info"></i> Password must be
                  at least 6 characters.
                </small>
                <div className="valid-feedback">
                  <i className="far text-success fa-thumbs-up"></i> OK
                </div>
                <div className="invalid-feedback">
                  <i className="fas text-danger fa-exclamation-triangle"></i>{" "}
                  Some error in password.
                </div>
              </div>
              <button
                type="submit"
                className="btn btn-warning w-100 shadow btn-sm rounded"
              >
                Sign in
              </button>
            </form>
            {/* <!-- Login Form Ends --> */}

            {/* <!-- OR Seperator --> */}
            <hr className="hr-text" data-content="New to Amazon?" />

            {/* <!-- Create account button --> */}
            <a href="register.html" className="btn btn-dark btn-sm w-100 mt-2">
              Create your Amazon account
            </a>
            <a href="#" className="btn btn-outline-success btn-sm w-100 mt-2">
              <i className="fab fa-google"></i> Sign in with Google
            </a>
            <a href="#" className="btn btn-outline-primary btn-sm w-100 mt-2">
              <i className="fab fa-facebook-square"></i> Sign in with Facebook
            </a>
          </div>
        </div>
      </div>
      {/* <!-- Login Form Card Ends --> */}
    </React.Fragment>
  );
}

export default LoginView;
