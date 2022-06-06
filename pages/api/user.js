export default function handler(req, res) {
  if (req.method === "POST") {
    // Process a POST request
    const { body } = req;
    res.status(200).json({
      message: "User created",
    });
  } else {
    // Handle any other HTTP method
  }
}
