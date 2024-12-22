<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;

class DashboardController extends Controller
{
    public function __invoke(Request $request): JsonResponse
    {
        return new JsonResponse([
            'new' => rand(1, 10),
            'open' => rand(1, 10),
        ]);
    }
}
