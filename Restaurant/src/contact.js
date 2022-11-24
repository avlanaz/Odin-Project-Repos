const babaURL = "https://images.unsplash.com/photo-1602289313886-60b6cd71b3dd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1885&q=80";
const sefURL = "https://images.pexels.com/photos/3338540/pexels-photo-3338540.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1";
const teyzeURL = "https://images.pexels.com/photos/14425947/pexels-photo-14425947.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1";

var contactPage = (`
<h1>Contact Us</h1>

<div class="card-container">
    <div class="card">
        <div class="contact-detail">
            <h2>Ser Sahip</h2>
            <p>0301-xxx-xxx</p>
        </div>
        <img src=${babaURL} />
    </div>
    <div class="card">
        <div class="contact-detail">
            <h2>Baba Chef</h2>
            <p>0301-xxx-xxx</p>
        </div>
        <img src=${sefURL} />
    </div>
    <div class="card">
        <div class="contact-detail">
            <h2>Auntie Garson</h2>
            <p>0301-xxx-xxx</p>
        </div>
        <img src=${teyzeURL} />
    </div>
</div>
`)

export default contactPage;