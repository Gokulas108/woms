import { withIronSession } from "next-iron-session";

//func to check if user is logged In
export function requireAuth(gssp = async () => {}){
    return withIronSession(
        async (context) => {
            const { req, res } = context;
            const user = req.session.get("user");
            if (!user) {
                res.statusCode = 404;
                res.end();
                return { props : {} };
            }
            const propsFromGSSP = await gssp(context, user);
            const props = propsFromGSSP && propsFromGSSP.props ? { props : { ...propsFromGSSP.props, user }} : { props : { user }}
            return props;
        },
        {
            cookieName: "AltradCapeCookies",
            cookieOptions: {
            secure: process.env.NODE_ENV === "production" ? true : false
            },
            password: process.env.APPLICATION_SECRET
        }
    )
}
