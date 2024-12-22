<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;

class TicketsController extends Controller
{
    public function __invoke(Request $request): JsonResponse
    {
        return new JsonResponse([
            'tickets' => [
                [
                    'id' => '1',
                    'name' => 'Unable to Access Company Email',
                    'description' => 'User reports that they are unable to log in to their
                        company email account. They receive an "invalid credentials" error message
                        despite using the correct username and password. Requesting assistance to
                        reset their password and regain access.',
                    'status' => 'NEW',
                ],
                [
                    'id' => '2',
                    'name' => 'Printer Not Responding',
                    'description' => 'The office printer is not responding to print jobs from any workstation.
                        Users have tried restarting the printer and checking connections, but the issue persists.
                        Requesting a technician to investigate the printers status and connectivity.',
                    'status' => 'OPEN',
                ],
                [
                    'id' => '3',
                    'name' => 'Software Installation Request',
                    'description' => 'User needs assistance with installing a new software application (XYZ Software)
                        on their workstation. The application is required for an upcoming project deadline.
                        Requesting IT support to facilitate the installation process and ensure proper licensing.',
                    'status' => 'OPEN',
                ],
            ]
        ]);
    }
}
