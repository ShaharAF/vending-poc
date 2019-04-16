import React from "react";
import FormField from "./FormField";
import axios from "axios";

class App extends React.Component {
  state = {
    devKey: "",
    packageName: "",
    errorMessage: ""
  };

  onInputChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    let error = false;

    if (this.state.devKey === "") {
      this.setState({ afDevKeyError: true });
      error = true;
    } else {
      this.setState({ emailError: false });
    }
  };

  validateForm = () => {
    let isPackageNameValid = /^([A-Za-z]{1}[A-Za-z\d_]*\.)+[A-Za-z][A-Za-z\d_]*$/.test(
      this.state.packageName
    );
    if (!isPackageNameValid) {
      this.setState({
        packageNameError: true,
        errorMessage: {
          header: "Action Failed",
          body: "The package name is not valid"
        }
      });
    } else {
      this.setState({ packageNameError: false });
    }
    return isPackageNameValid;
  };

  onSubmit = () => {
    if (this.validateForm()) {
      console.log("valid");
      axios.post("/api/build-apk", {
        packageName: this.state.packageName,
        devKey: this.state.devKey
      });
    }
  };

  render() {
    const isDisabled = !this.state.devKey || !this.state.packageName;
    const error = this.state.afDevKeyError || this.state.packageNameError;

    return (
      <div className="ui middle aligned center aligned grid">
        <div className="column">
          <h2 className="ui teal image header">
            <img
              src={require("../assets/AppsFlyer.png")}
              className="image"
              alt="Appsflyer"
            />
            <div className="content">APK Vending Machine</div>
          </h2>
          <form className={`ui large form ${error ? "error" : ""}`}>
            <div className="ui stacked segment">
              <FormField
                inputName="devKey"
                placeholder="AppsFlyer dev key"
                iconName="key"
                onInputChange={this.onInputChange}
                error={this.state.afDevKeyError}
              />
              <FormField
                inputName="packageName"
                placeholder="Android package name"
                iconName="box"
                onInputChange={this.onInputChange}
                error={this.state.packageNameError}
              />
              <div
                className={`ui fluid large teal submit button ${
                  isDisabled ? "disabled" : ""
                }`}
                onClick={this.onSubmit}
              >
                Generate APK
              </div>
            </div>
            <div className="ui error message">
              <div className="content">
                <div className="header">{this.state.errorMessage.header}</div>
                <p>{this.state.errorMessage.body}</p>
              </div>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default App;
