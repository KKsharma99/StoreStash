import wretch from "wretch";

const wretcher = wretch()
    .url('http://localhost:3001')
    // .url("https://storestash.herokuapp.com")
    .options({ credentials: "include", mode: "cors" });

export default wretcher;