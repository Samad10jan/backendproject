import express, { NextFunction, Request, Response } from "express"
import cors from "cors"
import cookiesParser from "cookie-parser"

import userRouter from "./routes/user.routes.js"
import subscriptionRouter from "./routes/subscription.routes.js"
import videoRouter from "./routes/video.routes.js"
import commentRouter from "./routes/comment.routes.js"
import likeRouter from "./routes/like.routes.js"
import playlistRouter from "./routes/playlist.routes.js"
import dashboardRouter from "./routes/dashboard.routes.js"
import { ApiError } from "./utils/ApiError.js"

const app = express();

const frontendUrl = "http://localhost:5173"

app.use(
  cors({
    origin: frontendUrl,
    credentials: true,
  }),
)

app.use(
  express.json({
    limit: "16kb",
  }),
)

app.use(
  express.urlencoded({
    extended: true,
    limit: "16kb",
  }),
)

app.use(express.static("public"))
app.use(cookiesParser())

app.use("/api/v1/users", userRouter)
app.use("/api/v1/subscriptions", subscriptionRouter)
app.use("/api/v1/videos", videoRouter)
app.use("/api/v1/comments", commentRouter)
app.use("/api/v1/likes", likeRouter)
app.use("/api/v1/playlist", playlistRouter)
app.use("/api/v1/dashboard", dashboardRouter)

app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  if (err instanceof ApiError) {
    return res.status(err.statusCode || 500).json({
      success: err.success,
      message: err.message,
      errors: err.errors || [],
    })
  }

  console.error(err)

  return res.status(500).json({
    success: false,
    message: err.message || "Internal Server Error",
  })
})

export { app }
