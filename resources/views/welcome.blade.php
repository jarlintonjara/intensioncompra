<!doctype html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <!-- CSRF Token -->
    <meta name="csrf-token" content="{{ csrf_token() }}">

    <title>{{ config('app.name', 'Laravel') }}</title>

    <!-- Scripts -->
    <script src="{{ asset('js/app.js') }}" defer></script>

    <!-- Fonts -->
    <link rel="dns-prefetch" href="//fonts.gstatic.com">
    <link href="https://fonts.googleapis.com/css?family=Nunito" rel="stylesheet">

    <link rel="stylesheet" media="screen, print" href="{{ asset('admin/css/vendors.bundle.css') }}">
    <link rel="stylesheet" media="screen, print" href="{{ asset('admin/css/app.bundle.css') }}">

    <link rel="stylesheet" media="screen, print" href="{{ asset('admin/css/markdown.css') }}">
    <link rel="stylesheet" media="screen, print" href="{{ asset('admin/css/datagrid/datatables/datatables.bundle.css') }}">
    <link href="{{ asset('css/app.css') }}" rel="stylesheet">
</head>

<body>
    <div id="app">
        <app></app>
    </div>
    <script src="{{ asset('admin/js/vendors.bundle.js') }}"></script>
    <script src="{{ asset('admin/js/app.bundle.js') }}"></script>
    <script src="{{ asset('admin/js/datagrid/datatables/datatables.bundle.js') }}"></script>
</body>

</html>