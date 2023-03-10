<?php

namespace App\Http\Controllers;

use App\Models\Access;
use App\Models\Cuts;
use App\Models\Vehicle;
use App\Models\VehicleType;
use Carbon\Carbon;
use Illuminate\Http\Request;

class CutsController extends Controller
{
    //
   
    public function generateCutResident(){
        $vehicle_type=VehicleType::where('vehicle_type','Residente')->first();
        $cut=Cuts::where('status',1)->where('vehicle_type_id',$vehicle_type->id)->orderBy('id', 'desc')->first();
       $vehicles=Vehicle::where('vehicle_type_id',$vehicle_type->id)->get();
        
        foreach ($vehicles as $key => $vehicle) {
            $access=Access::where('cut_id',$cut->id)->where('vehicle_id',$vehicle->id)->get();
            $minutes=0;
            foreach ($access as $key => $acces) {
              $minutes+=ceil((strtotime($acces->to)-strtotime($acces->from))/60);
            }
            $vehicle->minutes=$minutes;
            $vehicle->pay=$minutes*$vehicle_type->price_per_minute;
            if($vehicle->pay==0){
                unset($vehicles[$key]);
            }
        }
       // $cut->status=0;
       // $cut->save();
       // $cut=new Cuts();
       // $cut->status=1;
       // $cut->vehicle_type_id=$vehicle_type->id;
        //$cut->save();
        return response()
        ->json(
            [
                'vehicles' => $vehicles
            ]
        );
    }
    public function generateCutOficial(){
        $vehicle_type=VehicleType::where('vehicle_type','Residente')->first();
        $cut=Cuts::where('status',1)->where('vehicle_type_id',$vehicle_type->id)->orderBy('id', 'desc')->first();
       $vehicles=Vehicle::where('vehicle_type_id',$vehicle_type->id)->get();
        
        foreach ($vehicles as $key => $vehicle) {
            $access=Access::where('cut_id',$cut->id)->where('vehicle_id',$vehicle->id)->get();
            $minutes=0;
            foreach ($access as $key => $acces) {
              $minutes+=ceil((strtotime($acces->to)-strtotime($acces->from))/60);
            }
            $vehicle->minutes=$minutes;
           
            if($vehicle->pay==0){
                unset($vehicles[$key]);
            }
        }
        //$cut->status=0;
        //$cut->save();
       // $cut=new Cuts();
       // $cut->status=1;
        //$cut->vehicle_type_id=$vehicle_type->id;
       // $cut->save();
        return response()
        ->json(
            [
                'vehicles' => $vehicles
            ]
        );
    }
    public function generateNewMonthCut(){
        $vehicle_types=VehicleType::where('vehicle_type','!=','No Residente')->get();
        foreach ($vehicle_types as $key => $vehicle_type) {
            # code...
            $cut=Cuts::where('status',1)->where('vehicle_type_id',$vehicle_type->id)->orderBy('id', 'desc')->first();
            $cut->status=0;
            $cut->save();
            $cut=new Cuts();
            $cut->status=1;
            $cut->vehicle_type_id=$vehicle_type->id;
            $cut->save();
        }
        return response()
        ->json(
            [
                
            ]
        );
    }
}
