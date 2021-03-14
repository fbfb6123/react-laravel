<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Employee;

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

      public function list(){

        try {
  
          $data = Employee::with("role")->get();
          $response['data'] = $data;
          $response['success'] = true;
  
        } catch (\Exception $e) {
          $response['message'] = $e->getMessage();
          $response['success'] = false;
        }
        return $response;
  
      }

      public function get($id){

        try {
  
          $data = Employee::with("role")->find($id);
  
          if ($data) {
            $response['data'] = $data;
            $response['message'] = "Load successful";
            $response['success'] = true;
          }
          else {
            $response['message'] = "Not found data id => $id";
            $response['success'] = false;
          }
  
        } catch (\Exception $e) {
          $response['message'] = $e->getMessage();
          $response['success'] = false;
        }
        return $response;
      }

      public function update(Request $request,$id){

        try {
  
          $data['name_lastname'] = $request['name'];
          $data['email'] = $request['email'];
          $data['city'] = $request['city'];
          $data['direction'] = $request['address'];
          $data['phone'] = $request['phone'];
          $data['rol'] = $request['rol'];
  
          Employee::where("id",$id)->update($data);
  
          $response['message'] = "Updated successful";
          $response['success'] = true;
  
        } catch (\Exception $e) {
          $response['message'] = $e->getMessage();
          $response['success'] = false;
        }
        return $response;
  
      }
}
