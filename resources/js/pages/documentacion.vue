<template>
    <main id="js-page-content" role="main" class="page-content">
        <ol class="breadcrumb page-breadcrumb">
            <li class="breadcrumb-item"><a href="javascript:void(0);">SmartAdmin</a></li>
            <li class="breadcrumb-item">REST API</li>
            <li class="breadcrumb-item active">Documentation</li>
            <li class="position-absolute pos-top pos-right d-none d-sm-block"><span class="js-get-date"></span></li>
        </ol>
        <div class="subheader">
            <h1 class="subheader-title">
                Documentation
                <small>
                    Learn more about the built-in REST API for SmartAdmin PHP
                </small>
            </h1>
        </div>
        <div id="panel-1" class="panel">
            <div class="panel-hdr">
                <h2>
                    Documentation
                </h2>
                <div class="panel-toolbar">
                    <button class="btn btn-panel" data-action="panel-collapse" data-toggle="tooltip" data-offset="0,10"
                        data-original-title="Collapse"></button>
                    <button class="btn btn-panel" data-action="panel-fullscreen" data-toggle="tooltip" data-offset="0,10"
                        data-original-title="Fullscreen"></button>
                    <button class="btn btn-panel" data-action="panel-close" data-toggle="tooltip" data-offset="0,10"
                        data-original-title="Close"></button>
                </div>
            </div>
            <div class="panel-container show">
                <div class="panel-content">
                    <div class="panel-tag">
                        This demo requires <strong>Database</strong> configured. Please head over to the <a
                            href="info_app_docs.html#database">database installation</a> page to play around with it.
                    </div>
                    <div class="markdown-body">
                        
                        <h2 id="routes">
                            <a href="#routes" class="anchor"><span class="fal fa-link" /></a>
                            <span>Rutas</span>
                        </h2>
                        
                        <h2 id="routes">
                            <a href="#routes" class="anchor"><span class="fal fa-link" /></a>
                            <span>Rutas</span>
                        </h2>
                        <p>The API routes are basically the endpoints of your API. These routes are configured/defined under
                            <code>public/api</code> folder. To learn more on how to design your API better, follow this <a
                                href="https://www.restapitutorial.com/lessons/restfulresourcenaming.html">tutorial</a> about
                            REST apis.</p>
                        <p>Example route request:</p>
                        <pre><code class=" hljs">GET https://smartadmin.lodev09.com/api/users/:username</code></pre>
                        <p>Response:</p>
                        <pre><code class="language-json hljs">HTTP/1.1 200 OK
                            {
                                "id": 1,
                                "username": "lodev09",
                                "name": "Jovanni",
                                "email": "lodev09@gmail.com",
                                "created_at": "2019-07-02T19:34:22Z"
                            }</code></pre>
                        <h2 id="middlewares">
                            <a href="#middlewares" class="anchor"><span class="fal fa-link" /></a>
                            <span>Middlewares</span>
                        </h2>
                        <p>SmartAdmin PHP includes various <em>middlewares</em> to handle each request. For example, the
                            <code>\API\AuthMiddleware</code> where it validates the user credentials passed through the
                            <code>Authentication</code> header -- basically checking if the request is authenticated or not.
                        </p>
                        <p>Here are the included middlewares:</p>
                        <table>
                            <thead>
                                <tr>
                                    <th>Class</th>
                                    <th>Description</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td><code>\API\AuthMiddleware</code></td>
                                    <td>Authenticates requests</td>
                                </tr>
                                <tr>
                                    <td><code>\API\LoggerMiddleware</code></td>
                                    <td>Logs requests</td>
                                </tr>
                                <tr>
                                    <td><code>\API\RateLimitMiddleware</code></td>
                                    <td>Calculates rate limits</td>
                                </tr>
                                <tr>
                                    <td><code>\API\RequestMiddleware</code></td>
                                    <td>Converts all requests to <code>JSON</code></td>
                                </tr>
                            </tbody>
                        </table>
                        <h2 id="authentication">
                            <a href="#authentication" class="anchor"><span class="fal fa-link" /></a>
                            <span>Authentication</span>
                        </h2>
                        <p>The built-in REST API server comes with the Authentication routine which is handled by the
                            <code>\API\AuthMiddleware</code> middleware. Check out the <a
                                href="php_auth_docs.html">Authentication</a> documentation to learn more.</p>
                        <h2 id="credits">
                            <a href="#credits" class="anchor"><span class="fal fa-link" /></a>
                            <span>Credits</span>
                        </h2>
                        <p>SmartAdmin PHP uses <a href="https://github.com/slimphp/Slim">slimphp/Slim</a> package to host
                            the API server. Refer to their documentation on how to create your own routes and customize your
                            REST API server.</p>
                    </div>
                </div>
            </div>
        </div>
    </main>
</template>
<script>
export default {
    
}
</script>