curl -X POST "http://localhost:3000/api/v1/course/create-course" \
     -H "Content-Type: application/json" \
     -d '{
       "title": "MERN Stack Mastery",
       "description": "Learn to build full-stack web applications",
       "price": 49.99,
       "category": "Web Development"
     }'
