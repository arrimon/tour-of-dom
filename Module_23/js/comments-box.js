// Step:1 set an event handler to the button
document.getElementById('comment-btn')
    .addEventListener('click', function(){
        // Step:1 get the text in the comments area
        const commentsText = document.getElementById('cmt-area');
        const valueTextArea = commentsText.value;

        // Step:3 get the parent node where to publish comment
        const commentContent = document.getElementById('comment-box');

        // Step:4 create a comment p and set the inner text
        const createP = document.createElement('p');
        createP.classList.add('comment')
        createP.innerHTML = valueTextArea;

        // Step:5 Append the net comments under parent Box
        commentContent.appendChild(createP);

    })