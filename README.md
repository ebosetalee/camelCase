# CAMEL CASE 
__A Javascript NPM package/module that converts a dash/dot/underscore/space separated string to _camelCase_ or _PascalCase_.__

## Ex:

```jsx
"foo-bar" becomes "fooBar"
```

Examples of how the module should be used.

```jsx
const camelCase = require("@ebosetalee/camelcase");

camelCase("foo-bar");
//=> "fooBar"

camelCase("foo_bar");
//=> "fooBar"

camelCase("Foo-Bar");
//=> "fooBar"

camelCase("Foo-Bar", { pascalCase: true });
//=> "FooBar"

camelCase("--foo.bar", { pascalCase: false });
//=> "fooBar"

camelCase("Foo-BAR", { uppercase: true });
//=> "fooBAR"

camelCase("fooBAR", { pascalCase: true, uppercase: true }));
//=> "FooBAR"

camelCase("foo bar");
//=> "fooBar"
```