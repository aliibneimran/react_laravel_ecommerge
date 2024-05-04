<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <title inertia>{{ config('app.name', 'Laravel') }}</title>

        <!-- Fonts -->
        <link rel="preconnect" href="https://fonts.bunny.net">
        <link href="https://fonts.bunny.net/css?family=figtree:400,500,600&display=swap" rel="stylesheet" />


        <link rel="stylesheet" href="{{asset('assets/css/app.min.css')}}">
        {{-- Login --}}
        <link rel="stylesheet" href="assets/bundles/bootstrap-social/bootstrap-social.css">
        {{-- Register --}}
        <link rel="stylesheet" href="assets/bundles/jquery-selectric/selectric.css">
        <!-- Template CSS -->
        <link rel="stylesheet" href="{{asset('assets/css/style.css')}}">
        <link rel="stylesheet" href="{{asset('assets/css/components.css')}}">
        <!-- Custom style CSS -->
        <link rel="stylesheet" href="{{asset('assets/css/custom.css')}}">
        <link rel='shortcut icon' type='image/x-icon' href="{{asset('assets/img/favicon.ico')}}" />


        <!-- Scripts -->
        @routes
        @viteReactRefresh
        @vite(['resources/js/app.jsx', "resources/js/Pages/{$page['component']}.jsx"])
        @inertiaHead
    </head>
    <body class="font-sans antialiased">
        @inertia

        <script src="{{asset('assets/js/app.min.js')}}"></script>
        <!-- JS Libraies -->
        <script src="{{asset('assets/bundles/apexcharts/apexcharts.min.js')}}"></script>
        <!-- Page Specific JS File -->
        <script src="{{asset('assets/js/page/index.js')}}"></script>
        <!-- Template JS File -->
        <script src="{{asset('assets/js/scripts.js')}}"></script>
        <!-- Custom JS File -->
        <script src="{{asset('assets/js/custom.js')}}"></script> 

         <!-- JS Libraies -->
        <script src="assets/bundles/jquery-pwstrength/jquery.pwstrength.min.js"></script>
        <script src="assets/bundles/jquery-selectric/jquery.selectric.min.js"></script>
        <!-- Page Specific JS File -->
        <script src="assets/js/page/auth-register.js"></script>
    </body>
</html>
