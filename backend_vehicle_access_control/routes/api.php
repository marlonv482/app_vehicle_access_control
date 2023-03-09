<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

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

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});
Route::prefix("vehicles/")->group(function(){

    Route::get('getAllVehicles', [App\Http\Controllers\VehicleController::class, 'getAllVehicles'])->name('getAllVehicles');
    Route::get('getVehicleById/{id}', [App\Http\Controllers\VehicleController::class, 'getVehicleById'])->name('getVehicleById');
    Route::post('addVehicle', [App\Http\Controllers\VehicleController::class, 'addVehicle'])->name('addVehicle');
    Route::put('updateVehicle', [App\Http\Controllers\VehicleController::class, 'updateVehicle'])->name('updateVehicle');
});

Route::prefix("vehicleTypes/")->group(function(){

    Route::get('getAllVehicleTypes', [App\Http\Controllers\VehicleTypeController::class, 'getAllVehicleTypes'])->name('getAllVehicleTypes');
    Route::get('getVehicleTypeById/{id}', [App\Http\Controllers\VehicleTypeController::class, 'getVehicleTypeById'])->name('getVehicleTypeById');
    Route::post('addVehicleType', [App\Http\Controllers\VehicleTypeController::class, 'addVehicleType'])->name('addVehicleType');
    Route::put('updateVehicle', [App\Http\Controllers\VehicleTypeController::class, 'updateVehicle'])->name('updateVehicle');
});

Route::prefix("access/")->group(function(){

    Route::get('getAllIncompleteAccess', [App\Http\Controllers\AccessController::class, 'getAllIncompleteAccess'])->name('getAllIncompleteAccess');
    Route::get('getAllCompleteAccess', [App\Http\Controllers\AccessController::class, 'getAllCompleteAccess'])->name('getAllCompleteAccess');
    Route::get('recibVehicle/{plate}', [App\Http\Controllers\AccessController::class, 'recibVehicle'])->name('recibVehicle');
    Route::get('dismissVehicle/{plate}', [App\Http\Controllers\AccessController::class, 'dismissVehicle'])->name('dismissVehicle');
 
});