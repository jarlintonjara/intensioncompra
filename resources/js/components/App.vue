<template>
    <div class="main">
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <a class="navbar-brand" href="#">DERCO</a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav mr-auto">
                <li class="nav-item active">
                    <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
                </li>
                <li class="nav-item">
                    <router-link class="nav-link" to="/estacionamiento">Estacionamientos</router-link>
                </li>
                
                </ul>
                <form class="form-inline my-2 my-lg-0">
                    <li class="nav-item active">
                        <a class="nav-link" href="#">Login </a>
                    </li>
                </form>
            </div>
        </nav>
        <div class="">
            <router-view></router-view>
        </div>
    </div>
</template>