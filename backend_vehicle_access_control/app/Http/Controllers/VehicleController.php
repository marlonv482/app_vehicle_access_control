<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Vehicle;
use App\Models\VehicleType;

class VehicleController extends Controller
{
    //

    public function getAllVehicles()
    {
        $vehicles = Vehicle::get();
        foreach ($vehicles as $key => $vehicle) {
            $vehicle->vehicle_type = VehicleType::select('vehicle_type')->find($vehicle->vehicle_type_id);
        }
        return response()
            ->json(
                ['vehicles' => $vehicles]
            );
    }
    public function getVehicleById($id)
    {
        $vehicle = Vehicle::find($id);
        (!is_null($vehicle)) ? $vehicle->vehicle_type = VehicleType::select('vehicle_type')->find($vehicle->vehicle_type_id) : $vehicle = '';
        return response()
            ->json(
                ['vehicle' => $vehicle]
            );
    }
    public function addVehicle(Request $request)
    {
        $vehicle = new Vehicle();
        $vehicle->plate = $request->plate;
        $vehicle->status = true;
        $vehicle->vehicle_type_id = $request->vehicleType;
        $vehicle->save();
        $vehicle->vehicle_type = VehicleType::select('vehicle_type')->find($vehicle->vehicle_type_id);
        return response()
            ->json(
                ['vehicle' => $vehicle]
            );
    }

    public function updateVehicle(Request $request)
    {
        $vehicle = Vehicle::find($request->id);
        if (!is_null($vehicle)) {

            $vehicle->status = $request->status;
            $vehicle->save();
            $vehicle->vehicle_type = VehicleType::select('vehicle_type')->find($vehicle->vehicle_type_id);
            return response()
                ->json(
                    ['vehicle' => $vehicle]
                );
        }

        return response()
            ->json(
                ['vehicle' => '']
            );
    }
}