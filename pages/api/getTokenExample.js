// import { getToken } from "next-auth/jwt"

// const secret = process.env.NEXTAUTH_SECRET;

// export default async function handler(req, res) {
//   const token = await getToken({req, secret});
//   if (token) {
//     // Signed in
//     res.send(JSON.stringify(token.jwt));
//   } else {
//     // Not Signed in
//     res.status(401)
//   }
//   res.end()
// }