<?php

namespace App\Http\Controllers;

use App\Models\SettingModel;
use App\Http\Requests\StoreSettingModelRequest;
use App\Http\Requests\UpdateSettingModelRequest;
use Illuminate\Http\Request;

class SettingController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $data = SettingModel::all();
        return response()->json($data);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function updateSetting(Request $request)
    {

    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \App\Http\Requests\StoreSettingModelRequest  $request
     * @return \Illuminate\Http\Response
     */
    public function store(StoreSettingModelRequest $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\SettingModel  $settingModel
     * @return \Illuminate\Http\Response
     */
    public function show(SettingModel $settingModel)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\SettingModel  $settingModel
     * @return \Illuminate\Http\Response
     */
    public function edit(SettingModel $settingModel)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \App\Http\Requests\UpdateSettingModelRequest  $request
     * @param  \App\Models\SettingModel  $settingModel
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        $setting = SettingModel::findOrFail($id);
        $setting->update($request->all());
        return response()->json($setting);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\SettingModel  $settingModel
     * @return \Illuminate\Http\Response
     */
    public function destroy(SettingModel $settingModel)
    {
        //
    }
}
