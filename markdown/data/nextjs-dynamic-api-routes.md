---
title: "NextJS"
popular: 7
name: "Dynamic API Routes"
---

# Dynamic API Routes

- \[...slug].ts

  ```
  export default function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.query["slug"] != undefined) {
        let action = req.query["slug"][0];
    if (req.method === GET && action === "signin") {
        return res.status(200).json({
            message : "GET path /signin"
        });;
  else {
        return res
        .status(405)
        .end(`Error: HTTP ${req.method} is not supported for ${req.url}`);
    }
  }
  }
  ```
