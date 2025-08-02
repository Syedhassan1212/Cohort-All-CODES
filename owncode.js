const express = require('express');
const zod = require("zod");
const app = express();
const port = 3100;

app.use(express.json());

const loginSchema = zod.object({
  username: zod.string(),
  password: zod.string(),
  kidneyid: zod.coerce.number().refine(val => val === 1 || val === 2, {
    message: "kidneyid must be 1 or 2"
  })
});

function validateQuery(schema) {
  return (req, res, next) => {
    const result = schema.safeParse(req.query);
    if (!result.success) {
      return res.status(400).json({
        msg: "Validation failed",
        errors: result.error.flatten().fieldErrors
      });
    }
    req.query = result.data; // overwrite with clean parsed data
    next();
  };
}

app.get('/login', validateQuery(loginSchema), (req, res) => {
  const { username, password, kidneyid } = req.query;

  if (username !== "hassan" || password !== "pass") {
    return res.status(403).json({ msg: "Invalid credentials" });
  }

  res.send("Login successful. Kidney check passed ❤️");
});

app.use((err, req, res, next) => {
  console.error("🔥 Global error:", err.message);
  res.status(500).json({ msg: "Internal server error" });
});

app.listen(port, () => {
  console.log(`App live on port ${port}`);
});
