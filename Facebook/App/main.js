
let post = '';

users.forEach((item, index) => {
   
    

    post += ` 
    
        <div class="middle-box">
            <div class="post-box">
                <div class="post-author">


                    <div  class="post-author-left">
                        <div class="post-author-img author-img">
                            <img src="${item.profile_photo} " alt="">
                        </div>
                        <div class="post-author-name">
                            <a href="#">${item.name}</a>
                            <div class="post-time-ago">
                                <span>${item.post_time_ago} . </span>
                                <svg fill="currentColor" viewBox="0 0 16 16" width="1em" height="1em" class="x1lliihq x1k90msu x2h7rmj x1qfuztq xcza8v6 x1kpxq89 xsmyaan" title="Shared with Public"><g fill-rule="evenodd" transform="translate(-448 -544)"><g><path d="M109.5 408.5c0 3.23-2.04 5.983-4.903 7.036l.07-.036c1.167-1 1.814-2.967 2-3.834.214-1 .303-1.3-.5-1.96-.31-.253-.677-.196-1.04-.476-.246-.19-.356-.59-.606-.73-.594-.337-1.107.11-1.954.223a2.666 2.666 0 0 1-1.15-.123c-.007 0-.007 0-.013-.004l-.083-.03c-.164-.082-.077-.206.006-.36h-.006c.086-.17.086-.376-.05-.529-.19-.214-.54-.214-.804-.224-.106-.003-.21 0-.313.004l-.003-.004c-.04 0-.084.004-.124.004h-.037c-.323.007-.666-.034-.893-.314-.263-.353-.29-.733.097-1.09.28-.26.863-.8 1.807-.22.603.37 1.166.667 1.666.5.33-.11.48-.303.094-.87a1.128 1.128 0 0 1-.214-.73c.067-.776.687-.84 1.164-1.2.466-.356.68-.943.546-1.457-.106-.413-.51-.873-1.28-1.01a7.49 7.49 0 0 1 6.524 7.434" transform="translate(354 143.5)"></path><path d="M104.107 415.696A7.498 7.498 0 0 1 94.5 408.5a7.48 7.48 0 0 1 3.407-6.283 5.474 5.474 0 0 0-1.653 2.334c-.753 2.217-.217 4.075 2.29 4.075.833 0 1.4.561 1.333 2.375-.013.403.52 1.78 2.45 1.89.7.04 1.184 1.053 1.33 1.74.06.29.127.65.257.97a.174.174 0 0 0 .193.096" transform="translate(354 143.5)"></path><path fill-rule="nonzero" d="M110 408.5a8 8 0 1 1-16 0 8 8 0 0 1 16 0zm-1 0a7 7 0 1 0-14 0 7 7 0 0 0 14 0z" transform="translate(354 143.5)"></path></g></g></svg>
                            </div>
                        </div>
                    </div>
                    
                    <div class="post_more_btn">
                        <span><i class="fas fa-ellipsis-h"></i></span>
                    </div>



                </div>
                <div class="post-content">
                    <div class="post-text">
                        <p>${item.post_text}</p>
                    </div>
                    <div class="post-image">
                        <img src="${item.post_img} " alt="">
                    </div>
                    <div class="post-reaction">
                        <div class="like-comment">
                            <div class="post-like">
                                <div class="like-img">
                                    <img class="react" src="./Asset/Img/react.svg" alt="">
                                    <img class="thumb" src="./Asset/Img/thumbs.svg" alt="">
                                    <span>${item.post_like} </span>
                                </div>
                            </div>
                            <div class="post-comment">
                                <span>${item.post_comment} Comments</span>
                            </div>
                        </div>
                        <div class="post-footer">
                            <div class="post-footer-button">
                                <span><i style="background-image: url(&quot;https://static.xx.fbcdn.net/rsrc.php/v3/ye/r/E8xo6DK52h0.png&quot;); background-position: 0px -318px; background-size: auto; width: 18px; height: 18px; background-repeat: no-repeat; display: inline-block;"></i></span>
                                <span>Like</span>
                            </div>
                            <div class="post-footer-button">
                                <span><i style="background-image: url(&quot;https://static.xx.fbcdn.net/rsrc.php/v3/ye/r/E8xo6DK52h0.png&quot;); background-position: 0px -280px; background-size: auto; width: 18px; height: 18px; background-repeat: no-repeat; display: inline-block;"></i></span>
                                <span>Comment</span>
                            </div>
                            <div class="post-footer-button">
                                <span><i style="background-image: url(&quot;https://static.xx.fbcdn.net/rsrc.php/v3/ye/r/E8xo6DK52h0.png&quot;); background-position: 0px -337px; background-size: auto; width: 18px; height: 18px; background-repeat: no-repeat; display: inline-block;"></i></span>
                                <span>Share</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>                     
        </div>               
    `
})

const all_post = document.querySelector('.all-post') ;

all_post.innerHTML = post;





/**
 * Create post
 */


const create_post_content = document.querySelector('.create-post-content');
const add_your_post = document.querySelector('.add-your-post');

const show_modal = document.querySelectorAll('.show_modal');

const post_img_btn = document.querySelector('.post-img-btn');
const backbtn = document.querySelector('.backbtn');
const post_submit_btn = document.querySelector('.post-submit-btn');




post_img_btn.onclick = (e) => {
    add_your_post.style.display = 'block';
}

backbtn.onclick = (e) => {
    add_your_post.style.display = 'none';
}

// If click outside then hide .add_your_post div
document.addEventListener('click', (e) => {
   
    if (!add_your_post.contains(e.target) && e.target !== post_img_btn) {
        add_your_post.style.display = 'none';
    }
    
});





/**  
 * Post Form submit
 */

const form = document.querySelector('.create-post-content form');
const msg = document.querySelector('.msg');

form.onsubmit = (e) => {

    e.preventDefault();

    let formData = new FormData(e.target);

    formData = Object.fromEntries(formData);

    // Form Validation

    if (!formData.author_name.trim() || !formData.author_photo.trim() ) {
        msg.innerHTML = creatAlert('2 filds are required');
    } 
    else if (!formData.post_text.trim() && !formData.post_photo.trim() ) {
        msg.innerHTML = creatAlert('All filds are required');
    } 
    else{
        msg.innerHTML = creatAlert('Successful' , 'success');
        // For input value empty after form submit
        input.forEach(item => {
            item.value = '';
        });
    }
}


