$(function() {
    /*region index.php handlers*/
	$("#nav-main-studio").on("click", function(){
		window.location.href="/semantic_ui/studio.php";
	});

    $("#nav-main-library").on("click", function(){
        window.location.href="/semantic_ui/library.php";
    });

    $('#btn-slideout').on('click', function(){
        $('.sidebar')
            .sidebar('toggle');
    });
    /*endregion index.php handlers*/

    /*region studio.php handlers*/
    $("#nav-studio-main").on("click", function(){
        window.location.href="/semantic_ui/index.php";
    });

    /*endregion studio.php handlers*/

    /*region library.php handlers*/
    $("#nav-library-main").on("click", function(){
        window.location.href="/semantic_ui/index.php";
    });

    /*endregion library.php handlers*/
});