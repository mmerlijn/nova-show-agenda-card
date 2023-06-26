<?php

use App\Http\Resources\Agenda\RoomResource;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Card API Routes
|--------------------------------------------------------------------------
|
| Here is where you may register API routes for your card. These routes
| are loaded by the ServiceProvider of your card. You're free to add
| as many additional routes to this file as your card may require.
|
*/

Route::get('show-planning/{room}/{next?}', function (Request $request,$room,$next=0) {
    if (!$next) {
        $startOn = now()->startOfDay();
        $endsOn = now()->endOfWeek();
    } else {
        $startOn = now()->addMonths($next)->startOfWeek();
        $endsOn = now()->addMonths($next)->endOfWeek();
    }
    $room = \App\Models\Agd\Room::find($room);
    return [
        'agenda'=>$room->agenda->whereBetween('date', [$startOn->format('Y-m-d'), $endsOn->format('Y-m-d')])->toArray(),
        'room'=> RoomResource::make($room),
        ];
})->name('show-agenda-card');
