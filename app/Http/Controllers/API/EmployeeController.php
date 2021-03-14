<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Role;

class EmployeeController extends Controller
{
    //
    public function list_role(){ 
      $data = Role::get();

      $response['data'] = $data;
      $response['succes'] = true;
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
}