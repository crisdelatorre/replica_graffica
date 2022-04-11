
/**
 * INICIO DE FUNCIONES
 */
window.addEventListener('load', () => {
    postRender();
    highlightImgRender();
    tagsRender();
    searchboxOpen();
    menuAside();
    postsMenu();
});


/**
 * PINTADO DE DATOS
 */
let postRender = () => {

    let postsArray = [];

    grafficaData.posts.forEach(post => {
        if (post.section == 'gallery') {
            postsArray.push(post);

            if (post.type == 'big') {
                let displayedArticle = `
                <article class="post displayed">
                <div class="post_img">
                    <img src="${post.img}" alt="${post.tittle}">
                </div>
                <div class="post_content">
                    <div class="tag">${post.tag}</div>
                    <div class="tittle">${post.tittle}</div>
                    <div class="author">
                        <div class="by">por</div>
                        <div class="author_name">${post.author}</div>
                    </div>
                </div>

                <div class="post_menu_icon">
                        <span class="fa fa-bars"></span>
                    </div>
                    <div class="post_menu_items">
                        <ul>
                            <li>Tienda</li>
                            <li>Ilustración</li>
                            <li>Tipografía</li>
                            <li>Branding</li>
                            <li>Packaging</li>
                            <li>Opinión</li>
                            <li>Gràffica+</li>
                        </ul>
                    </div>

            </article>
                `;

                document.querySelector('.posts_gallery').innerHTML += displayedArticle;
            }

            if (post.type == 'post') {
                let article = `
                <article class="post">
                    <div class="post_img">
                        <img src="${post.img}" alt="${post.tittle}">
                    </div>
                    <div class="post_content">
                        <div class="tag">${post.tag}</div>
                        <div class="tittle">${post.tittle}</div>
                        <div class="author">
                            <div class="by">por</div>
                            <div class="author_name">${post.author}</div>
                        </div>
                    </div>

                    <div class="post_menu_icon">
                            <span class="fa fa-bars"></span>
                    </div>
                    <div class="post_menu_items">
                        <ul>
                            <li>Tienda</li>
                            <li>Ilustración</li>
                            <li>Tipografía</li>
                            <li>Branding</li>
                            <li>Packaging</li>
                            <li>Opinión</li>
                            <li>Gràffica+</li>
                        </ul>
                    </div>
                </article>
                `;

                document.querySelector('.posts_gallery').innerHTML += article;
            }
        }

    });

};


let highlightImgRender = () => {

    let highlightArray = [];

    grafficaData.highlight.forEach(post => {
        if (post.section == 'highlightImg') {
            highlightArray.push(post);

            let highlightImg = `
                <aside class="hl_position">
                    <div class="hl_img">
                        <img src="${post.img}" alt="${post.tittle}">
                    </div>

                    <div class="hl_content">
                        <div class="hl_tag">${post.tag}</div>
                        <div class="hl_tittle">${post.tittle}</div>
                        <div class="hl_author">
                            <div class="hl_by">por</div>
                            <div class="hl_name">${post.author}</div>
                        </div>
                        <div class="button"><a href="">leer</a></div>
                    </div>
                </aside>
            `;

            document.querySelector('.highlight_img').innerHTML += highlightImg;
        }
    });
};

let tagsRender = () => {

    let tagsArray = [];

    grafficaData.tags.domestika.forEach(post => {
        if (post.section == 'tags') {
            tagsArray.push(post);

            if (post.type == 'post') {
                let displayedTag = `
                <div class="ti_articles_view">
                    <div class="ai_bg">
                            <img src="${post.img}" alt="${post.tittle}">
                        </div>
                        <div class="ai_content">
                            <div class="ai_name">${post.tag}</div>
                            <div class="ai_tittle">${post.tittle}</div>
                            <div class="ai_author">
                                <div class="ai_by">por</div>
                                <div class="ai_author_name">${post.author}</div>
                            </div>
                            <div class="ti_big_button">leer</div>
                    </div>
                </div>
                    `;

                document.querySelector('.displayed_article').innerHTML += displayedTag;
            }

            if (post.type == 'prev') {
                let tag = `
                <article class="ti_articles_view preview">
                    <div class="ai_bg">
                        <img src="${post.img}" alt="${post.tittle}">
                    </div>
                    <div class="ai_content">
                        <div class="ai_name">${post.tag}</div>
                        <div class="ai_tittle">${post.tittle}</div>
                        <div class="ai_author">
                            <div class="ai_by">por</div>
                            <div class="ai_author_name">${post.author}</div>
                        </div>
                        <div class="ti_big_button">leer</div>
                    </div>
                </article>
                `;

                document.querySelector('.preview_article').innerHTML += tag;
            }
        }

    });

};



/**
 * EVENTOS
 */

const searchboxOpen = () => {
    const searchboxIcon = document.querySelector('.header_toggles .search .fa');
    const searchbox = document.querySelector('.searchbox');
    let searchboxOpened = false;


    searchboxIcon.addEventListener('click', () => {
        searchbox.classList.toggle('opened');
    });
};

const menuAside = () => {
    const cartIcon = document.querySelector('.header_toggles .cart .fa');
    const asideMenu = document.querySelector('.aside_menu');
    
    cartIcon.addEventListener('click', () => {
        asideMenu.classList.toggle('opened');
    });
}


const postsMenu = () => {
    const postsMenuIcon = document.querySelectorAll('.post .post_menu_icon .fa');

    for (let i = 0; i < postsMenuIcon.length; i++) {
        postsMenuIcon[i].addEventListener('click', () => {
            const indivPost = postsMenuIcon[i].closest('.post');
            indivPost.classList.toggle('opened_floating_menu');
        });
    }
};
