# try-to-js

A lightweight try/catch wrapper for easy error handling that improves code readability by removing the clutter of traditional try/catch blocks.

## Installation

To install the package, run:

```bash
npm i try-to-js
```

## Examples

### Without using try-to-js

```javascript
import { tryTo } from "try-to-js";

function withoutUsingTryTo() {
  let res: ReturnType<typeof syncFunctionThatCanThrowError> | undefined;
  try {
    res = syncFunctionThatCanThrowError();
  } catch (err) {
    console.log(err);
    return;
  }
  // do something with res
}
```

### Using try-to-js

```javascript
import { tryTo } from "try-to-js";

function usingTryTo() {
  const [err, res] = tryTo(syncFunctionThatCanThrowError);
  if (err) {
    console.log(err);
    return;
  }
  // do something with res
}
```

### Notes

- If no error is thrown, the `err` value will be `undefined`, and `res` will hold the returned value of `syncFunctionThatCanThrowError()`.
- If an error is thrown, the `err` value will contain the error that was thrown, and `res` will be `undefined`.

## License

[MIT License](LICENSE)