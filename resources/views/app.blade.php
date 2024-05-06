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
        <link rel="stylesheet" href="{{asset('assets/bundles/bootstrap-social/bootstrap-social.css')}}">
        {{-- Register --}}
        <link rel="stylesheet" href="{{asset('assets/bundles/jquery-selectric/selectric.css')}}">
        <!-- Template CSS -->
        <link rel="stylesheet" href="{{asset('assets/css/style.css')}}">
        <link rel="stylesheet" href="{{asset('assets/css/components.css')}}">
        <!-- Custom style CSS -->
        <link rel="stylesheet" href="{{asset('assets/css/custom.css')}}">
        <link rel='shortcut icon' type='image/x-icon' href="{{asset('assets/img/favicon.ico')}}" />
        {{-- DataTable --}}
        <link rel="stylesheet" href="{{asset('assets/bundles/datatables/datatables.min.css')}}">
        <link rel="stylesheet" href="{{asset('assets/bundles/datatables/DataTables-1.10.16/css/dataTables.bootstrap4.min.css')}}">
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
        <script src="{{asset('assets/bundles/jquery-pwstrength/jquery.pwstrength.min.js')}}"></script>
        <script src="{{asset('assets/bundles/jquery-selectric/jquery.selectric.min.js')}}"></script>
        <!-- User Register -->
        <script src="{{asset('assets/js/page/auth-register.js')}}"></script>

        <!-- Data Table -->
        <script src="{{asset('assets/bundles/datatables/datatables.min.js')}}"></script>
        <script src="{{asset('assets/bundles/datatables/DataTables-1.10.16/js/dataTables.bootstrap4.min.js')}}"></script>
        <script src="{{asset('assets/bundles/datatables/export-tables/dataTables.buttons.min.js')}}"></script>
        <script src="{{asset('assets/bundles/datatables/export-tables/buttons.flash.min.js')}}"></script>
        <script src="{{asset('assets/bundles/datatables/export-tables/jszip.min.js')}}"></script>
        <script src="{{asset('assets/bundles/datatables/export-tables/pdfmake.min.js')}}"></script>
        <script src="{{asset('assets/bundles/datatables/export-tables/vfs_fonts.js')}}"></script>
        <script src="{{asset('assets/bundles/datatables/export-tables/buttons.print.min.js')}}"></script>
        <script src="{{asset('assets/js/page/datatables.js')}}"></script>
        <script src="{{asset('assets/bundles/jquery-ui/jquery-ui.min.js')}}"></script>
    </body>
</html>
