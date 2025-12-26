<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\StudentController;
use App\Http\Controllers\PaymentController;
use App\Http\Controllers\ClassroomController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
*/

Route::prefix('api')->group(function () {
    
    // Public routes
    Route::post('/auth/login', [AuthController::class, 'login']);
    Route::post('/auth/register', [AuthController::class, 'register']);
    
    // Protected routes
    Route::middleware(['auth:sanctum'])->group(function () {
        // Auth
        Route::post('/auth/logout', [AuthController::class, 'logout']);
        Route::get('/auth/me', [AuthController::class, 'me']);
        
        // Students
        Route::get('/students/search', [StudentController::class, 'search']);
        Route::apiResource('students', StudentController::class);
        
        // Payments
        Route::get('/payments/student/{studentId}', [PaymentController::class, 'getByStudentId']);
        Route::get('/payments/summary', [PaymentController::class, 'getSummary']);
        Route::apiResource('payments', PaymentController::class);
        
        // Classrooms
        Route::apiResource('classrooms', ClassroomController::class);
    });
    
    // Health check
    Route::get('/health', function () {
        return response()->json([
            'status' => 'healthy',
            'timestamp' => now()->toDateTimeString(),
            'service' => 'MySchool API'
        ]);
    });
});