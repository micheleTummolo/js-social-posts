const posts = [
    {
        "id": 1,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/300?image=171",
        "author": {
            "name": "Phil Mangione",
            "image": "https://unsplash.it/300/300?image=15"
        },
        "likes": 80,
        "created": "2021-06-25"
    },
    {
        "id": 2,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=112",
        "author": {
            "name": "Sofia Perlari",
            "image": "https://unsplash.it/300/300?image=10"
        },
        "likes": 120,
        "created": "2021-09-03"
    },
    {
        "id": 3,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=234",
        "author": {
            "name": "Chiara Passaro",
            "image": "https://unsplash.it/300/300?image=20"
        },
        "likes": 78,
        "created": "2021-05-15"
    },
    {
        "id": 4,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=24",
        "author": {
            "name": "Luca Formicola",
            "image": null
        },
        "likes": 56,
        "created": "2021-04-03"
    },
    {
        "id": 5,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=534",
        "author": {
            "name": "Alessandro Sainato",
            "image": "https://unsplash.it/300/300?image=29"
        },
        "likes": 95,
        "created": "2021-03-05"
    }
];

let postContainer = document.getElementById('container')

postGenerator(posts.length)

let liked = document.getElementsByClassName('js-like-button')

let likedPosts = []

for (let i = 0; i < liked.length; i++){
    
    liked[i].addEventListener('click', function(){
        liked[i].classList.add('like-button--liked')

        const postId = this.dataset.postid
        const likes = document.getElementById(`like-counter-${postId}`)

        const likesNumber = parseInt(likes.innerText)

        if (!likedPosts.includes(postId)){
            likedPosts.push(postId)
            likes.innerText = likesNumber+1
            console.log(likedPosts)
        }
        else {
            let index = likedPosts.indexOf(postId)
            if (index > -1) { 
                likedPosts.splice(index, 1); 
              }
            liked[i].classList.remove('like-button--liked')
            likes.innerText = likesNumber-1
            console.log(likedPosts)
        }
        

    })
}


/* for (i = 0; i < posts.length; i++) {
    if (posts[i].author.image == null){
        let splitName = posts[i].author.name.split(' ')
        console.log(splitName)
        let name = splitName[0]
        let surname = splitName[1]
        let nameLetter = name[0]
        let surnameLetter = surname[0]
        let userNameLetters = `${nameLetter}${surnameLetter}`
        console.log(nameLetter)
        console.log(surnameLetter)
        console.log(userNameLetters)
    }
} */


function postGenerator(arrayLength) {

    for (let i = 0; i < arrayLength; i++) {
        let fallback
        if (posts[i].author.image == null){
            let splitName = posts[i].author.name.split(' ')
            console.log(splitName)
            let name = splitName[0]
            let surname = splitName[1]
            let nameLetter = name[0]
            let surnameLetter = surname[0]
            let authorImage = `${nameLetter}${surnameLetter}`
            fallback = authorImage
            console.log(authorImage)
            console.log(i)
            
        }

        postContainer.innerHTML += `
        <div class="post">
            <div class="post__header">
                <div class="post-meta">                    
                    <div class="post-meta__icon profile_image_null">
                        <img class="profile-pic" src=${posts[i].author.image} alt="${fallback}">                    
                    </div>
                    <div class="post-meta__data">
                        <div class="post-meta__author">${posts[i].author.name}</div>
                        <div class="post-meta__time">${posts[i].created}</div>
                    </div>                    
                </div>
            </div>
            <div class="post__text">${posts[i].content}</div>
            <div class="post__image">
                <img src=${posts[i].media} alt="">
            </div>
            <div class="post__footer">
                <div class="likes js-likes">
                    <div class="likes__cta">
                        <a class="like-button  js-like-button" href="#" data-postid="${posts[i].id}">
                            <i class="like-button__icon fas fa-thumbs-up" aria-hidden="true"></i>
                            <span class="like-button__label">Mi Piace</span>
                        </a>
                    </div>
                    <div class="likes__counter">
                        Piace a <b id="like-counter-${posts[i].id}" class="js-likes-counter">${posts[i].likes}</b> persone
                    </div>
                </div> 
            </div>            
        </div>`
    }
}