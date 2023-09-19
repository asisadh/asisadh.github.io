$(document).ready(function (){
    let users;
    let userId;

    $(function() {
        $("#fetch").click(fetchPost);
    });

    function fetchPost() {
        //first fetch users data then fetch post data
        $.get("https://jsonplaceholder.typicode.com/users").done(fetchUser);
    }

    function fetchUser(response){
        users = JSON.parse(JSON.stringify(response));

        // start loading
        userId = $("#userId").val();

        if(userId === "") {
            $("#posts").html("No User to search post for.");
        }else{
            // ajax call
            $.get("https://jsonplaceholder.typicode.com/posts?userId=" + userId, {
            }).done(loadPost)
                .fail(showError)
                .always(fetchComplete);
        }
    }

    function findUser(userId){
        let currentUser;
        users.forEach(function (user){
            if (user.id == userId){
                currentUser = user;
            }
        });
        return currentUser;
    }

    function loadPost(response) {
        let posts = JSON.parse(JSON.stringify(response));

        let user = findUser(userId);

        let blogPage = "";

        if(user != null){
            blogPage += "<span> Name:" + user.name + "</span><br>";
            blogPage += "<span> Email:" + user.email + "</span><br>";
            blogPage += "<span> Address:" + user.address.street + " #" + user.address.suite + ", " +  user.address.city +", "+ user.address.zipcode + "</span><br>";
        }

        let blogPost = "<div class='post-container'>";

        posts.forEach(function(post){
            blogPost += "<div class ='post' data-post-id='" +  post.id + "'>"
            blogPost += "<p class='blogPostTitle'> Title: " + post.title +"</p>"
            blogPost += "<p class='blogPostBody'> Body: " + post.body +"</p>"
            blogPost += "<button class='show-comments'>Show Comments</button>"
            blogPost += "<div class='comments'></div>"
            blogPost += "</div>"
        });

        blogPage += blogPost
        blogPage += "</div>";

        $("#posts").html(blogPage);
        $('.post-container').on('click', '.show-comments', fetchComments);
    }

    function fetchComments(){
        // Retrieve the post ID from the data attribute
        let buttonClicked = $(this);
        let postId = buttonClicked.closest('.post').data('post-id');

        // Make an AJAX request to retrieve comments
        $.ajax({
            url: 'https://jsonplaceholder.typicode.com/comments?postId=' + postId,
            method: 'GET',
            success: function (comments){
                let commentsJSON = JSON.parse(JSON.stringify(comments));
                const $commentsContainer = buttonClicked.closest('.post').find('.comments');
                $commentsContainer.empty();
                $.each(commentsJSON, function (index, comment) {
                    $commentsContainer.append(
                        '<p> Name: ' + comment.name + '</p>' +
                        '<p> Email: ' + comment.email + '</p>' +
                        '<p> Comment: ' + comment.body + '</p>'
                    );
                });
            },
        });
    }

    function showError(){
        $("#posts").html("Cannot fetch the blog data");
    }

    function fetchComplete() {

    }
});