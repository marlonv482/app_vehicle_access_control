<?php

namespace App\Http\Controllers;

use App\Models\VehicleType;
use Carbon\Carbon;
use Illuminate\Http\Request;
use App\Models\Cuts;
use App\Models\Access;
use App\Models\Vehicle;


class AccessController extends Controller
{
    //

    public function recibVehicle($plate)
    {
        $vehicle = Vehicle::where('status', true)->where('plate', $plate)->first();
        if (is_null($vehicle)) {
            $vehicle = new Vehicle();
            $vehicle->plate = $plate;
            $vehicle->status = true;
            $vehicle->vehicle_type_id = 1;
            $vehicle->save();
        }
        $cut = Cuts::where('vehicle_type_id', $vehicle->vehicle_type_id)->orderBy('id', 'desc')->first();
        $acces=Access::where('vehicle_id', $vehicle->id)->orderBy('id', 'desc')->first();
       
        if(is_null($acces) || $acces->to!=''){
            $acces = new Access();
            $acces->vehicle_id = $vehicle->id;
            $acces->from = Carbon::now();
            $acces->to = '';
            $acces->cut_id = $cut->id;
            $acces->save();
            $acces->vehicle=$vehicle;
        }else{
            $acces=null;
        }
        return response()
            ->json(
                [ 'access' => $acces]
            );
    }
    public function dismissVehicle($plate)
    {
        $pay='0';
        $vehicle = Vehicle::where('status', true)->where('plate', $plate)->first();
        $vehicle_type=VehicleType::find($vehicle->vehicle_type_id);
        
        $acces = Access::where('vehicle_id', $vehicle->id)->orderBy('id', 'desc')->first();
        
        if(!is_null($acces) && $acces->to==''){
            $acces->to=Carbon::now();
            $acces->save();
            $acces->minutes=ceil((strtotime($acces->to)-strtotime($acces->from))/60);
            $acces->pay=$acces->minutes*$vehicle_type->price_per_minute;
            $acces->vehicle=$vehicle;
            $acces->vehicle->vehicle_type=$vehicle_type;
        }else{
            $acces=null;
        }
     
        return response()
            ->json(
                [
                    
                    'access' => $acces
                ]
            );
    }
    public function getAllIncompleteAccess(){
        $access=Access::where('to','')->get();
        foreach ($access as $key => $acces) {
            $acces->vehicle=Vehicle::find($acces->vehicle_id);
            $acces->vehicle->vehicle_type=VehicleType::find( $acces->vehicle->vehicle_type_id);
        }
        return response()
        ->json(
            [
                'access' => $access
            ]
        );
    }
    public function getAllCompleteAccess(){
        $access=Access::whereDate('to', Carbon::now()->toDateString())->where('to','!=','')->get();
        foreach ($access as $key => $acces) {
            $acces->vehicle=Vehicle::find($acces->vehicle_id);
            $acces->vehicle->vehicle_type=VehicleType::find( $acces->vehicle->vehicle_type_id);
            $acces->minutes=ceil((strtotime($acces->to)-strtotime($acces->from))/60);
            $acces->pay=$acces->minutes*$acces->vehicle->vehicle_type->price_per_minute;
        }
        return response()
        ->json(
            [
                'access' => $access
            ]
        );
    }
}