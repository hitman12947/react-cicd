import { useState } from "react";
import "./App.css";

const App = () => {
    const [email, setEmail] = useState(null);
    const [organization, setOrganization] = useState(null);

    const handleInput = (e) => {
        if (e.target.name === "email") {
            setEmail(e.target.value);
        } else {
            setOrganization(e.target.value);
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const data = await fetch("http://18.223.124.40:8000/api/send-mail", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                email,
                organization,
            }),
        }).then((res) => res.json());
        console.log(data);
    };
    return (
        <div className="App">
            <div className="container w-50">
                <h2 className="my-4">Enter Details</h2>
                <form>
                    <div className="form-group">
                        <label htmlFor="exampleInputEmail1">
                            Email address
                        </label>
                        <input
                            name="email"
                            type="email"
                            onChange={handleInput}
                            className="form-control"
                            id="exampleInputEmail1"
                            aria-describedby="emailHelp"
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleInputPassword1">
                            Organization
                        </label>
                        <input
                            name="organization"
                            type="text"
                            className="form-control"
                            id="exampleInputPassword1"
                            onChange={handleInput}
                        />
                    </div>

                    <button
                        type="submit"
                        className="btn btn-primary"
                        onClick={handleSubmit}
                    >
                        Submit
                    </button>
                </form>
            </div>
        </div>
    );
};

export default App;
