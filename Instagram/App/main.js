/**  
 * Post Preview Image
*/

const post_preview_img = document.querySelector('.post-preview-img');
const p_photo = document.querySelector('.form input[name = "post_photo"]');

p_photo.oninput = (e) => {

    if (p_photo.value.length > 0) {

        post_preview_img.innerHTML =`<img class="preview-img" src="${p_photo.value}" alt="">`
    }
    else if(!p_photo.value){
        post_preview_img.innerHTML =`<img class="priview-img" src="https://images.vexels.com/media/users/3/131734/isolated/preview/05d86a9b63d1930d6298b27081ddc345-photo-preview-frame-icon.png" alt="">`
    }
    else {
        post_preview_img.innerHTML =`<img class="priview-img" src="https://images.vexels.com/media/users/3/131734/isolated/preview/05d86a9b63d1930d6298b27081ddc345-photo-preview-frame-icon.png" alt="">`
      }
}


/**  
 * Show Post
*/



const post_container = document.querySelector('.post-container') ;

const showPost = () => {

    const insta_post = getLsData('insta_post')
    let posts = '';

    if (insta_post.length > 0) {
        
        insta_post.reverse().forEach((item, index) => {
       
            posts += ` 
                    <!------- Post Header ------>
                        <div class="post-header">
                            <div class="author">
                                <div class="author-profile-img">
                                    <img src="${item.author_photo}" alt="">
                                </div>
                                <div class="post-author-name">
                                    <a href="#">${item.author_name}</a>
                                    <span><i class="fas fa-circle"></i> ${timeAgo(item.time)}</span>
                                    <a href="#"></a>
                                    <p>${item.post_location}</p>
                                </div>
                            </div>
                            <div class="three-dot">
                                <a href="#"><i class="fas fa-ellipsis-h"></i></a>
                            </div>
                        </div>
    
                        <!------ Post Body ------>
                        <div class="post-body">
                            <div class="post-img">
                                <img src="${item.post_photo}" alt="">
                            </div>
                            <div class="post-reaction">
                                <div class="p-reaction-left">
                                    <div class="post-like post-icon">
                                        <span><i class="far fa-heart"></i></span>
                                    </div>
                                    <div class="post-comment post-icon">
                                        <span><i class="far fa-comment"></i></span>
                                    </div>
                                    <div class="post-share post-icon">
                                        <span><i class="far fa-paper-plane"></i></span>
                                    </div>
                                </div>
                                <div class="post-save post-icon">
                                    <span><i class="far fa-bookmark"></i></span>
                                </div>
                            </div>
                            <div class="post-like-total">
                                <p>0 likes</p>
                            </div>
                            <div class="post-content">
                                ${item.post_text ?` <p> <a href="#">${item.author_name}</a>${item.post_text}<a href="#" class="post-tag">${item.post_tag}</a></p>` : ''}
                                
                            </div>
                            <div class="write-comment">
                                <p>View all comments</p>
                                <form action="#">
                                    <input type="text" name="" id="" placeholder="Add a comment…">
                                </form>
                                <span><i class="far fa-smile"></i></span>
                            </div>
                        </div> 
                               
            `
        })

    }else{
        posts = `<h2 class = 'text-center'>No Post Found</h2>`
    }

    post_container.innerHTML = posts;

}
showPost();



/**  
 * Post Form submit
*/

const form = document.querySelector('.form');
const msg = document.querySelector('.msg');






form.onsubmit = (e) => {

    e.preventDefault();

    let formData = new FormData(e.target);

    formData = Object.fromEntries(formData);

    
    // Form Validation
    if (!formData.author_name.trim() || !formData.author_photo.trim() ) {
        msg.innerHTML = creatAlert('All filds are required');
    } 
    else if (!formData.post_text.trim() && !formData.post_photo.trim() ) {
        msg.innerHTML = creatAlert('All filds are required');
    } 
    else{
        msg.innerHTML = creatAlert('Successful' , 'success');
        e.target.reset();
        post_preview_img.innerHTML =`<img class="priview-img" src="https://images.vexels.com/media/users/3/131734/isolated/preview/05d86a9b63d1930d6298b27081ddc345-photo-preview-frame-icon.png" alt="">`

        //Get prev Data
        const prevData = getLsData('insta_post');
        prevData.push({
            ...formData,
            post_photo: formData.post_photo ?? null,
            post_text: formData.post_text ?? null,
            post_location: formData.post_location ?? null,
            post_tag: formData.post_tag ?? null,
            time:Date.now()
        });

        //Send LS Data
        setLsData('insta_post', prevData);
        showPost();

    }

}

