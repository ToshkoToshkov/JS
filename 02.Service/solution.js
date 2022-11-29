window.addEventListener('load', solve);

function solve(){
    const inputs = {
        type: document.getElementById('type-product'),
        description: document.getElementById('description'),
        clientName: document.getElementById('client-name'),
        clientPhone: document.getElementById('client-phone')
    }

    const lists = {
        receivedOrders: document.getElementById('received-orders'),
        completedOrders: document.getElementById('completed-orders')
    }

    const sendFormBtn = document.querySelector('button[type="submit"]').addEventListener('click', sendForm);

    function sendForm(ev){
        ev.preventDefault();

        const type = inputs.type.value;
        const description = inputs.description.value;
        const clientName = inputs.clientName.value;
        const clientPhone = inputs.clientPhone.value;

        if(description == '' || clientName == '' || clientPhone == ''){
            return;
        }

        const div = document.createElement('div');
        div.className = 'container';
        div.innerHTML = `
            <h2>Product type for repair: ${type}</h2>
            <h3>Client information: ${clientName}, ${clientPhone}</h3>
            <h4>Description of the problem: ${description}</h4>
            <button class="start-btn">Start repair</button>
            <button class="finish-btn" disabled>Finish repair</button>
        `;
        
        lists.receivedOrders.appendChild(div);
        
        inputs.type.value = '';
        inputs.description.value = '';
        inputs.clientName.value = '';
        inputs.clientPhone.value = '';
        
        const startBtn = div.querySelector('.start-btn');
        startBtn.addEventListener('click', start);

        const finishBtn = div.querySelector('.finish-btn');
        finishBtn.addEventListener('click', finish)


        function start(){
            startBtn.disabled = true;
            finishBtn.disabled = false;
        }

        function finish(){
            lists.completedOrders.appendChild(div);
            startBtn.remove();
            finishBtn.remove();
        }

        const clearBtn = document.querySelector('.clear-btn');
        clearBtn.addEventListener('click', clear);

        function clear(){
            lists.completedOrders.innerHTML = '';
        }
    }
}