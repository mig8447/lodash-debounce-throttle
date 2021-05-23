# lodash-debounce-throttle

[![](https://data.jsdelivr.com/v1/package/npm/@mig8447/lodash-debounce-throttle/badge)](https://www.jsdelivr.com/package/npm/@mig8447/lodash-debounce-throttle)

Lodash's debounce and throttle functions exported as UMD

This package makes use of the `lodash` CLI to generate an UMD export of the
`_.debounce` and `_.throttle` functions so they can be made available via `npm`
and some CDNs

# Motivation

Although lodash is already modularized, the modules are only available in
CommonJS format, which (out of the box) only makes them usable for Node. There
are other packages available that ship them as ES Modules but again, combining
modules and globals in a plain HTML file is cumbersome at the moment.

With the above in mind, I created this package which ships the throttle and
debounce functions in a single UMD module which I can use in a plan HTML file
without needing a build system or anything of the like.

# Browser usage

Usage options:

- [`_.debounce(func, [wait=0], [options={}])`](https://lodash.com/docs/4.17.15#debounce)
- [`_.throttle(func, [wait=0], [options={}])`](https://lodash.com/docs/4.17.15#throttle)

Example:

```html
<script src="https://cdn.jsdelivr.net/npm/@mig8447/lodash-debounce-throttle@4.17.5/dist/lodash-debounce-throttle.min.js"></script>
<script>
    let debouncedFunction = _.debounce( () => {
        console.count( 'Executed!' )
    }, 200 );
    for( let i = 0; i < 100; i++ ) {
        debouncedFunction();
    }
</script>
```

# Versioning

This package will follow the same version of lodash that it packages

# Build

A build script is provided in the `package.json` file. It will bump the package
version to the one that is building

```sh
npm i
npm run build
```
