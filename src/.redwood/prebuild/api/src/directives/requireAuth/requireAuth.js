import { createValidatorDirective } from '@redwoodjs/graphql-server';
import { requireAuth as applicationRequireAuth } from "../../lib/auth";
export const schema = {
  "kind": "Document",
  "definitions": [{
    "kind": "DirectiveDefinition",
    "description": {
      "kind": "StringValue",
      "value": "Use to check whether or not a user is authenticated and is associated\nwith an optional set of roles.",
      "block": true
    },
    "name": {
      "kind": "Name",
      "value": "requireAuth"
    },
    "arguments": [{
      "kind": "InputValueDefinition",
      "name": {
        "kind": "Name",
        "value": "roles"
      },
      "type": {
        "kind": "ListType",
        "type": {
          "kind": "NamedType",
          "name": {
            "kind": "Name",
            "value": "String"
          }
        }
      },
      "directives": []
    }],
    "repeatable": false,
    "locations": [{
      "kind": "Name",
      "value": "FIELD_DEFINITION"
    }]
  }],
  "loc": {
    "start": 0,
    "end": 180,
    "source": {
      "body": "\n  \"\"\"\n  Use to check whether or not a user is authenticated and is associated\n  with an optional set of roles.\n  \"\"\"\n  directive @requireAuth(roles: [String]) on FIELD_DEFINITION\n",
      "name": "GraphQL request",
      "locationOffset": {
        "line": 1,
        "column": 1
      }
    }
  }
};
const validate = ({
  directiveArgs
}) => {
  const {
    roles
  } = directiveArgs;
  applicationRequireAuth({
    roles
  });
};
const requireAuth = createValidatorDirective(schema, validate);
export default requireAuth;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJjcmVhdGVWYWxpZGF0b3JEaXJlY3RpdmUiLCJyZXF1aXJlQXV0aCIsImFwcGxpY2F0aW9uUmVxdWlyZUF1dGgiLCJzY2hlbWEiLCJ2YWxpZGF0ZSIsImRpcmVjdGl2ZUFyZ3MiLCJyb2xlcyJdLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL2FwaS9zcmMvZGlyZWN0aXZlcy9yZXF1aXJlQXV0aC9yZXF1aXJlQXV0aC50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgZ3FsIGZyb20gJ2dyYXBocWwtdGFnJ1xuXG5pbXBvcnQge1xuICBjcmVhdGVWYWxpZGF0b3JEaXJlY3RpdmUsXG4gIFZhbGlkYXRvckRpcmVjdGl2ZUZ1bmMsXG59IGZyb20gJ0ByZWR3b29kanMvZ3JhcGhxbC1zZXJ2ZXInXG5cbmltcG9ydCB7IHJlcXVpcmVBdXRoIGFzIGFwcGxpY2F0aW9uUmVxdWlyZUF1dGggfSBmcm9tICdzcmMvbGliL2F1dGgnXG5cbmV4cG9ydCBjb25zdCBzY2hlbWEgPSBncWxgXG4gIFwiXCJcIlxuICBVc2UgdG8gY2hlY2sgd2hldGhlciBvciBub3QgYSB1c2VyIGlzIGF1dGhlbnRpY2F0ZWQgYW5kIGlzIGFzc29jaWF0ZWRcbiAgd2l0aCBhbiBvcHRpb25hbCBzZXQgb2Ygcm9sZXMuXG4gIFwiXCJcIlxuICBkaXJlY3RpdmUgQHJlcXVpcmVBdXRoKHJvbGVzOiBbU3RyaW5nXSkgb24gRklFTERfREVGSU5JVElPTlxuYFxuXG50eXBlIFJlcXVpcmVBdXRoVmFsaWRhdGUgPSBWYWxpZGF0b3JEaXJlY3RpdmVGdW5jPHsgcm9sZXM/OiBzdHJpbmdbXSB9PlxuXG5jb25zdCB2YWxpZGF0ZTogUmVxdWlyZUF1dGhWYWxpZGF0ZSA9ICh7IGRpcmVjdGl2ZUFyZ3MgfSkgPT4ge1xuICBjb25zdCB7IHJvbGVzIH0gPSBkaXJlY3RpdmVBcmdzXG4gIGFwcGxpY2F0aW9uUmVxdWlyZUF1dGgoeyByb2xlcyB9KVxufVxuXG5jb25zdCByZXF1aXJlQXV0aCA9IGNyZWF0ZVZhbGlkYXRvckRpcmVjdGl2ZShzY2hlbWEsIHZhbGlkYXRlKVxuXG5leHBvcnQgZGVmYXVsdCByZXF1aXJlQXV0aFxuIl0sIm1hcHBpbmdzIjoiQUFFQSxTQUNFQSx3QkFBd0IsUUFFbkIsMkJBQTJCO0FBRWxDLFNBQVNDLFdBQVcsSUFBSUMsc0JBQXNCO0FBRTlDLE9BQU8sTUFBTUMsTUFBTTtFQUFBO0VBQUE7SUFBQTtJQUFBO01BQUE7TUFBQTtNQUFBO0lBQUE7SUFBQTtNQUFBO01BQUE7SUFBQTtJQUFBO01BQUE7TUFBQTtRQUFBO1FBQUE7TUFBQTtNQUFBO1FBQUE7UUFBQTtVQUFBO1VBQUE7WUFBQTtZQUFBO1VBQUE7UUFBQTtNQUFBO01BQUE7SUFBQTtJQUFBO0lBQUE7TUFBQTtNQUFBO0lBQUE7RUFBQTtFQUFBO0lBQUE7SUFBQTtJQUFBO01BQUE7TUFBQTtNQUFBO1FBQUE7UUFBQTtNQUFBO0lBQUE7RUFBQTtBQUFBLENBTWxCO0FBSUQsTUFBTUMsUUFBNkIsR0FBR0EsQ0FBQztFQUFFQztBQUFjLENBQUMsS0FBSztFQUMzRCxNQUFNO0lBQUVDO0VBQU0sQ0FBQyxHQUFHRCxhQUFhO0VBQy9CSCxzQkFBc0IsQ0FBQztJQUFFSTtFQUFNLENBQUMsQ0FBQztBQUNuQyxDQUFDO0FBRUQsTUFBTUwsV0FBVyxHQUFHRCx3QkFBd0IsQ0FBQ0csTUFBTSxFQUFFQyxRQUFRLENBQUM7QUFFOUQsZUFBZUgsV0FBVyJ9