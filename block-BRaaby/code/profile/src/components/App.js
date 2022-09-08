    import React from "react";

    class App extends React.Component {
    constructor() {
        super();
        this.state = {
        profile: null,
        title: "My name is ",
        value: " ",
        };
    }
    
    componentDidMount() {
        fetch("https://randomuser.me/api/")
        .then((res) => res.json())
        .then((data) => {
            console.log(data);
            this.setState({
            profile: data,
            value: data.results[0].name.first + " " + data.results[0].name.last,
            });
        });
    }
    
    randomProfile = () => {
        fetch("https://randomuser.me/api/")
        .then((res) => res.json())
        .then((profile) => {
            this.setState({
            profile,
            });
        });
    };

    render() {
        if (this.state.profile ) {
        let profile = this.state.profile.results[0];
        return (
            <>
            <div >
                <figure>
                <img src={profile.picture.medium} />
                </figure>
                <div >
                <h2>{this.state.title}</h2>
                <h2>{this.state.value}</h2>
                <div >
                    <button
                    onClick={() => {
                        this.setState({
                        title: "My email is ",
                        value: profile.email,
                        });
                    }}
                    >
                    <span>email</span>
                    </button>

                    <button
                    onClick={() => {
                        this.setState({
                        title: "My age is ",
                        value: profile.dob.age,
                        });
                    }}
                    >
                    <span>age</span>
                    </button>
                    <button
                    onClick={() => {
                        this.setState({
                        title: "My location  is ",
                        value: profile.location.city,
                        });
                    }}
                    >
                    <span>location</span>
                    </button>
                    <button
                    onClick={() => {
                        this.setState({
                        title: "My phone number  is ",
                        value: profile.phone,
                        });
                    }}
                    >
                    <span>phone</span>
                    </button>
                    <button
                    onClick={() => {
                        this.setState({
                        title: "my password  is ",
                        value: profile.login.password,
                        });
                    }}
                    >
                    <span>password</span>
                    </button>
                </div>
                <div>
                    <button onClick={this.randomProfile}>random profile</button>
                </div>
                </div>
            </div>
            </>
        );
        }
        <h1>loading ......</h1>;
    }
    }

    export default App;