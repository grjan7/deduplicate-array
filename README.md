# deduplicate-array

## Description

This package removes duplicate values (Type: string | number | boolean | null | undefined | object | array) from the array (`sourceArray`). This is case-sensitive and strictly typed by default, but can be optimised with `opts`.

## Install

```sh

  npm i deduplicate-array

```

## Usage

### `deduplicateArray(sourceArray, opts)`

-**sourceArray** | datatype: array | required
-**opts** | datatype: object | optional
-**opts.caseSensitive** | datatype: boolean | optional | default: true
-**opts.strictType** | datatype: boolean | optional | default: true

#### Example 1: String with no options

```js

  const deduplicateArray = require('deduplicate-array');

  const arr = ["A", "a", "b", "c", "d", "a", "d"];

  deduplicateArray(arr);

  //returns ["A", "a", "b", "c", "d"]

```

#### Example 2: String with option | `caseSensitive: false`

```js

  const deduplicateArray = require('deduplicate-array');

  const arr = ["A", "a", "b", "c", "d", "a", "d"];
  const opts = { caseSensitive: false }

  deduplicateArray(arr, opts);

  //returns ["A", "b", "c", "d"]

```

#### Example 3: Number with no options

```js

  const deduplicateArray = require('deduplicate-array');

  const arr = ["10", 10, "10"];

  deduplicateArray(arr);

  //returns ["10", 10]

```

#### Example 4: Number with option | `strictType: false`

```js

  const deduplicateArray = require('deduplicate-array');

  const arr = ["10", 10, "10"];
  const opts = { strictType: false }

  deduplicateArray(arr, opts);

  //returns ["10"]

```

#### Example 5: Object with no options

```js

  const deduplicateArray = require('deduplicate-array');

  const arr = [{name: "arun"}, {name: "Arun"}, {name: "arun"}];

  deduplicateArray(arr);
```
returns

```js
[{name: "arun"}, {name: "Arun"}]
```

#### Example 6: Object with option | `caseSensitive: false`

```js

  const deduplicateArray = require('deduplicate-array');

  const arr = [{name: "arun"}, {name: "Arun"}, {name: "arun"}];
  const opts = { caseSensitive: false }

  deduplicateArray(arr, opts);
```
returns

```js
   [{name: "arun"}]
```

#### Example 7: Array with no option

```js

  const deduplicateArray = require('deduplicate-array');

  const arr = [["arun", "John"], ["Arun", "john"], ["arun", "John"]];  

  deduplicateArray(arr);

```
returns

```js
   [["arun", "John"], ["Arun", "john"]]
```

#### Example 8: Array with option | `caseSensitive: false`

```js

  const deduplicateArray = require('deduplicate-array');

  const arr = [["arun", "John"], ["Arun", "john"], ["arun", "John"]];
  const opts = { caseSensitive: false }

  deduplicateArray(arr, opts);

```
returns

```js
   [["arun", "John"]]
```

#### Example 9: Array with option | `caseSensitive: false`

```js

  const deduplicateArray = require('deduplicate-array');

  const arr = [["arun", "10"], ["Arun", 10], ["arun", 10]];
  const opts = { caseSensitive: false }

  deduplicateArray(arr, opts);
  
```
returns

```js
   [["arun", "10"], ["Arun", 10]]
```

#### Example 10: Array with option | `caseSensitive: false | strictType: false`

```js

  const deduplicateArray = require('deduplicate-array');

  const arr = [["arun", "10"], ["Arun", 10], ["arun", 10]];
  const opts = { caseSensitive: false, strictType: false }

  deduplicateArray(arr, opts);
  
```
returns

```js
   [["arun", "10"]]
```

#### Example 11: Boolean with no option

```js

  const deduplicateArray = require('deduplicate-array');

  const arr =  [true, true, false, true, false];  

  deduplicateArray(arr); 
  
  // returns [true, false]

```

#### Example 12: Null with no option

```js

  const deduplicateArray = require('deduplicate-array');

  const arr =  [null, true, false, null, false];  

  deduplicateArray(arr); 
  
  // returns [null, true, false]

```

#### Example 13: Undefined with no option

```js

  const deduplicateArray = require('deduplicate-array');

  const arr =  [true, undefined, false, null, false];  

  deduplicateArray(arr); 
  
  // returns [true, undefined, false, null]

```