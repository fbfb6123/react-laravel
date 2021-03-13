<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class EmployeeController extends Controller
{
    public function index(){
        return view("employee");
      }



      public function create(Request $request){

        try {
  
          $insert['name_lastname'] = $request['name'];
          $insert['email'] = $request['email'];
          $insert['city'] = $request['city'];
          $insert['direction'] = $request['address'];
          $insert['phone'] = $request['phone'];
          $insert['rol'] = $request['rol'];
  
          Employee::insert($insert);
  
          $response['message'] = "Save succesful";
          $response['succes'] = true;
  
        } catch (\Exception $e) {
          $response['message'] = $e->getMessage();
          $response['succes'] = true;
        }
         
        return $response;
      }
}
