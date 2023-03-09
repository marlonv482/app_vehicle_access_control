export interface VehicleModel{
    id:number,
    plate:string,
    status:boolean,
    vehicle_type_id:number
    vehicle_type:{
        vehicle_type:string
    },
    created_at:string,
    updated_at:string
}