import { createValidatorDirective } from '@redwoodjs/graphql-server';
export const schema = {
  "kind": "Document",
  "definitions": [{
    "kind": "DirectiveDefinition",
    "description": {
      "kind": "StringValue",
      "value": "Use to skip authentication checks and allow public access.",
      "block": true
    },
    "name": {
      "kind": "Name",
      "value": "skipAuth"
    },
    "arguments": [],
    "repeatable": false,
    "locations": [{
      "kind": "Name",
      "value": "FIELD_DEFINITION"
    }]
  }],
  "loc": {
    "start": 0,
    "end": 116,
    "source": {
      "body": "\n  \"\"\"\n  Use to skip authentication checks and allow public access.\n  \"\"\"\n  directive @skipAuth on FIELD_DEFINITION\n",
      "name": "GraphQL request",
      "locationOffset": {
        "line": 1,
        "column": 1
      }
    }
  }
};
const skipAuth = createValidatorDirective(schema, () => {
  return;
});
export default skipAuth;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJjcmVhdGVWYWxpZGF0b3JEaXJlY3RpdmUiLCJzY2hlbWEiLCJza2lwQXV0aCJdLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL2FwaS9zcmMvZGlyZWN0aXZlcy9za2lwQXV0aC9za2lwQXV0aC50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgZ3FsIGZyb20gJ2dyYXBocWwtdGFnJ1xuXG5pbXBvcnQgeyBjcmVhdGVWYWxpZGF0b3JEaXJlY3RpdmUgfSBmcm9tICdAcmVkd29vZGpzL2dyYXBocWwtc2VydmVyJ1xuXG5leHBvcnQgY29uc3Qgc2NoZW1hID0gZ3FsYFxuICBcIlwiXCJcbiAgVXNlIHRvIHNraXAgYXV0aGVudGljYXRpb24gY2hlY2tzIGFuZCBhbGxvdyBwdWJsaWMgYWNjZXNzLlxuICBcIlwiXCJcbiAgZGlyZWN0aXZlIEBza2lwQXV0aCBvbiBGSUVMRF9ERUZJTklUSU9OXG5gXG5cbmNvbnN0IHNraXBBdXRoID0gY3JlYXRlVmFsaWRhdG9yRGlyZWN0aXZlKHNjaGVtYSwgKCkgPT4ge1xuICByZXR1cm5cbn0pXG5cbmV4cG9ydCBkZWZhdWx0IHNraXBBdXRoXG4iXSwibWFwcGluZ3MiOiJBQUVBLFNBQVNBLHdCQUF3QixRQUFRLDJCQUEyQjtBQUVwRSxPQUFPLE1BQU1DLE1BQU07RUFBQTtFQUFBO0lBQUE7SUFBQTtNQUFBO01BQUE7TUFBQTtJQUFBO0lBQUE7TUFBQTtNQUFBO0lBQUE7SUFBQTtJQUFBO0lBQUE7TUFBQTtNQUFBO0lBQUE7RUFBQTtFQUFBO0lBQUE7SUFBQTtJQUFBO01BQUE7TUFBQTtNQUFBO1FBQUE7UUFBQTtNQUFBO0lBQUE7RUFBQTtBQUFBLENBS2xCO0FBRUQsTUFBTUMsUUFBUSxHQUFHRix3QkFBd0IsQ0FBQ0MsTUFBTSxFQUFFLE1BQU07RUFDdEQ7QUFDRixDQUFDLENBQUM7QUFFRixlQUFlQyxRQUFRIn0=