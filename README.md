# Contacts

# Deployment

mono-repo

/web
/svc

# Design



# Requirements
Scope down within a week.

FE:
Upload mechanism for single file up to 1M large. Variable column count, field names.


BE:

expected to accept columns named minimally: first_name, email; last_name optional. Persist nothing else.

Decide on how much column name variance to accept.

Performant.

DB: records can be persisted for each submission. Still unknown if the contacts viewed are per user session, per submission, or in totality. We can operate under per submission.
Sorting of records persisted or viewed: unknown

## Hosting

Required. Thought about wasm using github pages and sqllite using local storage or OPFS but the assemblyscript support isn't fully Typescript, so shelved this idea.

Chose Render since it's free to deploy the requested architecture (backend separate from front end).