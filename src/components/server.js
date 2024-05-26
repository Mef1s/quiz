const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');

const app = express();
const port = 5000;

// Middleware
app.use(express.json());
app.use(cors());

// MySQL connection
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'password', // podaj właściwe hasło
  database: 'quiz_app'
});

db.connect(err => {
  if (err) {
    console.error('Error connecting to MySQL:', err);
    return;
  }
  console.log('Connected to MySQL');
});

// Simple route
app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});
// Get all quizzes
app.get('/api/quizzes', (req, res) => {
    db.query('SELECT * FROM Quizzes', (err, results) => {
      if (err) {
        return res.status(500).json({ message: err.message });
      }
      res.json(results);
    });
  });
  
  // Get a single quiz with questions and answers
  app.get('/api/quizzes/:id', (req, res) => {
    const quizId = req.params.id;
  
    db.query('SELECT * FROM Quizzes WHERE quiz_id = ?', [quizId], (err, quizResults) => {
      if (err) {
        return res.status(500).json({ message: err.message });
      }
  
      if (quizResults.length === 0) {
        return res.status(404).json({ message: 'Quiz not found' });
      }
  
      db.query('SELECT * FROM Questions WHERE quiz_id = ?', [quizId], (err, questionResults) => {
        if (err) {
          return res.status(500).json({ message: err.message });
        }
  
        const questions = questionResults;
  
        const questionIds = questions.map(q => q.question_id);
        if (questionIds.length > 0) {
          db.query('SELECT * FROM Answers WHERE question_id IN (?)', [questionIds], (err, answerResults) => {
            if (err) {
              return res.status(500).json({ message: err.message });
            }
  
            const answers = answerResults;
            const questionsWithAnswers = questions.map(question => {
              return {
                ...question,
                answers: answers.filter(answer => answer.question_id === question.question_id)
              };
            });
  
            res.json({ ...quizResults[0], questions: questionsWithAnswers });
          });
        } else {
          res.json({ ...quizResults[0], questions: [] });
        }
      });
    });
  });
  
  // Create a new user
  app.post('/api/users', (req, res) => {
    const { username, email, password_hash } = req.body;
    const query = 'INSERT INTO Users (username, email, password_hash) VALUES (?, ?, ?)';
    db.query(query, [username, email, password_hash], (err, results) => {
      if (err) {
        return res.status(500).json({ message: err.message });
      }
      res.status(201).json({ user_id: results.insertId, username, email });
    });
  });
  
  // Create a new quiz
  app.post('/api/quizzes', (req, res) => {
    const { title, description, created_by } = req.body;
    const query = 'INSERT INTO Quizzes (title, description, created_by) VALUES (?, ?, ?)';
    db.query(query, [title, description, created_by], (err, results) => {
      if (err) {
        return res.status(500).json({ message: err.message });
      }
      res.status(201).json({ quiz_id: results.insertId, title, description, created_by });
    });
  });
  
  // Create a new question
  app.post('/api/questions', (req, res) => {
    const { quiz_id, question_text, question_type, question_order } = req.body;
    const query = 'INSERT INTO Questions (quiz_id, question_text, question_type, question_order) VALUES (?, ?, ?, ?)';
    db.query(query, [quiz_id, question_text, question_type, question_order], (err, results) => {
      if (err) {
        return res.status(500).json({ message: err.message });
      }
      res.status(201).json({ question_id: results.insertId, quiz_id, question_text, question_type, question_order });
    });
  });
  
  // Create a new answer
  app.post('/api/answers', (req, res) => {
    const { question_id, answer_text, is_correct } = req.body;
    const query = 'INSERT INTO Answers (question_id, answer_text, is_correct) VALUES (?, ?, ?)';
    db.query(query, [question_id, answer_text, is_correct], (err, results) => {
      if (err) {
        return res.status(500).json({ message: err.message });
      }
      res.status(201).json({ answer_id: results.insertId, question_id, answer_text, is_correct });
    });
  });
  
  // Record quiz result
  app.post('/api/results', (req, res) => {
    const { user_id, quiz_id, score } = req.body;
    const query = 'INSERT INTO Results (user_id, quiz_id, score) VALUES (?, ?, ?)';
    db.query(query, [user_id, quiz_id, score], (err, results) => {
      if (err) {
        return res.status(500).json({ message: err.message });
      }
      res.status(201).json({ result_id: results.insertId, user_id, quiz_id, score });
    });
  });
  