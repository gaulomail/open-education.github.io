<?php
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST');
header('Access-Control-Allow-Headers: Content-Type');

// Configuration
$uploadDir = 'lovable-uploads/';
$maxFileSize = 5 * 1024 * 1024; // 5MB
$allowedTypes = [
    'image/jpeg' => 'jpg',
    'image/png' => 'png',
    'image/gif' => 'gif',
    'application/pdf' => 'pdf'
];

// Create uploads directory if it doesn't exist
if (!file_exists($uploadDir)) {
    mkdir($uploadDir, 0777, true);
}

try {
    // Check if file was uploaded
    if (!isset($_FILES['file'])) {
        throw new Exception('No file uploaded');
    }

    $file = $_FILES['file'];
    
    // Check for upload errors
    if ($file['error'] !== UPLOAD_ERR_OK) {
        throw new Exception('Upload failed with error code: ' . $file['error']);
    }
    
    // Check file size
    if ($file['size'] > $maxFileSize) {
        throw new Exception('File is too large. Maximum size is 5MB');
    }
    
    // Check file type
    $finfo = finfo_open(FILEINFO_MIME_TYPE);
    $mimeType = finfo_file($finfo, $file['tmp_name']);
    finfo_close($finfo);
    
    if (!array_key_exists($mimeType, $allowedTypes)) {
        throw new Exception('Invalid file type. Only images and PDFs are allowed');
    }
    
    // Generate unique filename
    $extension = $allowedTypes[$mimeType];
    $filename = uniqid() . '.' . $extension;
    $destination = $uploadDir . $filename;
    
    // Move the uploaded file
    if (!move_uploaded_file($file['tmp_name'], $destination)) {
        throw new Exception('Failed to move uploaded file');
    }
    
    // Return success response
    echo json_encode([
        'success' => true,
        'fileUrl' => '/' . $destination,
        'fileName' => $file['name'],
        'fileSize' => $file['size']
    ]);
    
} catch (Exception $e) {
    http_response_code(400);
    echo json_encode([
        'success' => false,
        'error' => $e->getMessage()
    ]);
}
