<?php
require 'db.php';

$data = json_decode(file_get_contents('php://input'), true);

$title = $data['title'];
$description = $data['description'];
$created_by = $data['createdBy'];
$questions = $data['questions'];

try {
    $pdo->beginTransaction();

    $stmt = $pdo->prepare('INSERT INTO Quizzes (title, description, created_by, created_at) VALUES (?, ?, ?, NOW())');
    $stmt->execute([$title, $description, $created_by]);
    $quiz_id = $pdo->lastInsertId();

    foreach ($questions as $index => $question) {
        $stmt = $pdo->prepare('INSERT INTO Questions (quiz_id, question_text, question_type, question_order) VALUES (?, ?, ?, ?)');
        $stmt->execute([$quiz_id, $question['text'], 'multiple_choice', $index + 1]);
        $question_id = $pdo->lastInsertId();

        foreach ($question['answers'] as $answer) {
            $stmt = $pdo->prepare('INSERT INTO Answers (question_id, answer_text, is_correct) VALUES (?, ?, ?)');
            $stmt->execute([$question_id, $answer['text'], $answer['isCorrect'] ? 1 : 0]);
        }
    }

    $pdo->commit();
    echo json_encode(['success' => true, 'quizId' => $quiz_id]);
} catch (Exception $e) {
    $pdo->rollBack();
    echo json_encode(['success' => false, 'error' => $e->getMessage()]);
}
?>
