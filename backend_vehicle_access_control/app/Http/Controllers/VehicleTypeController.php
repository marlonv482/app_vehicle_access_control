<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\VehicleType;
use App\Models\Cuts;
class VehicleTypeController extends Controller
{
    //
    public function getAllVehicleTypes()
    {
        $vehicleTypes = VehicleType::get();
        
        return response()
            ->json(
                ['vehicleTypes' => $vehicleTypes]
            );
    }

    public function getVehicleTypeById($id)
    {
        $vehicleType = VehicleType::find($id);
        (!is_null($vehicleType)) ?: $vehicleType = '';
        return response()
            ->json(
                ['vehicleType' => $vehicleType]
            );
    }

    public function addVehicleType(Request $request)
    {
        $vehicleType = new VehicleType();
        $vehicleType->vehicle_type = $request->vehicle_type;
        $vehicleType->price_per_minute = $request->price_per_minute;
        $vehicleType->save();


        $cut=new Cuts();
        $cut->status=true;
        $cut->vehicle_type_id=$vehicleType->id;
        $cut->save();

        return response()
            ->json(
                ['vehicleType' => $vehicleType]
            );
    }
}