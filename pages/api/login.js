import { withIronSession } from "next-iron-session";

const VALID_EMAIL = "gokul";
const VALID_PASSWORD = "1234";

export default withIronSession(
  async (req, res) => {
    console.log(req.body)
    if (req.method === "POST") {
      const { username, password } = req.body;
      console.log(username,password)
      if (username === VALID_EMAIL && password === VALID_PASSWORD) {
        req.session.set("user", { username });
        await req.session.save();
        return res.status(200).send("");
      }

      return res.status(403).send("");
    }

    return res.status(404).send("");
  },
  {
    cookieName: "AltradCapeCookies",
    cookieOptions: {
      secure: process.env.NODE_ENV === "production" ? true : false
    },
    password: process.env.APPLICATION_SECRET
  }
);