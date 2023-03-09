<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Vehicle extends Model
{
    use HasFactory;
    public function vehicleTypes()
    {
        return $this->belongsTo('App\Models\VehicleType');
    }
    public function access()
    {
        return $this->hasMany('App\Models\Access');
    }
}
