# Permission-as-a-Service

Sometimes you don’t need advice.  
You just need permission.

**Permission-as-a-Service** is a tiny open-source API that gives you permission to stop, rest, say no, or let go — sometimes including permission you didn’t ask for.

---

## ✨ What it does

- One endpoint
- No auth
- No tracking
- No users
- Just permission

Sometimes it also gives you _extra_ permission.  
You may receive more than you asked for.

---

## 🔌 API

### `GET /permission`

**Example response**

```json
{
  "requested": "Yes, you can stop working now.",
  "unsolicited": "You don’t need to explain yourself."
}
```

Occasionally (very rarely), you’ll get:

```json
{
  "permission": "You already know the answer."
}
```

That’s intentional.

## 🎚️ Weighted permissions

### `Not all permissions are equal.`

Some appear often.
Some are harder to hear — so they appear less often.

“Some permissions are rare because they matter more.”

## 🌐 Live demo

Open the homepage and click the button.
That’s it.

## 🧠 Why this exists

### `Because:`

“Just push through” isn’t always healthy

Not everything needs optimizing

Sometimes stopping is the correct answer

### 🤝 Contributing

### `Add permissions you wish someone had given you.`

Edit `permissions.json`

Add a short, human sentence

Open a PR

No tests required.
No explanation required.

## 🛠️ Local development

```
npm install
npm run dev
```

Then open:

http://localhost:3000

## 📄 License

MIT
