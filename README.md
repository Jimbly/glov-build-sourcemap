Sourcemap handling helpers for [glov-build](https://github.com/Jimbly/glov-build) tasks
=============================

API usage:
```javascript
const sourcemap = require('glov-build-sourcemap');

sourcemap.init(job, file, (err, map, raw_sourcemap_file, stripped_source) => {});

// Outputs both the file (contents) and sourcemap, as either two files or inlined together
sourcemap.out(job, { relative, contents, map, inline });

// Returns a map with it's `mappings` decoded into numbers
// After decoding, format is as follows (anything beyond first entry in the array is optional)
//   map.mappings[mapped linenum][idx] = [ mapped char offset, source file index, source line, char start, name index]
map = sourcemap.decode(map)
// Encodes numerical mappings into sourcemap format
map = sourcemap.encode(filename, map);

```
