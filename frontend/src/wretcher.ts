import wretch from "wretch";

const wretcher = wretch()
    .url("https://storestash.herokuapp.com")
    .options({ credentials: "include", mode: "cors" });

export default wretcher;