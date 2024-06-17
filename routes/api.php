<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Api\AuthController;
use App\Http\Controllers\Api\UserController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

// Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
//     return $request->user();
// });


Route::post('/login', [AuthController::class, 'login']);
Route::middleware('jwt.verify')->post('/logout', [AuthController::class, 'logout']);

Route::post('/create-user', [UserController::class, 'store']);

Route::get('/get-users', [UserController::class, 'index']);

Route::middleware('jwt.auth')->prefix('user')->name('user.')->group(function () {
    Route::get('/', [UserController::class, 'index']);
});