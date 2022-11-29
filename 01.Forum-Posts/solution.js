window.addEventListener('load', solve);

function solve(){

    const input = {
        title: document.getElementById('post-title'),
        category: document.getElementById('post-category'),
        content: document.getElementById('post-content')
    };

    const lists = {
        review: document.getElementById('review-list'),
        publish: document.getElementById('published-list')
    };

    const publishBtn = document.getElementById('publish-btn').addEventListener('click',publish);

    document.getElementById('clear-btn').addEventListener('click', clear);

    function publish(ev){
        ev.preventDefault();

        const title = input.title.value;
        const category = input.category.value;
        const content = input.content.value;

        if(title == '' || category == '' || content == ''){
            return;
        }

        //Generate elements with innerHtml, fastest    solution for exam
        // const li = document.createElement('li');
        // li.className = 'rpost';
        // li.innerHTML = `
        //     <article>
        //         <h4>${title}</h4>
        //         <p>Category: ${category}</p>
        //         <p>Content: ${content}</p>
        //     </article>
        //     <button class="action-btn edit>Edit</button>
        //     <button class="action-btn approve">Approve</button>`;
        
        const li = elGenerator('li');
        li.setAttribute('class', 'rpost');
        const article = elGenerator('article', '', li);
        elGenerator('h4', `${title}`, article);
        elGenerator('p', `Category: ${category}`, article);
        elGenerator('p', `Content: ${content}`, article);

        const approveBtn = elGenerator('button', 'Approve', li);
        approveBtn.setAttribute('class', 'action-btn approve');

        const editBtn = elGenerator('button', 'Edit', li);
        editBtn.setAttribute('class', 'action-btn edit');

        const editButton = li.querySelector('.edit');
        editButton.addEventListener('click', edit);

        const approveButton = li.querySelector('.approve');
        approveButton.addEventListener('click', approve);

        lists.review.appendChild(li);

        input.title.value = '';
        input.category.value = '';
        input.content.value = '';

        function edit(){
            input.title.value = title;
            input.category.value = category;
            input.content.value = content;

            li.remove();
        }
    
        function approve(){
            lists.publish.appendChild(li);
            editButton.remove();
            approveButton.remove();
        }
    }

    function clear(){
        lists.publish.innerHTML = '';
        
    }

    function elGenerator(type, content, parent) {
        const element = document.createElement(type);
        element.textContent = content;
  
        if (parent) {
          parent.appendChild(element);
        }
        return element;
      }

    
}