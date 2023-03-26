const posts = [
    {title: 'Post One', body: 'This is post one'},
    {title: 'Post Two', body: 'This is post two'}
];

function getPosts() {
    setTimeout(() => {
        let output = '';
        posts.forEach((post) => {
            output += `${post.title}\n`;
        });
        console.log(output);
    }, 1000);
}

function createPost(post) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const error = false;
            if (!error) {
                resolve(posts.push(post))
            } else {
                reject('Error: Something went wrong');
            }
        }, 2000);
    });
}

// createPost({title: 'Post Three', body: 'This is post three'});
// .then(getPosts)
// .catch(err => console.log(err))
async function func() {
    await createPost({title: 'Post Three', body: 'This is post three'});
    getPosts()
}

func().then().catch(err => console.log(err))