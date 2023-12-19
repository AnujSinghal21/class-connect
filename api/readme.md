## ClassConnect: API Documentation for Courses

- ### route: "/api/courses"

  - #### method: GET

    - Returns an array of objects containing all coures in the collection
    - No query parameters are expected (important)
    - The object contains the following:
      - title
      - code
      - department
      - credits
      - schedule
      - ratingsum
      - ratingcount
    - A successful request returns with status 200
    - Encountered errors are logged to the console

  - #### method: POST

    - Adds a Course to the courses collection
    - The following parameters are expected in the query:
      - code
      - department
      - title
      - credits
      - content (default "" , basically field omitted)
      - prof
      - oprof
      - profemail
      - semester
      - schedule (default "Not Available")
      - resources (default "Not Available")
      - grades (default "Not Available")
      - ratingsum (default 0)
      - ratingcount (default 0)
    - The parameters without a default value must be given as the "query of the request" (important)
    - Successful additions return with status 200
    - Encountered errors are logged and returned with status 500

  - #### method: PUT
    - Adds a comment to a particular Course
    - The following parameters are expected in the query:
      - id
      - comments
    - The parameters must be given as the "query of the request" (important)

- ### route: "/api/courses/rate"

  - #### method: POST
    - Adds a rating to a particular Course
    - The given rating is added to the "ratingsum" field
    - The "ratingcount" field is incremented by 1
    - The following parameters must be recieved in the query:
      - id
      - ratingsum (basically the rating given by user, do not confuse with the field name)
    - The parameters must be given as the "query of the request" (important)

- ### route: "/api/course"

  - #### method: GET
    - Returns all the data for a specific Course
    - The following parameters must be recieved in the query:
      - id
    - The parameters must be given as the "query of the request" (important)
