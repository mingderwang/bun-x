# x

To install dependencies:

```bash
bun install
```

To run:

```bash
bun run index.ts
```

To denug:

```bash
➜  x bun run --inspect-brk server.ts
--------------------- Bun Inspector ---------------------
Listening:
  ws://localhost:6499/f84ripkvh0k
Inspect in browser:
  https://debug.bun.sh/#localhost:6499/f84ripkvh0k
--------------------- Bun Inspector ---------------------
http://localhost:3000/
http://localhost:3000/favicon.ico
```

To test websocket:

install wscat

```bash
npm -g i wscat
```
run server
```bash
bun run --watch server.ts
```
and test

```bash
➜ wscat -c ws://127.0.0.1:3000
Connected (press CTRL+C to quit)
> asdf
< You said: asdf
> asdfasdfasdf
< You said: asdfasdfasdf
> %
```

This project was created using `bun init` in bun v1.0.10. [Bun](https://bun.sh) is a fast all-in-one JavaScript runtime.

